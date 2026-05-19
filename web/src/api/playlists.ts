import client from './client'
import type { Playlist } from '@/types/playlist'

export const playlistsApi = {
  list: () =>
    client.get<Playlist[]>('/playlists/').then(r => r.data),
  create: (name: string, description = '') =>
    client.post<Playlist>('/playlists/', { name, description }).then(r => r.data),
  remove: (id: string) =>
    client.delete(`/playlists/${id}`),
}
