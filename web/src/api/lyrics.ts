import client from './client'

export const lyricsApi = {
  get: (title: string, artist: string, album = '', duration = 0) =>
    client.get<{ plain: string | null; synced: string | null }>(
      '/lyrics/',
      { params: { title, artist, album, duration } }
    ).then(r => r.data),
}
