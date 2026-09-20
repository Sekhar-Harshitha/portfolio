'use client'

import { Reveal } from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'
import { motion } from 'framer-motion'

const links = [
  {
    label: 'Email',
    href: 'mailto:sekarharshithaa555@gmail.com',
    value: 'sekarharshithaa555@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2 5l8 6 8-6" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sekharharshitha13/',
    value: 'linkedin.com/in/sekharharshitha13',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6 8v6M6 6v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M9 14v-3a2 2 0 014 0v3M9 10v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Sekhar-Harshitha',
    value: 'github.com/Sekhar-Harshitha',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 2a8 8 0 00-2.53 15.59c.4.074.546-.174.546-.386 0-.19-.007-.693-.01-1.36-2.226.484-2.695-1.073-2.695-1.073-.364-.924-.888-1.17-.888-1.17-.727-.497.055-.487.055-.487.803.057 1.226.825 1.226.825.714 1.223 1.873.87 2.329.665.073-.517.28-.87.508-1.07-1.777-.202-3.645-.888-3.645-3.953 0-.873.312-1.587.823-2.147-.083-.202-.357-1.015.078-2.117 0 0 .671-.215 2.2.82A7.662 7.662 0 0110 6.836a7.662 7.662 0 012.004.27c1.527-1.035 2.198-.82 2.198-.82.436 1.102.162 1.915.08 2.117.512.56.822 1.274.822 2.147 0 3.073-1.87 3.749-3.653 3.947.288.248.543.737.543 1.485 0 1.072-.01 1.935-.01 2.198 0 .214.144.463.55.385A8.001 8.001 0 0010 2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    value: 'Download PDF',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M11 2v5h5M10 11v4m-2-2l2 2 2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #171717 0%, #0F0A0E 100%)' }}
    >
      {/* Ambient plum glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '700px',
          height: '350px',
          background: 'radial-gradient(ellipse, rgba(63,29,56,0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Label */}
        <Reveal direction="left" delay={0}>
          <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-6">
            Contact
          </p>
        </Reveal>

        {/* Main heading */}
        <Reveal direction="up" delay={0.1}>
          <h2
            className="font-serif text-ivory leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
          >
            Let&apos;s<br />
            <span className="text-gradient-gold">Talk.</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-stone/70 text-lg leading-relaxed max-w-xl mb-12">
            Open to product design internships, collaborations, and interesting conversations about technology, climate, and human-centered design.
          </p>
        </Reveal>

        {/* Dual CTAs */}
        <Reveal direction="up" delay={0.25}>
          <div className="mb-16 md:mb-20 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="mailto:sekarharshithaa555@gmail.com"
              variant="gold"
              strength={0.3}
            >
              Say Hello
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>

            <MagneticButton
              href="/resume.pdf"
              variant="ghost"
              strength={0.3}
              newTab
            >
              View Resume
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v8m-3-3 3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
          </div>
        </Reveal>

        {/* Gold divider */}
        <Reveal direction="none" delay={0.3}>
          <div className="gold-divider mb-12" />
        </Reveal>

        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, i) => (
            <Reveal key={link.label} direction="up" delay={0.35 + i * 0.07}>
              <motion.a
                href={link.href}
                className="group flex flex-col gap-3 p-5 rounded-2xl glass transition-all duration-400"
                style={{ border: '1px solid rgba(255,255,255,0.05)' }}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(212,175,55,0.2)',
                  backgroundColor: 'rgba(212,175,55,0.04)',
                }}
                target={link.href.startsWith('http') || link.href === '/resume.pdf' ? '_blank' : undefined}
                rel={link.href.startsWith('http') || link.href === '/resume.pdf' ? 'noopener noreferrer' : undefined}
                data-cursor-hover
              >
                <div className="text-stone/60 group-hover:text-gold transition-colors duration-300">
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-stone/40 mb-1">{link.label}</p>
                  <p className="text-ivory/80 text-sm group-hover:text-ivory transition-colors duration-300 break-all">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
