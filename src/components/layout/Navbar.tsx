'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 60))
    return () => unsub()
  }, [scrollY])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 rounded-b-2xl"
        animate={{
          backgroundColor: scrolled ? 'rgba(23,23,23,0.85)' : 'rgba(23,23,23,0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Logo */}
      <a
        href="#hero"
        className="relative z-10 font-serif text-lg text-ivory tracking-tight hover:text-gold transition-colors duration-300"
        data-cursor-hover
      >
        SH<span className="text-gold">.</span>
      </a>

      {/* Desktop Nav */}
      <nav className="relative z-10 hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-stone-dark hover:text-ivory transition-colors duration-300 tracking-wide"
            data-cursor-hover
          >
            {link.label}
          </a>
        ))}
        <MagneticButton href="#contact" variant="ghost" strength={0.25}>
          Get in Touch
        </MagneticButton>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="relative z-10 md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        data-cursor-hover
      >
        <motion.span
          className="block w-6 h-0.5 bg-ivory rounded-full origin-center"
          animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-6 h-0.5 bg-ivory rounded-full"
          animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-6 h-0.5 bg-ivory rounded-full origin-center"
          animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center gap-10 bg-graphite"
        initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
        animate={
          menuOpen
            ? { opacity: 1, clipPath: 'circle(150% at top right)' }
            : { opacity: 0, clipPath: 'circle(0% at top right)' }
        }
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-5xl text-ivory hover:text-gold transition-colors"
            initial={{ opacity: 0, y: 30 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="gold-divider w-32 mt-4"
        />
      </motion.div>
    </motion.header>
  )
}
