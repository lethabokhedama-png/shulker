import { useQuery } from '@tanstack/react-query'
import { lyricsApi } from '@/api/lyrics'
import type { Track } from '@/types/track'

export function useLyrics(track: Track | null) {
  return useQuery({
    queryKey: ['lyrics', track?.id],
    queryFn: () => lyricsApi.get(track!.title, track!.artist, track!.album, track!.duration),
    enabled: !!track,
    staleTime: Infinity,
  })
}
