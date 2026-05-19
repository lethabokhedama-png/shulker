import { THEMES } from '@/lib/constants'
import { useTheme } from '@/hooks/useTheme'
import type { ThemeId } from '@/types/theme'
import { cn } from '@/lib/utils'
import { MdCheckCircle } from 'react-icons/md'

export function ThemePicker() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <h3 className="text-text font-semibold mb-4">Theme</h3>
      <div className="grid grid-cols-3 gap-3">
        {THEMES.map(t => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id as ThemeId)}
            className={cn(
              'relative flex flex-col items-center gap-2 p-3 rounded-xl border transition-all',
              theme === t.id ? 'border-accent' : 'border-border hover:border-muted'
            )}
          >
            <div
              className="w-full h-10 rounded-lg"
              style={{ background: t.preview }}
            />
            <span className="text-xs text-sub">{t.label}</span>
            {theme === t.id && (
              <MdCheckCircle className="absolute top-2 right-2 text-accent" size={14} />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
