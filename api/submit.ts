import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Redis } from '@upstash/redis'
import { randomUUID } from 'node:crypto'

const URL_CANDIDATES = [
  'KV_REST_API_URL',
  'UPSTASH_REDIS_REST_URL',
  'REDIS_REST_URL',
  'STORAGE_URL',
]
const TOKEN_CANDIDATES = [
  'KV_REST_API_TOKEN',
  'UPSTASH_REDIS_REST_TOKEN',
  'REDIS_REST_TOKEN',
  'STORAGE_TOKEN',
]

function findEnv(candidates: string[]): string | undefined {
  for (const name of candidates) {
    if (process.env[name]) return process.env[name]
  }
  return undefined
}

function getRedis() {
  const url = findEnv(URL_CANDIDATES)
  const token = findEnv(TOKEN_CANDIDATES)
  if (!url || !token) return null
  return new Redis({ url, token })
}

function clip(value: unknown, max: number): string {
  return String(value ?? '').slice(0, max)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const redis = getRedis()
  if (!redis) {
    return res.status(500).json({ error: 'Ma\'lumotlar bazasi ulanmagan (Redis env vars yo\'q)' })
  }

  const body = req.body as Record<string, unknown>
  if (!body || typeof body !== 'object') return res.status(400).json({ error: 'Invalid body' })

  try {
    if (body.type === 'lead') {
      const firstName = clip(body.firstName, 100)
      const phone = clip(body.phone, 30)
      if (!firstName || !phone) {
        return res.status(400).json({ error: 'Ism va telefon raqami majburiy' })
      }
      const entry = {
        id: randomUUID(),
        firstName,
        lastName: clip(body.lastName, 100),
        phone,
        telegram: clip(body.telegram, 100),
        note: clip(body.note, 500),
        lang: clip(body.lang, 10) || 'UZ',
        createdAt: new Date().toISOString(),
      }
      await redis.lpush('meros:leads', JSON.stringify(entry))
      return res.status(200).json({ ok: true })
    }

    if (body.type === 'event') {
      const label = clip(body.label, 100)
      if (!label) return res.status(400).json({ error: 'label required' })
      const entry = {
        id: randomUUID(),
        label,
        lang: clip(body.lang, 10) || 'UZ',
        createdAt: new Date().toISOString(),
      }
      await redis.lpush('meros:events', JSON.stringify(entry))
      await redis.ltrim('meros:events', 0, 499)
      return res.status(200).json({ ok: true })
    }

    return res.status(400).json({ error: 'Unknown type' })
  } catch (err) {
    return res.status(500).json({ error: 'Server xatosi', detail: err instanceof Error ? err.message : String(err) })
  }
}
