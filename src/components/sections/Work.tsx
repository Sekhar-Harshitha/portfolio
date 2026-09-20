'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects, Project } from '@/lib/projects'
import { modalOverlay, modalContent } from '@/lib/motion'
import { Reveal } from '@/components/ui/RevealText'

/* ── External Link Icon ───────────────────────────────────────────────── */
const ExternalLinkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V7M8 1h3m0 0v3m0-3L5 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ── Project Visual ──────────────────────────────────────────────────── */
const ProjectVisual = ({ project }: { project: Project }) => {
  const imageSrc = `/projects/${project.id}.jpg`

  return (
    <div className="relative w-full h-full overflow-hidden bg-graphite-mid group/visual">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt={`${project.title} — ${project.subtitle}`}
        className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      {/* Ambient gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-20"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(15,15,18,0.2) 50%, rgba(15,15,18,0.75) 100%)',
        }}
      />
    </div>
  )
}

/* ── Journey Map ──────────────────────────────────────────────────────── */
const JourneyMap = ({ steps }: { steps: string[] }) => (
  <div className="flex items-center gap-0 overflow-x-auto pb-2">
    {steps.map((step, i) => (
      <div key={i} className="flex items-center flex-shrink-0">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center text-xs font-medium text-gold">
            {i + 1}
          </div>
          <span className="text-xs text-stone text-center max-w-[80px] leading-tight">{step}</span>
        </div>
        {i < steps.length - 1 && <div className="w-12 md:w-16 h-px bg-gold/20 flex-shrink-0" />}
      </div>
    ))}
  </div>
)

/* ── Color Swatch ─────────────────────────────────────────────────────── */
const ColorSwatch = ({ color }: { color: string }) => (
  <div
    className="w-9 h-9 rounded-full border-2 border-white/10 ring-1 ring-offset-2 ring-offset-graphite-mid ring-white/5 flex-shrink-0"
    style={{ backgroundColor: color }}
    title={color}
  />
)

/* ── Project Modal ────────────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
      variants={modalOverlay}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-graphite/80 backdrop-blur-sm" aria-hidden="true" />

      <motion.div
        className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl glass-plum"
        variants={modalContent}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        {/* Visual Header */}
        <div className="h-64 md:h-80 rounded-t-3xl overflow-hidden relative flex-shrink-0">
          <ProjectVisual project={project} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-ivory/70 hover:text-ivory hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Live Product badge */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105"
              style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)', color: '#E8CA6A' }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Live Product
              <ExternalLinkIcon />
            </a>
          )}

          <div className="absolute bottom-5 left-6 right-16">
            <div className="text-gold text-sm font-medium mb-1">{project.number}</div>
            <h2 className="font-serif text-3xl md:text-4xl text-ivory">{project.title}</h2>
            <p className="text-stone/80 text-sm mt-1">{project.subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>

          {/* Problem */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-3">Problem</h3>
            <p className="text-stone leading-relaxed">{project.problem}</p>
          </div>

          {/* Users */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-3">Users</h3>
            <p className="text-stone leading-relaxed">{project.users}</p>
          </div>

          <div className="gold-divider" />

          {/* Research Insight */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-4">Key Research Insight</h3>
            <blockquote className="border-l-2 border-gold/40 pl-5 font-serif text-xl italic text-ivory leading-relaxed">
              "{project.insight}"
            </blockquote>
          </div>

          {/* Journey Map */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-4">Process & Journey Map</h3>
            <div className="overflow-x-auto">
              <JourneyMap steps={project.journeySteps} />
            </div>
          </div>

          <div className="gold-divider" />

          {/* Wireframes */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-3">Process & Wireframes</h3>
            <p className="text-stone leading-relaxed">{project.wireframes}</p>
          </div>

          {/* Final UI */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-3">Final UI</h3>
            <p className="text-stone leading-relaxed">{project.finalUI}</p>
          </div>

          {/* Design System */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-4">Design System</h3>
            <div className="flex items-center gap-3">
              {project.designSystem.map((color) => (
                <ColorSwatch key={color} color={color} />
              ))}
            </div>
          </div>

          <div className="gold-divider" />

          {/* Outcome */}
          <div className="rounded-2xl p-5" style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.12)' }}>
            <h3 className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-3">Outcome</h3>
            <p className="text-ivory/90 leading-relaxed">{project.outcome}</p>
          </div>

          {/* Reflection */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-3">Reflection</h3>
            <p className="text-ivory/80 italic leading-relaxed font-serif text-lg">{project.reflection}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)

/* ── Project Card ─────────────────────────────────────────────────────── */
const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick: () => void
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.1 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl cursor-pointer h-full flex flex-col"
        style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        whileHover={{
          y: -4,
          boxShadow: '0 32px 80px -12px rgba(63,29,56,0.5), 0 0 0 1px rgba(212,175,55,0.15)',
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        aria-label={`View ${project.title} case study`}
        data-cursor-hover
      >
        {/* Visual */}
        <div className="h-64 md:h-80 overflow-hidden relative flex-shrink-0">
          <ProjectVisual project={project} />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="relative bg-graphite-mid/80 p-6 md:p-8 flex flex-col flex-1">
          {/* Ghost number */}
          <div className="absolute top-0 right-6 project-number leading-none select-none">
            {project.number}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>

          {/* Title & one-liner */}
          <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-2">
            {project.title}
          </h3>
          <p className="text-stone/70 leading-relaxed text-sm flex-1">{project.subtitle}</p>

          {/* Actions */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-3 text-gold text-sm font-medium group-hover:gap-5 transition-all duration-300">
              View Case Study
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium transition-all duration-200 hover:opacity-100 opacity-60 hover:opacity-100"
                style={{ color: '#E8CA6A' }}
                onClick={(e) => e.stopPropagation()}
                aria-label={`Live product: ${project.title}`}
                data-cursor-hover
              >
                <ExternalLinkIcon />
                Live Product
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Work Section ─────────────────────────────────────────────────────── */
export default function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <>
      <section id="work" className="section-padding bg-graphite">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <Reveal direction="left" delay={0}>
            <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Selected Case Studies
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-serif text-ivory leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
              Eight projects.<br />
              <span className="text-stone/50">One obsession.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <div className="mt-6 gold-divider max-w-xs" />
          </Reveal>
        </div>

        {/* Project Grid — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
