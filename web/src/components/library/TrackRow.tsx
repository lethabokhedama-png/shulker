import type { Track } from '@/types/track'
import { usePlayerStore } from '@/store/playerStore'
import { tracksApi } from '@/api/tracks'
import { formatDuration } from '@/lib/formatters'
import { cn } from '@/lib/utils'
import { MdPlayArrow } from 'react-icons/md'

interface Props {
  track: Track
  index: number
  onPlay: () => void
}

export function TrackRow({ track, index, onPlay }: Props) {
  const currentTrack = usePlayerStore(s => s.currentTrack)
  const isActive = currentTrack?.id === track.id

  return (
    <div
      onDoubleClick={onPlay}
      className={cn(
        'grid grid-cols-[16px_1fr_1fr_80px] gap-4 px-4 py-2 rounded-md group cursor-pointer hover:bg-card transition-colors',
        isActive && 'bg-card'
      )}
    >
      <span className={cn(
        'text-xs self-center',
        isActive ? 'text-accent' : 'text-sub group-hover:hidden'
      )}>
        {!isActive && <span className="group-hover:hidden">{index}</span>}
        <MdPlayArrow className="hidden group-hover:block" size={16} />
      </span>

      <div className="flex items-center gap-3 min-w-0">
        <img
          src={tracksApi.artworkUrl(track.id)}
          alt=""
          className="w-10 h-10 rounded object-cover bg-card shrink-0"
        />
        <div className="min-w-0">
          <p className={cn('text-sm truncate', isActive ? 'text-accent' : 'text-text')}>
            {track.title}
          </p>
          <p className="text-sub text-xs truncate">{track.artist}</p>
        </div>
      </div>

      <span className="text-sub text-sm self-center truncate">{track.album}</span>
      <span className="text-sub text-sm self-center text-right">{formatDuration(track.duration)}</span>
    </div>
  )
}
