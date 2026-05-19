import { usePlayerStore } from '@/store/playerStore'
import { usePlayer } from '@/hooks/usePlayer'
import { Slider } from '@/components/ui/Slider'

export function ProgressSlider() {
  const { progress } = usePlayerStore()
  const { seek } = usePlayer()

  return <Slider value={progress} onChange={seek} className="flex-1" accent />
}
