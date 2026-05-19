import { create } from 'zustand'

interface UIStore {
  sidebarOpen: boolean
  queueOpen: boolean
  lyricsOpen: boolean
  downloadModalOpen: boolean
  eqOpen: boolean
  toggleSidebar: () => void
  toggleQueue: () => void
  toggleLyrics: () => void
  setDownloadModal: (v: boolean) => void
  toggleEq: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: true,
  queueOpen: false,
  lyricsOpen: false,
  downloadModalOpen: false,
  eqOpen: false,
  toggleSidebar: () => set(s => ({ sidebarOpen: !s.sidebarOpen })),
  toggleQueue: () => set(s => ({ queueOpen: !s.queueOpen })),
  toggleLyrics: () => set(s => ({ lyricsOpen: !s.lyricsOpen })),
  setDownloadModal: (v) => set({ downloadModalOpen: v }),
  toggleEq: () => set(s => ({ eqOpen: !s.eqOpen })),
}))
