import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  active?: boolean
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = 'md', active, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-150 cursor-pointer',
        'hover:text-text hover:scale-110',
        active ? 'text-accent' : 'text-sub',
        size === 'sm' && 'w-7 h-7 text-base',
        size === 'md' && 'w-9 h-9 text-xl',
        size === 'lg' && 'w-12 h-12 text-2xl',
        className
      )}
      {...props}
    />
  )
)
IconButton.displayName = 'IconButton'
