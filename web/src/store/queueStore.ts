import { create } from 'zustand'
import type { Track } from '@/types/track'

interface QueueStore {
  queue: Track[]
  queueIndex: number
  addToQueue: (track: Track) => void
  setQueue: (tracks: Track[], startIndex?: number) => void
  nextTrack: () => Track | null
  prevTrack: () => Track | null
  removeFromQueue: (index: number) => void
  clearQueue: () => void
}

export const useQueueStore = create<QueueStore>((set, get) => ({
  queue: [],
  queueIndex: 0,
  addToQueue: (track) => set(s => ({ queue: [...s.queue, track] })),
  setQueue: (tracks, startIndex = 0) => set({ queue: tracks, queueIndex: startIndex }),
  nextTrack: () => {
    const { queue, queueIndex } = get()
    const next = queueIndex + 1
    if (next < queue.length) {
      set({ queueIndex: next })
      return queue[next]
    }
    return null
  },
  prevTrack: () => {
    const { queue, queueIndex } = get()
    const prev = queueIndex - 1
    if (prev >= 0) {
      set({ queueIndex: prev })
      return queue[prev]
    }
    return null
  },
  removeFromQueue: (index) =>
    set(s => ({ queue: s.queue.filter((_, i) => i !== index) })),
  clearQueue: () => set({ queue: [], queueIndex: 0 }),
}))
