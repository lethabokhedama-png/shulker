import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router-dom'
import { playlistsApi } from '@/api/playlists'
import { cn } from '@/lib/utils'
import { MdAdd, MdPlaylistPlay } from 'react-icons/md'

export function LibrarySection() {
  const { data: playlists = [] } = useQuery({
    queryKey: ['playlists'],
    queryFn: playlistsApi.list,
  })

  return (
    <div className="px-3">
      <div className="flex items-center justify-between px-3 mb-2">
        <span className="text-sub text-xs font-semibold uppercase tracking-wider">Playlists</span>
        <button className="text-sub hover:text-text transition-colors"><MdAdd size={18} /></button>
      </div>
      {playlists.map(pl => (
        <NavLink key={pl.id} to={`/playlist/${pl.id}`} className={({ isActive }) => cn(
          'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors',
          isActive ? 'text-text bg-card' : 'text-sub hover:text-text'
        )}>
          <MdPlaylistPlay size={16} />
          <span className="truncate">{pl.name}</span>
        </NavLink>
      ))}
    </div>
  )
}
