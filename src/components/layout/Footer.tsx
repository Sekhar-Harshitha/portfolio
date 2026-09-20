'use client'

import { Reveal } from '@/components/ui/RevealText'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-6 md:px-10 py-10 bg-graphite border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <Reveal direction="left" delay={0}>
          <a
            href="#hero"
            className="font-serif text-lg text-stone/60 hover:text-gold transition-colors duration-300"
            data-cursor-hover
          >
            SH<span className="text-gold/80">.</span>
          </a>
        </Reveal>

        {/* Center copy */}
        <Reveal direction="up" delay={0.1}>
          <p className="text-stone/30 text-xs text-center">
            Designed & built with intention · {year} Sekhar Harshitha
          </p>
        </Reveal>

        {/* Social links */}
        <Reveal direction="right" delay={0.2}>
          <div className="flex items-center gap-6">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sekharharshitha13/' },
              { label: 'GitHub', href: 'https://github.com/Sekhar-Harshitha' },
              { label: 'Resume', href: '/resume.pdf' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') || link.href === '/resume.pdf' ? '_blank' : undefined}
                rel={link.href.startsWith('http') || link.href === '/resume.pdf' ? 'noopener noreferrer' : undefined}
                className="text-xs text-stone/40 hover:text-gold transition-colors duration-300 tracking-wider uppercase"
                data-cursor-hover
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
