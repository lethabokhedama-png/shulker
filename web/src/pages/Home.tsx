import { useQuery } from '@tanstack/react-query'
import { tracksApi } from '@/api/tracks'
import { TrackList } from '@/components/library/TrackList'
import { useQueueStore } from '@/store/queueStore'
import { usePlayer } from '@/hooks/usePlayer'
import { DownloadButton } from '@/components/download/DownloadButton'
import type { Track } from '@/types/track'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['tracks'],
    queryFn: () => tracksApi.list(0, 50),
  })
  const { setQueue } = useQueueStore()
  const { loadTrack } = usePlayer()

  const handlePlay = (track: Track, tracks: Track[]) => {
    setQueue(tracks, tracks.indexOf(track))
    loadTrack(track)
  }

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-text text-2xl font-bold">Your Library</h2>
        <DownloadButton />
      </div>
      {isLoading && (
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-14 rounded-md bg-card animate-pulse" />
          ))}
        </div>
      )}
      {data && <TrackList tracks={data.tracks} onPlay={handlePlay} />}
      {data?.tracks.length === 0 && (
        <div className="text-center mt-24">
          <p className="text-text text-xl font-semibold mb-2">No music yet</p>
          <p className="text-sub text-sm mb-6">Download tracks using a Spotify URL</p>
          <DownloadButton />
        </div>
      )}
    </div>
  )
}
