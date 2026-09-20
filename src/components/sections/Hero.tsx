'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ConstellationCanvas from '@/components/ui/ConstellationCanvas'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-graphite"
    >
      {/* Constellation */}
      <div className="absolute inset-0 z-0">
        <ConstellationCanvas />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(23,23,23,0.85) 100%)',
        }}
      />

      {/* Plum accent glow */}
      <div
        className="absolute z-[1] rounded-full pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -55%)',
          background: 'radial-gradient(circle, rgba(63,29,56,0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mb-8 tag-pill"
        >
          Product Designer · Computer Science Engineer
        </motion.div>

        {/* Main name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-serif text-ivory leading-none tracking-tighter select-none"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 9.5rem)' }}
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          >
            Sekhar
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.div
            className="font-serif leading-none tracking-tighter select-none"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 9.5rem)' }}
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
          >
            <span className="text-gradient-gold">Harshitha</span>
          </motion.div>
        </div>

        {/* Gold divider */}
        <motion.div
          className="w-24 mb-10 gold-divider"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
        />

        {/* Tagline */}
        <motion.p
          className="font-sans text-stone font-light max-w-xl leading-relaxed mb-14"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
        >
          Designing thoughtful products for{' '}
          <em className="text-gold not-italic">climate</em>,{' '}
          <em className="text-gold not-italic">cities</em>, and everyday life.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.15 }}
        >
          <MagneticButton href="#work" variant="primary">
            View Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </MagneticButton>
          <MagneticButton href="/resume.pdf" variant="ghost" newTab>
            Resume
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1v8m-3-3 3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="font-sans text-xs tracking-[0.2em] uppercase text-stone-dark">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-stone-dark/60 to-transparent"
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Bottom gradient blend */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[2]"
        style={{ background: 'linear-gradient(to top, #171717, transparent)' }}
      />
    </section>
  )
}
