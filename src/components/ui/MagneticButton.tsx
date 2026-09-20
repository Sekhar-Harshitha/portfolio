'use client'

import { useRef, ReactNode, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'ghost' | 'gold'
  strength?: number
  newTab?: boolean
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
  strength = 0.35,
  newTab = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 font-sans font-medium text-sm tracking-wide select-none transition-colors duration-300'

  const variantStyles = {
    primary:
      'px-7 py-3.5 rounded-full bg-ivory text-graphite hover:bg-stone border border-transparent',
    ghost:
      'px-7 py-3.5 rounded-full bg-transparent text-ivory border border-white/20 hover:border-gold/40 hover:text-gold',
    gold:
      'px-7 py-3.5 rounded-full bg-gold text-graphite hover:bg-gold-light border border-transparent',
  }

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      data-cursor-hover
    >
      {href ? (
        <a
          href={href}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
          target={(href.startsWith('http') || newTab) ? '_blank' : undefined}
          rel={(href.startsWith('http') || newTab) ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      ) : (
        <button
          onClick={onClick}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {children}
        </button>
      )}
    </motion.div>
  )

  return inner
}
