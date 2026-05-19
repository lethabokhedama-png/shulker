import { Howl } from 'howler'

let currentHowl: Howl | null = null

export function createHowl(src: string, onEnd: () => void): Howl {
  if (currentHowl) {
    currentHowl.unload()
  }
  currentHowl = new Howl({
    src: [src],
    html5: true,
    preload: true,
    onend: onEnd,
  })
  return currentHowl
}

export function getCurrentHowl(): Howl | null {
  return currentHowl
}
