import { usePlayerStore } from '@/store/playerStore'
import { useLyrics } from '@/hooks/useLyrics'
import { useUIStore } from '@/store/uiStore'
import { MdClose } from 'react-icons/md'
import { Spinner } from '@/components/ui/Spinner'

export function LyricsPanel() {
  const currentTrack = usePlayerStore(s => s.currentTrack)
  const toggleLyrics = useUIStore(s => s.toggleLyrics)
  const { data, isLoading } = useLyrics(currentTrack)

  return (
    <div className="w-80 h-full flex flex-col bg-surface border-l border-border">
      <div className="flex items-center justify-between px-4 py-4 border-b border-border">
        <h3 className="text-text font-semibold">Lyrics</h3>
        <button onClick={toggleLyrics} className="text-sub hover:text-text"><MdClose size={18} /></button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {isLoading && <div className="flex justify-center mt-8"><Spinner /></div>}
        {!isLoading && !data?.plain && (
          <p className="text-sub text-sm text-center mt-8">No lyrics found</p>
        )}
        {data?.plain && (
          <pre className="text-text text-sm leading-7 whitespace-pre-wrap font-sans">
            {data.plain}
          </pre>
        )}
      </div>
    </div>
  )
}
