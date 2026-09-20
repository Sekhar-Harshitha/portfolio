'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Reveal } from '@/components/ui/RevealText'

const achievements = [
  {
    id: 'winner',
    badge: '🏆',
    rank: 'National Hackathon Winner',
    description: 'Competed and won recognition at national level across multiple hackathon editions, spanning AI, climate, civic technology, and enterprise design challenges.',
    tags: ['National', 'Multi-domain', 'Product Design'],
    featured: false,
  },
  {
    id: 'naturals',
    badge: '✨',
    rank: 'Top Finalist',
    event: "India's First Beauty Tech Hackathon",
    organizer: 'Naturals Salon & Academy',
    description:
      'Top Finalist at India\'s first-ever Beauty Tech Hackathon organised by Naturals Salon — competing against 200+ teams nationwide with Naturals Beauty OS, an inclusive AI-powered personalised beauty recommendation system.',
    tags: ['Beauty Tech', 'AI', 'Computer Vision', 'National'],
    featured: true,
  },
]

export default function Achievement() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="achievement"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #171717 0%, #1e0f1b 60%, #171717 100%)' }}
    >
      {/* Section Header */}
      <div className="mb-16 md:mb-20">
        <Reveal direction="left" delay={0}>
          <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Recognition
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h2
            className="font-serif text-ivory leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}
          >
            Recognised on the{' '}
            <em className="text-gradient-gold not-italic">national stage.</em>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <div className="mt-6 gold-divider max-w-xs" />
        </Reveal>
      </div>

      {/* Achievement Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mb-20">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 + index * 0.15 }}
            className="h-full"
          >
            <div
              className="relative rounded-3xl p-8 h-full flex flex-col gap-6 overflow-hidden"
              style={item.featured ? {
                background: 'linear-gradient(135deg, rgba(63,29,56,0.65) 0%, rgba(42,18,38,0.85) 60%, rgba(26,15,23,0.95) 100%)',
                border: '1px solid rgba(212,175,55,0.25)',
                boxShadow: '0 0 80px -20px rgba(212,175,55,0.12)',
              } : {
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Ambient glow for featured */}
              {item.featured && (
                <div
                  className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }}
                />
              )}

              {/* Header row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background: item.featured
                        ? 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))'
                        : 'rgba(255,255,255,0.05)',
                      border: item.featured ? '1px solid rgba(212,175,55,0.3)' : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {item.badge}
                  </div>
                  <div>
                    <p className="font-serif text-xl leading-snug" style={{ color: item.featured ? '#E8CA6A' : '#E8E5DF' }}>
                      {item.rank}
                    </p>
                    {item.event && (
                      <p className="text-stone/70 text-sm mt-0.5 leading-snug">{item.event}</p>
                    )}
                    {item.organizer && (
                      <p className="text-stone/40 text-xs mt-0.5 tracking-wide">{item.organizer}</p>
                    )}
                  </div>
                </div>
                {item.featured && (
                  <div className="flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', color: '#D4AF37' }}>
                    Featured
                  </div>
                )}
              </div>

              <div className="gold-divider opacity-40" />

              {/* Description */}
              <p className="text-stone/65 text-sm leading-relaxed flex-1">{item.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Editorial paragraph */}
      <Reveal direction="up" delay={0.4}>
        <div className="max-w-2xl">
          <div className="gold-divider max-w-xs mb-10" />
          <p className="text-stone/60 text-base leading-relaxed mb-6">
            Hackathons shaped how I think about products. Not the trophies — the constraints. Forty-eight hours, a half-formed idea, and a problem that actually matters forces you to be ruthlessly intentional about what you build and why.
          </p>
          <p className="text-stone/50 text-base leading-relaxed">
            Competing in spaces as unexpected as beauty tech and as consequential as civic AI taught me that the best product thinking doesn&apos;t come from comfort. It comes from being thrown into a domain you barely know and having to make something that genuinely helps someone by morning.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
