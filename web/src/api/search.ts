import client from './client'
import type { TrackList } from '@/types/track'

export const searchApi = {
  query: (q: string) =>
    client.get<TrackList & { query: string }>('/search/', { params: { q } }).then(r => r.data),
}
