'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Reveal } from '@/components/ui/RevealText'

const stats = [
  { number: '8', label: 'Product Projects', suffix: '' },
  { number: '8', label: 'Hackathons Participated', suffix: '+' },
  { number: '1', label: 'National Hackathon Winner', suffix: '' },
  { number: 'Top', label: "Finalist — India's First Beauty Tech Hackathon", suffix: '' },
]

const FactCounter = ({ fact, index }: { fact: typeof stats[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-1"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
    >
      <div className="font-serif text-4xl md:text-5xl text-ivory leading-none">
        {fact.number}
        <span className="text-gold">{fact.suffix}</span>
      </div>
      <p className="text-stone/55 text-xs leading-snug mt-1 max-w-[160px]">{fact.label}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-graphite">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left — Story */}
        <div>
          <Reveal direction="left" delay={0}>
            <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-6">
              About
            </p>
          </Reveal>

          <div className="overflow-hidden mb-8">
            <Reveal direction="up" delay={0.1}>
              <h2
                className="font-serif text-ivory leading-tight tracking-tight"
                style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)' }}
              >
                Designing products<br />
                <em className="text-gradient-gold not-italic">people actually want to use.</em>
              </h2>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.2}>
            <div className="gold-divider max-w-xs mb-10" />
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <p className="text-stone leading-relaxed mb-6">
              I&apos;m Sekhar Harshitha — a Computer Science student who found product design completely by accident, and then couldn&apos;t stop. It started with a hackathon. I was supposed to just write code, but I kept asking why the interface made no sense to the people it was built for.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-stone/70 leading-relaxed mb-6">
              That question led me to eight projects across AI, climate, civic technology, agri-tech, and enterprise design — built mostly under pressure, mostly in 48-hour sprints, always with real users in mind. I&apos;ve talked to farmers in Andhra Pradesh who couldn&apos;t afford to trust an app. I&apos;ve designed for flood responders who make life-or-death decisions on outdated data. I&apos;ve audited a government identity system used by 1.4 billion people and found 47 ways it was failing the people who needed it most.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.35}>
            <p className="text-stone/70 leading-relaxed mb-10">
              What I&apos;ve learned is that good design isn&apos;t about aesthetics first. It&apos;s about honesty — being honest about who you&apos;re designing for, what they actually need, and whether your product earns their trust. The aesthetics, for me, come from that honesty.
            </p>
          </Reveal>

          {/* Skills table */}
          <Reveal direction="up" delay={0.4}>
            <div className="space-y-3">
              {[
                ['Design', 'Figma · Framer · Prototyping · Design Systems'],
                ['Research', 'User interviews · Field studies · Usability testing · Journey mapping'],
                ['Engineering', 'React · Next.js · TypeScript · Python'],
                ['Domain', 'Climate tech · AI/ML · AgriTech · Civic & Gov design · Beauty tech'],
              ].map(([area, skills]) => (
                <div key={area} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3 border-b border-white/5">
                  <span className="text-gold text-xs tracking-wider uppercase font-medium min-w-[100px] pt-0.5">{area}</span>
                  <span className="text-stone/55 text-sm leading-relaxed">{skills}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — Portrait + Stats */}
        <div className="flex flex-col gap-12">
          {/* Portrait */}
          <Reveal direction="right" delay={0.15}>
            <div
              className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden"
              style={{
                border: '1px solid rgba(212,175,55,0.2)',
                boxShadow: '0 40px 80px -20px rgba(42,18,38,0.6)',
              }}
            >
              {/* Real portrait photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/harshitha.jpeg.jpeg"
                alt="Sekhar Harshitha — Product Designer &amp; CS Engineer"
                className="w-full h-full object-cover object-top"
              />

              {/* Subtle gold gradient overlay at bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(26,15,23,0.85) 0%, rgba(63,29,56,0.15) 40%, transparent 70%)',
                }}
              />

              {/* Name badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-plum rounded-2xl p-4">
                <p className="font-serif text-xl text-ivory">Sekhar Harshitha</p>
                <p className="text-gold/70 text-xs mt-1 tracking-wider">Product Designer · CS Engineer</p>
                <p className="text-stone/40 text-[10px] mt-1.5">Climate · AI · Civic Technology · Beauty Tech</p>
              </div>

              {/* Gold constellation dots */}
              {[
                [20, 30], [60, 15], [80, 45], [40, 60], [70, 70],
                [85, 25], [15, 55], [50, 80], [90, 60], [25, 75],
              ].map(([x, y], i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    left: `${x}%`, top: `${y}%`,
                    backgroundColor: 'rgba(212,175,55,0.6)',
                    animation: `pulseGold ${2 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </Reveal>


          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((fact, index) => (
              <FactCounter key={fact.label} fact={fact} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
