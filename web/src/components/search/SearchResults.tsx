import type { Track } from '@/types/track'
import { TrackList } from '@/components/library/TrackList'
import { Spinner } from '@/components/ui/Spinner'

interface Props {
  tracks: Track[]
  loading: boolean
  query: string
  onPlay: (track: Track, tracks: Track[]) => void
}

export function SearchResults({ tracks, loading, query, onPlay }: Props) {
  if (loading) return <div className="flex justify-center mt-12"><Spinner /></div>
  if (!query) return null
  if (tracks.length === 0) return (
    <p className="text-sub text-center mt-12">No results for "{query}"</p>
  )
  return <TrackList tracks={tracks} onPlay={onPlay} />
}
