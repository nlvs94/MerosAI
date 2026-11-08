import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getRedis } from './_redis'

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

  try {
    const redis = await getRedis()
    if (!redis) {
      return res.status(500).json({
        error: 'Ma\'lumotlar bazasi ulanmagan (REDIS_URL topilmadi)',
        hint: 'Vercel loyihasida Storage > Redis ulangandan so\'ng qayta Redeploy qiling.',
      })
    }

    const [leadsRaw, eventsRaw] = await Promise.all([
      redis.lRange('meros:leads', 0, 299),
      redis.lRange('meros:events', 0, 499),
    ])

    return res.status(200).json({
      leads: parseEntries(leadsRaw),
      events: parseEntries(eventsRaw),
    })
  } catch (err) {
    return res.status(500).json({ error: 'Server xatosi', detail: err instanceof Error ? err.message : String(err) })
  }
}
