import { useEffect } from 'react'
import { usePlayer } from './usePlayer'
import { usePlayerStore } from '@/store/playerStore'

export function useKeyboardShortcuts() {
  const { play, pause } = usePlayer()
  const { isPlaying } = usePlayerStore()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.code === 'Space') {
        e.preventDefault()
        isPlaying ? pause() : play()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isPlaying, play, pause])
}
