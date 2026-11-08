import type { VercelRequest, VercelResponse } from '@vercel/node'
import { randomUUID } from 'node:crypto'
import { getRedis } from '../lib/redis.js'

function clip(value: unknown, max: number): string {
  return String(value ?? '').slice(0, max)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const body = req.body as Record<string, unknown>
  if (!body || typeof body !== 'object') return res.status(400).json({ error: 'Invalid body' })

  try {
    const redis = await getRedis()
    if (!redis) {
      return res.status(500).json({ error: 'Ma\'lumotlar bazasi ulanmagan (REDIS_URL yo\'q)' })
    }

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
      await redis.lPush('meros:leads', JSON.stringify(entry))
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
      await redis.lPush('meros:events', JSON.stringify(entry))
      await redis.lTrim('meros:events', 0, 499)
      return res.status(200).json({ ok: true })
    }

    return res.status(400).json({ error: 'Unknown type' })
  } catch (err) {
    return res.status(500).json({ error: 'Server xatosi', detail: err instanceof Error ? err.message : String(err) })
  }
}
