import { usePlayerStore } from '@/store/playerStore'
import { useUIStore } from '@/store/uiStore'
import { usePlayer } from '@/hooks/usePlayer'
import { PlayerControls } from './PlayerControls'
import { ProgressSlider } from './ProgressSlider'
import { VolumeControl } from './VolumeControl'
import { tracksApi } from '@/api/tracks'
import { formatDuration } from '@/lib/formatters'
import {
  MdOutlineLyrics, MdQueueMusic, MdOutlineOpenInFull
} from 'react-icons/md'
import { IconButton } from '@/components/ui/IconButton'

export function PlayerBar() {
  const { currentTrack, progress, duration } = usePlayerStore()
  const { toggleQueue, toggleLyrics } = useUIStore()

  return (
    <div
      className="h-24 flex items-center px-4 gap-4 border-t border-border shrink-0"
      style={{ background: 'var(--player-bg)' }}
    >
      <div className="flex items-center gap-3 w-64 min-w-0">
        {currentTrack ? (
          <>
            <img
              src={tracksApi.artworkUrl(currentTrack.id)}
              alt={currentTrack.title}
              className="w-14 h-14 rounded object-cover shrink-0 bg-card"
              onError={e => (e.currentTarget.src = '')}
            />
            <div className="min-w-0">
              <p className="text-text text-sm font-medium truncate">{currentTrack.title}</p>
              <p className="text-sub text-xs truncate">{currentTrack.artist}</p>
            </div>
          </>
        ) : (
          <div className="w-14 h-14 rounded bg-card shrink-0" />
        )}
      </div>

      <div className="flex-1 flex flex-col items-center gap-1.5">
        <PlayerControls />
        <div className="flex items-center gap-2 w-full max-w-xl">
          <span className="text-sub text-xs w-10 text-right">
            {formatDuration((progress) * duration)}
          </span>
          <ProgressSlider />
          <span className="text-sub text-xs w-10">
            {formatDuration(duration)}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1 w-48 justify-end">
        <VolumeControl />
        <IconButton onClick={toggleLyrics} title="Lyrics"><MdOutlineLyrics /></IconButton>
        <IconButton onClick={toggleQueue} title="Queue"><MdQueueMusic /></IconButton>
      </div>
    </div>
  )
}
