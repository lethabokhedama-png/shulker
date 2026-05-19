import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ThemeId } from '@/types/theme'

interface ThemeStore {
  theme: ThemeId
  setTheme: (t: ThemeId) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => {
        document.documentElement.setAttribute('data-theme', theme)
        set({ theme })
      },
    }),
    { name: 'shulker-theme' }
  )
)
