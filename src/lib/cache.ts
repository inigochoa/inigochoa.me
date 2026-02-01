import fs from 'node:fs/promises'
import path from 'node:path'

interface CacheFile<T> {
  timestamp: number
  data: T
}

export async function cachedFetch<T>(
  key: string,
  ttlMs: number,
  fetcher: () => Promise<T>
): Promise<T> {
  const file = path.resolve('.cache', `${key}.json`)

  try {
    const raw = await fs.readFile(file, 'utf8')
    const cache = JSON.parse(raw) as CacheFile<T>

    if (Date.now() - cache.timestamp < ttlMs) {
      return cache.data
    }
  } catch {
    // cache miss
  }

  const data = await fetcher()

  await fs.mkdir('.cache', { recursive: true })

  const payload: CacheFile<T> = {
    timestamp: Date.now(),
    data
  }

  if (Array.isArray(data) && 0 === data.length) {
    return data
  }

  await fs.writeFile(file, JSON.stringify(payload, null, 2))

  return data
}
