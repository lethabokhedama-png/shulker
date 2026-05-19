import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { PlayerBar } from '@/components/player/PlayerBar'
import { Queue } from '@/components/player/Queue'
import { LyricsPanel } from '@/components/lyrics/LyricsPanel'
import { DownloadModal } from '@/components/download/DownloadModal'
import { DownloadQueue } from '@/components/download/DownloadQueue'
import { useUIStore } from '@/store/uiStore'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'
import { useMediaSession } from '@/hooks/useMediaSession'
import { useDownloads } from '@/hooks/useDownloads'
import { useTheme } from '@/hooks/useTheme'

export default function App() {
  const { queueOpen, lyricsOpen, downloadModalOpen, setDownloadModal } = useUIStore()

  useTheme()
  useKeyboardShortcuts()
  useMediaSession()
  useDownloads()

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden flex flex-col bg-bg">
          <Suspense fallback={<div className="flex-1 bg-bg" />}>
            <Outlet />
          </Suspense>
        </main>
        {lyricsOpen && <LyricsPanel />}
        {queueOpen  && <Queue />}
      </div>
      <PlayerBar />
      <DownloadModal open={downloadModalOpen} onClose={() => setDownloadModal(false)} />
      <DownloadQueue />
    </div>
  )
}
