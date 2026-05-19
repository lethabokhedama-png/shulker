import { useQuery } from '@tanstack/react-query'
import { tracksApi } from '@/api/tracks'
import { TrackList } from '@/components/library/TrackList'
import { useQueueStore } from '@/store/queueStore'
import { usePlayer } from '@/hooks/usePlayer'
import type { Track } from '@/types/track'

export default function Library() {
  const { data } = useQuery({ queryKey: ['tracks'], queryFn: () => tracksApi.list(0, 200) })
  const { setQueue } = useQueueStore()
  const { loadTrack } = usePlayer()

  const handlePlay = (track: Track, tracks: Track[]) => {
    setQueue(tracks, tracks.indexOf(track))
    loadTrack(track)
  }

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <h2 className="text-text text-2xl font-bold mb-6">Library</h2>
      {data && <TrackList tracks={data.tracks} onPlay={handlePlay} />}
    </div>
  )
}
