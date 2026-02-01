import type { Track } from '@/types/lastfm'
import type { LastFmResponse } from '@/types/lastfm-raw'
import { cachedFetch } from '@/lib/cache'
import { site } from '@/data/site'

const API = 'https://ws.audioscrobbler.com/2.0/'
const TTL = 1000 * 60 * 30

export async function getTopTracks(): Promise<Track[]> {
  try {
    return await cachedFetch('lastfm-toptracks', TTL, async () => {
      const url = `${API}?method=user.gettoptracks&user=${import.meta.env.LASTFM_USERNAME}&api_key=${import.meta.env.LASTFM_APIKEY}&format=json&limit=100`
      const res = await fetch(url, {
        headers: {
          'User-Agent': `${site.url}/1.0`,
        },
      })

      if (!res.ok) {
        throw new Error(`LastFM ${res.status}`)
      }

      const json = (await res.json()) as LastFmResponse

      if (!json?.toptracks?.track?.length) {
        return []
      }

      return json.toptracks.track.map(mapTrack)
    })
  } catch (err) {
    console.error('[LastFM]', err)
    return []
  }
}

function mapTrack(t: LastFmResponse['toptracks']['track'][number]): Track {
  return {
    name: t.name,
    artist: t.artist.name,
  }
}
