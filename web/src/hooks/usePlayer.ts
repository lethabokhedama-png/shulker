import { useCallback, useEffect, useRef } from 'react'
import { Howl } from 'howler'
import { usePlayerStore } from '@/store/playerStore'
import { useQueueStore } from '@/store/queueStore'
import { tracksApi } from '@/api/tracks'
import type { Track } from '@/types/track'

export function usePlayer() {
  const howlRef = useRef<Howl | null>(null)
  const store = usePlayerStore()
  const { nextTrack } = useQueueStore()

  const loadTrack = useCallback((track: Track) => {
    howlRef.current?.unload()
    const howl = new Howl({
      src: [tracksApi.audioUrl(track.id)],
      html5: true,
      volume: store.volume,
      onload: () => store.setDuration(howl.duration()),
      onend: () => {
        const next = nextTrack()
        if (next) loadTrack(next)
        else store.setIsPlaying(false)
      },
    })
    howlRef.current = howl
    store.setCurrentTrack(track)
    howl.play()
    store.setIsPlaying(true)
  }, [store, nextTrack])

  const play = useCallback(() => {
    howlRef.current?.play()
    store.setIsPlaying(true)
  }, [store])

  const pause = useCallback(() => {
    howlRef.current?.pause()
    store.setIsPlaying(false)
  }, [store])

  const seek = useCallback((pct: number) => {
    const howl = howlRef.current
    if (!howl) return
    howl.seek(pct * howl.duration())
  }, [])

  const setVolume = useCallback((v: number) => {
    howlRef.current?.volume(v)
    store.setVolume(v)
  }, [store])

  useEffect(() => {
    let raf: number
    const tick = () => {
      const howl = howlRef.current
      if (howl?.playing()) {
        const pos = howl.seek() as number
        store.setProgress(pos / (howl.duration() || 1))
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [store])

  return { loadTrack, play, pause, seek, setVolume }
}
