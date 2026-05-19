import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  MdHome, MdSearch, MdLibraryMusic, MdDownload,
  MdFavorite, MdHistory, MdSettings,
} from 'react-icons/md'
import { LibrarySection } from './LibrarySection'

const nav = [
  { to: '/',           icon: MdHome,          label: 'Home' },
  { to: '/search',     icon: MdSearch,         label: 'Search' },
  { to: '/library',    icon: MdLibraryMusic,   label: 'Library' },
]

const sub = [
  { to: '/liked',      icon: MdFavorite,       label: 'Liked Songs' },
  { to: '/downloads',  icon: MdDownload,        label: 'Downloads' },
]

export function Sidebar() {
  return (
    <aside
      className="flex flex-col w-60 shrink-0 h-full overflow-hidden border-r border-border"
      style={{ background: 'var(--sidebar-bg)' }}
    >
      <div className="px-6 py-6">
        <h1 className="text-text font-bold text-2xl tracking-tight">Shulker</h1>
      </div>

      <nav className="px-3 space-y-1">
        {nav.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} end className={({ isActive }) => cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
            isActive ? 'bg-card text-text' : 'text-sub hover:text-text hover:bg-card/50'
          )}>
            <Icon size={20} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-4 px-3 space-y-1">
        {sub.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} className={({ isActive }) => cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
            isActive ? 'bg-card text-text' : 'text-sub hover:text-text hover:bg-card/50'
          )}>
            <Icon size={20} />
            {label}
          </NavLink>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto mt-4">
        <LibrarySection />
      </div>

      <div className="px-3 py-3 border-t border-border">
        <NavLink to="/settings" className={({ isActive }) => cn(
          'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
          isActive ? 'bg-card text-text' : 'text-sub hover:text-text hover:bg-card/50'
        )}>
          <MdSettings size={20} />
          Settings
        </NavLink>
      </div>
    </aside>
  )
}
