import type { Track } from './track'

export type RepeatMode = 'off' | 'one' | 'all'

export interface PlayerState {
  currentTrack: Track | null
  isPlaying: boolean
  progress: number
  duration: number
  volume: number
  muted: boolean
  shuffle: boolean
  repeat: RepeatMode
}
