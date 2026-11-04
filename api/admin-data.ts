import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Redis } from '@upstash/redis'

function getRedis() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  return new Redis({ url, token })
}

function parseEntries(raw: unknown[]): Record<string, unknown>[] {
  return raw
    .map((item) => {
      if (typeof item === 'string') {
        try {
          return JSON.parse(item) as Record<string, unknown>
        } catch {
          return null
        }
      }
      return item as Record<string, unknown>
    })
    .filter((x): x is Record<string, unknown> => Boolean(x))
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    return res.status(500).json({ error: 'ADMIN_PASSWORD Vercel sozlamalarida o\'rnatilmagan' })
  }

  const provided = req.headers['x-admin-password']
  if (provided !== adminPassword) {
    return res.status(401).json({ error: 'Parol noto\'g\'ri' })
  }

  const redis = getRedis()
  if (!redis) {
    return res.status(500).json({ error: 'Ma\'lumotlar bazasi ulanmagan (Redis env vars yo\'q)' })
  }

  try {
    const [leadsRaw, eventsRaw] = await Promise.all([
      redis.lrange('meros:leads', 0, 299),
      redis.lrange('meros:events', 0, 499),
    ])

    return res.status(200).json({
      leads: parseEntries(leadsRaw),
      events: parseEntries(eventsRaw),
    })
  } catch (err) {
    return res.status(500).json({ error: 'Server xatosi', detail: err instanceof Error ? err.message : String(err) })
  }
}
