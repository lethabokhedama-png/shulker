import { useQueueStore } from '@/store/queueStore'
import { usePlayer } from '@/hooks/usePlayer'
import { QueueItem } from './QueueItem'
import { MdClose } from 'react-icons/md'
import { useUIStore } from '@/store/uiStore'

export function Queue() {
  const { queue, clearQueue } = useQueueStore()
  const { toggleQueue } = useUIStore()
  const { loadTrack } = usePlayer()

  return (
    <div className="w-80 h-full flex flex-col bg-surface border-l border-border">
      <div className="flex items-center justify-between px-4 py-4 border-b border-border">
        <h3 className="text-text font-semibold">Queue</h3>
        <div className="flex gap-2">
          <button onClick={clearQueue} className="text-xs text-sub hover:text-text">Clear</button>
          <button onClick={toggleQueue} className="text-sub hover:text-text"><MdClose size={18} /></button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {queue.length === 0
          ? <p className="text-sub text-sm text-center mt-8">Queue is empty</p>
          : queue.map((track, i) => (
              <QueueItem key={`${track.id}-${i}`} track={track} index={i} onPlay={() => loadTrack(track)} />
            ))
        }
      </div>
    </div>
  )
}
