'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Reveal } from '@/components/ui/RevealText'

const steps = [
  {
    number: '01',
    label: 'Empathize',
    description: 'Listening deeply to understand the human at the center of every problem.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C9 4 5 8 5 13c0 3 1.5 5.5 4 7v3h10v-3c2.5-1.5 4-4 4-7 0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M10 21v3h8v-3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    number: '02',
    label: 'Define',
    description: 'Translating messy insights into a clear, actionable problem statement.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 10h12M8 14h8M8 18h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    label: 'Ideate',
    description: 'Exploring the full solution space — from obvious to unexpected.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="12" r="6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 20h6M12 23h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M14 6V4M8 8l-1.5-1.5M20 8l1.5-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '04',
    label: 'Prototype',
    description: 'Building just enough to learn — fast, scrappy, and testable.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 6V4h10a2 2 0 012 2v16a2 2 0 01-2 2h-6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 11h6M7 15h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '05',
    label: 'Validate',
    description: 'Putting real work in front of real people. Humbling every time.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 14l3.5 3.5L19 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col gap-4 p-6 rounded-2xl glass group hover:border-gold/20 transition-colors duration-500"
      style={{ border: '1px solid rgba(255,255,255,0.05)' }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Step number (background) */}
      <span
        className="absolute top-4 right-5 font-serif text-5xl leading-none select-none pointer-events-none"
        style={{ color: 'rgba(212,175,55,0.06)' }}
      >
        {step.number}
      </span>

      {/* Icon */}
      <motion.div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-gold"
        style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.12)' }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.3 }}
      >
        {step.icon}
      </motion.div>

      {/* Label */}
      <h3 className="font-serif text-2xl text-ivory">{step.label}</h3>

      {/* Description */}
      <p className="text-stone/70 text-sm leading-relaxed">{step.description}</p>

      {/* Connector arrow (not on last) */}
    </motion.div>
  )
}

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #171717 0%, #1E0F1A 50%, #171717 100%)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(63,29,56,0.35) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <Reveal direction="left" delay={0}>
            <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Design Philosophy
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2
              className="font-serif text-ivory leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
            >
              How I think<br />
              <span className="text-stone/40">about design.</span>
            </h2>
          </Reveal>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Bottom quote */}
        <Reveal direction="up" delay={0.3}>
          <div className="mt-16 md:mt-20 text-center max-w-2xl mx-auto">
            <div className="gold-divider mb-10" />
            <blockquote className="font-serif text-2xl md:text-3xl text-ivory/80 italic leading-relaxed">
              "Good design is invisible. Great design is unforgettable."
            </blockquote>
            <p className="mt-4 text-stone/50 text-sm tracking-wide">— Sekhar Harshitha</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
