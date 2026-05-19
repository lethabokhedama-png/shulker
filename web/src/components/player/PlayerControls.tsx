import { usePlayerStore } from '@/store/playerStore'
import { useQueueStore } from '@/store/queueStore'
import { usePlayer } from '@/hooks/usePlayer'
import { IconButton } from '@/components/ui/IconButton'
import {
  MdSkipPrevious, MdSkipNext,
  MdPlayCircle, MdPauseCircle,
  MdShuffle, MdRepeat, MdRepeatOne,
} from 'react-icons/md'

export function PlayerControls() {
  const { isPlaying, shuffle, repeat, toggleShuffle, cycleRepeat } = usePlayerStore()
  const { nextTrack, prevTrack } = useQueueStore()
  const { play, pause, loadTrack } = usePlayer()

  return (
    <div className="flex items-center gap-1">
      <IconButton onClick={toggleShuffle} active={shuffle} size="sm">
        <MdShuffle />
      </IconButton>
      <IconButton onClick={() => { const t = prevTrack(); if (t) loadTrack(t) }} size="sm">
        <MdSkipPrevious />
      </IconButton>
      <button
        onClick={() => isPlaying ? pause() : play()}
        className="text-text hover:scale-105 transition-transform mx-1"
      >
        {isPlaying
          ? <MdPauseCircle size={42} />
          : <MdPlayCircle size={42} />
        }
      </button>
      <IconButton onClick={() => { const t = nextTrack(); if (t) loadTrack(t) }} size="sm">
        <MdSkipNext />
      </IconButton>
      <IconButton onClick={cycleRepeat} active={repeat !== 'off'} size="sm">
        {repeat === 'one' ? <MdRepeatOne /> : <MdRepeat />}
      </IconButton>
    </div>
  )
}
