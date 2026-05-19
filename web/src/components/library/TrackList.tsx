import type { Track } from '@/types/track'
import { TrackRow } from './TrackRow'

interface Props {
  tracks: Track[]
  onPlay: (track: Track, tracks: Track[]) => void
}

export function TrackList({ tracks, onPlay }: Props) {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[16px_1fr_1fr_80px] gap-4 px-4 py-2 text-sub text-xs font-medium uppercase tracking-wider border-b border-border">
        <span>#</span>
        <span>Title</span>
        <span>Album</span>
        <span className="text-right">Duration</span>
      </div>
      {tracks.map((track, i) => (
        <TrackRow
          key={track.id}
          track={track}
          index={i + 1}
          onPlay={() => onPlay(track, tracks)}
        />
      ))}
    </div>
  )
}
