import { useEffect, useRef } from 'react'
import { getCurrentHowl } from '@/lib/howler'

export function useAudioAnalyser() {
  const analyserRef = useRef<AnalyserNode | null>(null)
  const ctxRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    const howl = getCurrentHowl()
    if (!howl) return
    const node = (howl as any)._sounds?.[0]?._node as MediaElementAudioSourceNode | undefined
    if (!node) return
    const ctx = new AudioContext()
    const analyser = ctx.createAnalyser()
    analyser.fftSize = 256
    node.connect(analyser)
    analyser.connect(ctx.destination)
    ctxRef.current = ctx
    analyserRef.current = analyser
    return () => { ctx.close() }
  }, [])

  return analyserRef
}
