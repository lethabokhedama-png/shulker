export interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  path: string
  cover_url?: string
  genre?: string
  year?: number
  liked: boolean
  play_count: number
}

export interface TrackList {
  tracks: Track[]
  total: number
}
