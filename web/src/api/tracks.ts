import client from './client'
import type { Track, TrackList } from '@/types/track'

export const tracksApi = {
  list: (skip = 0, limit = 50) =>
    client.get<TrackList>('/tracks/', { params: { skip, limit } }).then(r => r.data),
  get: (id: string) =>
    client.get<Track>(`/tracks/${id}`).then(r => r.data),
  audioUrl: (id: string) => `/api/v1/stream/${id}/audio`,
  artworkUrl: (id: string) => `/api/v1/stream/${id}/artwork`,
}
