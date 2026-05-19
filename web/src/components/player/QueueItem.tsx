import type { Track } from '@/types/track'
import { useQueueStore } from '@/store/queueStore'
import { tracksApi } from '@/api/tracks'
import { formatDuration } from '@/lib/formatters'
import { MdClose } from 'react-icons/md'

interface Props {
  track: Track
  index: number
  onPlay: () => void
}

export function QueueItem({ track, index, onPlay }: Props) {
  const { removeFromQueue } = useQueueStore()

  return (
    <div
      className="flex items-center gap-3 px-4 py-2 hover:bg-card cursor-pointer group"
      onDoubleClick={onPlay}
    >
      <img
        src={tracksApi.artworkUrl(track.id)}
        alt={track.title}
        className="w-10 h-10 rounded object-cover bg-card shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-text text-sm truncate">{track.title}</p>
        <p className="text-sub text-xs truncate">{track.artist}</p>
      </div>
      <span className="text-sub text-xs">{formatDuration(track.duration)}</span>
      <button
        onClick={() => removeFromQueue(index)}
        className="text-sub opacity-0 group-hover:opacity-100 hover:text-text transition-opacity ml-1"
      >
        <MdClose size={14} />
      </button>
    </div>
  )
}
