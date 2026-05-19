import { useEffect } from 'react'
import { usePlayerStore } from '@/store/playerStore'

export function useMediaSession() {
  const { currentTrack, isPlaying } = usePlayerStore()

  useEffect(() => {
    if (!('mediaSession' in navigator) || !currentTrack) return
    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentTrack.title,
      artist: currentTrack.artist,
      album: currentTrack.album,
    })
    navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused'
  }, [currentTrack, isPlaying])
}
