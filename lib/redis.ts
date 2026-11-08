import { createClient } from '@redis/client'

let client: ReturnType<typeof createClient> | null = null
let connecting: Promise<void> | null = null

export async function getRedis() {
  const url = process.env.REDIS_URL
  if (!url) return null

  if (!client) {
    client = createClient({ url })
    client.on('error', (err) => console.error('Redis client error', err))
  }

  if (!client.isOpen) {
    if (!connecting) {
      connecting = client
        .connect()
        .then(() => {})
        .finally(() => {
          connecting = null
        })
    }
    await connecting
  }

  return client
}
