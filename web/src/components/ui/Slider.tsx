import { useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface SliderProps {
  value: number
  onChange: (v: number) => void
  className?: string
  accent?: boolean
}

export function Slider({ value, onChange, className, accent }: SliderProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const { left, width } = ref.current.getBoundingClientRect()
    onChange(Math.max(0, Math.min(1, (e.clientX - left) / width)))
  }, [onChange])

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={cn(
        'relative h-1 rounded-full bg-border cursor-pointer group',
        className
      )}
    >
      <div
        className={cn('h-full rounded-full transition-none', accent ? 'bg-accent' : 'bg-text')}
        style={{ width: `${value * 100}%` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-text opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ left: `calc(${value * 100}% - 6px)` }}
      />
    </div>
  )
}
