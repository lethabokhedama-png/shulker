import { create } from 'zustand'
import type { Track } from '@/types/track'
import type { RepeatMode } from '@/types/player'

interface PlayerStore {
  currentTrack: Track | null
  isPlaying: boolean
  progress: number
  duration: number
  volume: number
  muted: boolean
  shuffle: boolean
  repeat: RepeatMode
  setCurrentTrack: (track: Track | null) => void
  setIsPlaying: (v: boolean) => void
  setProgress: (v: number) => void
  setDuration: (v: number) => void
  setVolume: (v: number) => void
  toggleMute: () => void
  toggleShuffle: () => void
  cycleRepeat: () => void
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  progress: 0,
  duration: 0,
  volume: 0.8,
  muted: false,
  shuffle: false,
  repeat: 'off',
  setCurrentTrack: (currentTrack) => set({ currentTrack }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setProgress: (progress) => set({ progress }),
  setDuration: (duration) => set({ duration }),
  setVolume: (volume) => set({ volume }),
  toggleMute: () => set(s => ({ muted: !s.muted })),
  toggleShuffle: () => set(s => ({ shuffle: !s.shuffle })),
  cycleRepeat: () => {
    const order: RepeatMode[] = ['off', 'all', 'one']
    const current = get().repeat
    const next = order[(order.indexOf(current) + 1) % order.length]
    set({ repeat: next })
  },
}))
