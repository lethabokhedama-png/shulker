import { SearchBar } from '@/components/search/SearchBar'
import { SearchResults } from '@/components/search/SearchResults'
import { useSearch } from '@/hooks/useSearch'
import { useQueueStore } from '@/store/queueStore'
import { usePlayer } from '@/hooks/usePlayer'
import type { Track } from '@/types/track'

export default function Search() {
  const { query, setQuery, results, loading } = useSearch()
  const { setQueue } = useQueueStore()
  const { loadTrack } = usePlayer()

  const handlePlay = (track: Track, tracks: Track[]) => {
    setQueue(tracks, tracks.indexOf(track))
    loadTrack(track)
  }

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <h2 className="text-text text-2xl font-bold mb-6">Search</h2>
      <SearchBar value={query} onChange={setQuery} />
      <div className="mt-4">
        <SearchResults tracks={results} loading={loading} query={query} onPlay={handlePlay} />
      </div>
    </div>
  )
}
