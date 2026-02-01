export interface LastFmTrackRaw {
  name: string
  playcount: string
  artist: {
    name: string
  }
}

export interface LastFmResponse {
  toptracks: {
    track: LastFmTrackRaw[]
  }
}
