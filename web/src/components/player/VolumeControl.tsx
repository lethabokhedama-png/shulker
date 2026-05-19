import { usePlayerStore } from '@/store/playerStore'
import { usePlayer } from '@/hooks/usePlayer'
import { Slider } from '@/components/ui/Slider'
import { IconButton } from '@/components/ui/IconButton'
import { MdVolumeUp, MdVolumeOff, MdVolumeMute } from 'react-icons/md'

export function VolumeControl() {
  const { volume, muted, toggleMute } = usePlayerStore()
  const { setVolume } = usePlayer()

  const icon = muted || volume === 0
    ? <MdVolumeOff />
    : volume < 0.4 ? <MdVolumeMute /> : <MdVolumeUp />

  return (
    <div className="flex items-center gap-2">
      <IconButton onClick={toggleMute} size="sm">{icon}</IconButton>
      <Slider value={muted ? 0 : volume} onChange={setVolume} className="w-20" />
    </div>
  )
}
