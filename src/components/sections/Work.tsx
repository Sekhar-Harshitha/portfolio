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

/* ── Project Visual Backgrounds ──────────────────────────────────────── */
const ProjectVisual = ({ project }: { project: Project }) => {
  const visuals: Record<string, JSX.Element> = {
    puddlex: (
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, #2A1226 0%, #3F1D38 40%, #5C2B52 70%, #1A0F17 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="relative w-48 h-80 rounded-3xl border border-gold/20 overflow-hidden glass-plum flex flex-col p-4 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gold" />
            </div>
            <span className="text-gold text-xs font-medium">PuddleX</span>
          </div>
          <div className="flex-1 rounded-xl overflow-hidden relative bg-plum-dark/60">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="absolute rounded-full border" style={{
                width: `${80 + i * 30}px`, height: `${40 + i * 20}px`,
                left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
                borderColor: `rgba(212,175,55,${0.5 - i * 0.07})`,
              }} />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
            </div>
            <div className="absolute bottom-2 left-2 right-2 bg-plum/80 rounded-lg p-2">
              <div className="text-[9px] text-gold/80 font-medium">Risk Level</div>
              <div className="w-full h-1.5 bg-plum-dark rounded-full mt-1">
                <div className="w-3/4 h-full rounded-full bg-gradient-to-r from-gold-dim to-gold" />
              </div>
            </div>
          </div>
          <div className="space-y-1.5">
            {['Zone A — High', 'Zone C — Medium'].map((z, i) => (
              <div key={i} className="flex items-center gap-2 bg-plum-dark/40 rounded-lg px-2 py-1.5">
                <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-red-400' : 'bg-yellow-400'}`} />
                <span className="text-[9px] text-ivory/70">{z}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    coolcity: (
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, #0D2233 0%, #1A3A4A 50%, #0F4C5C 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px'
      }}>
        <div className="w-72 h-48 rounded-2xl border border-teal-400/20 overflow-hidden relative" style={{ background: 'rgba(13,34,51,0.7)' }}>
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-5">
            {[...Array(40)].map((_, i) => {
              const heat = ((i * 7 + 3) % 10) / 10
              const color = heat > 0.7 ? '#FF6B6B' : heat > 0.4 ? '#FFE66D' : heat > 0.2 ? '#4ECDC4' : '#1A3A4A'
              return <div key={i} style={{ backgroundColor: color, opacity: 0.7 }} />
            })}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-slate-900/80 rounded-xl p-3 text-center backdrop-blur">
              <div className="text-xs text-teal-400 font-medium">Heat Index</div>
              <div className="text-2xl font-bold text-white">42°C</div>
              <div className="text-[10px] text-red-400">Critical Zone</div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {[['Low', '#4ECDC4'], ['Med', '#FFE66D'], ['High', '#FF6B6B']].map(([l, c]) => (
            <div key={l} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs" style={{ background: 'rgba(255,255,255,0.07)', color: c }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c as string }} />
              {l}
            </div>
          ))}
        </div>
      </div>
    ),
    trustchain: (
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, #0F0F1A 0%, #1C1C2E 50%, #252540 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="w-64 rounded-2xl p-5 space-y-4" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>
          <div className="flex items-center justify-between">
            <span className="text-xs text-purple-300 font-medium tracking-wider uppercase">TrustChain</span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="text-white font-semibold text-sm">Organic Cotton Tee</div>
          <div className="space-y-2">
            {['🌱 Farm — Gujarat, India', '🏭 Mill — Tirupur, TN', '✅ Certified Organic', '🚢 Shipped — Oct 2024'].map((step, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300 py-1.5 px-3 rounded-lg" style={{ background: 'rgba(124,58,237,0.1)' }}>
                {step}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <span className="text-[10px] text-emerald-400">Verified Origin · Blockchain Confirmed</span>
          </div>
        </div>
      </div>
    ),
    farmlink: (
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, #0D1F0D 0%, #1A2F1A 50%, #243824 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', padding: '20px'
      }}>
        <div className="w-40 rounded-2xl p-4 space-y-3" style={{ background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.15)' }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-base">🌾</div>
            <div>
              <div className="text-xs text-green-400 font-medium">Wheat</div>
              <div className="text-[10px] text-gray-400">5 tonnes</div>
            </div>
          </div>
          <div className="text-green-300 font-bold text-lg">₹2,100<span className="text-xs font-normal text-gray-400">/q</span></div>
          <div className="w-full h-1 rounded-full bg-green-900"><div className="w-2/3 h-full rounded-full bg-green-400" /></div>
          <div className="text-[9px] text-gray-400">2 buyers interested</div>
        </div>
        <div className="w-40 rounded-2xl p-4 space-y-3" style={{ background: 'rgba(252,211,77,0.06)', border: '1px solid rgba(252,211,77,0.12)' }}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-yellow-400 font-medium">Weather</span>
            <span className="text-base">☀️</span>
          </div>
          <div className="text-white font-bold text-xl">28°C</div>
          <div className="text-[10px] text-gray-400">Good for harvest</div>
        </div>
      </div>
    ),
    samaanai: (
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, #0D0D1A 0%, #1A1A2E 50%, #252545 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="w-64 rounded-3xl p-5 space-y-4" style={{ background: 'rgba(246,166,35,0.07)', border: '1px solid rgba(246,166,35,0.18)' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-base">🤝</div>
            <div>
              <div className="text-xs text-amber-300 font-medium tracking-wider">Samaan AI</div>
              <div className="text-[10px] text-gray-400">Your relocation guide</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { msg: 'I just arrived in Bengaluru. Need shelter.', from: 'user' },
              { msg: 'Found 3 verified shelters near Majestic. Tap to see.', from: 'ai' },
              { msg: 'Also showing free legal aid & job board nearby.', from: 'ai' },
            ].map((m, i) => (
              <div key={i} className={`text-[11px] px-3 py-2 rounded-2xl max-w-[85%] ${m.from === 'user' ? 'ml-auto' : 'mr-auto'}`}
                style={{ background: m.from === 'user' ? 'rgba(246,166,35,0.2)' : 'rgba(255,255,255,0.06)', color: m.from === 'user' ? '#FDE68A' : '#E5E7EB' }}>
                {m.msg}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {['Shelter', 'Legal Aid', 'Jobs'].map((t) => (
              <span key={t} className="text-[9px] px-2 py-1 rounded-full" style={{ background: 'rgba(246,166,35,0.12)', color: '#F6A623', border: '1px solid rgba(246,166,35,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    uidai: (
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, #0D1520 0%, #1A2030 50%, #253045 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="w-72 space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="#60A5FA" strokeWidth="1.2"/><path d="M5 7h6M5 10h4" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="text-xs text-blue-300 font-medium">UIDAI Lifecycle Audit</div>
              <div className="text-[10px] text-gray-400">47 violations found</div>
            </div>
          </div>
          {[
            { step: 'Enrollment', issues: 12, c: '#EF4444', w: '85%' },
            { step: 'Update Portal', issues: 19, c: '#F97316', w: '100%' },
            { step: 'Operator UI', issues: 16, c: '#F59E0B', w: '78%' },
          ].map((item) => (
            <div key={item.step} className="rounded-xl p-3 space-y-2" style={{ background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.12)' }}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-200 font-medium">{item.step}</span>
                <span className="text-[10px]" style={{ color: item.c }}>{item.issues} issues</span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-700">
                <div className="h-full rounded-full" style={{ width: item.w, backgroundColor: item.c }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    naturalsbeautyos: (
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, #1A0A14 0%, #2A1226 50%, #3D1535 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="w-56 rounded-3xl p-5 space-y-4" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.2)' }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-sm">✨</div>
            <div>
              <div className="text-xs text-pink-300 font-medium">Naturals Beauty OS</div>
              <div className="text-[10px] text-gray-400">Your colour story</div>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {['#2C1503','#4A2010','#8B4513','#C68642','#F0C080'].map((c) => (
              <div key={c} className="w-8 h-8 rounded-full border-2 border-white/10" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="rounded-xl p-3 space-y-1" style={{ background: 'rgba(244,114,182,0.1)' }}>
            <div className="text-[10px] text-pink-300 font-medium">Your Recommendations</div>
            {['Warm Nude · Lip Gloss', 'Bronze Contour · Foundation', 'Copper · Eye Shadow'].map((r) => (
              <div key={r} className="text-[10px] text-gray-300">{r}</div>
            ))}
          </div>
        </div>
      </div>
    ),
    tidex: (
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, #080F1A 0%, #0F1A2E 50%, #1A2A40 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="w-64 space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" stroke="#38BDF8" strokeWidth="1.2" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <div className="text-xs text-sky-300 font-medium">TIDEX Exchange</div>
              <div className="text-[10px] text-gray-400">IP Marketplace</div>
            </div>
          </div>
          {[
            { name: 'Neural Style Transfer v2', type: 'Algorithm', price: '0.8 ETH', status: 'Licensed' },
            { name: 'Crop Disease Detection', type: 'Model', price: '1.2 ETH', status: 'Available' },
            { name: 'Climate Prediction API', type: 'Dataset', price: '0.5 ETH', status: 'Licensed' },
          ].map((item) => (
            <div key={item.name} className="rounded-xl p-3" style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.12)' }}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-[11px] text-slate-200 font-medium leading-tight">{item.name}</div>
                  <div className="text-[9px] text-gray-500 mt-0.5">{item.type}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-[11px] text-sky-300 font-medium">{item.price}</div>
                  <div className="text-[9px]" style={{ color: item.status === 'Licensed' ? '#4ade80' : '#94a3b8' }}>{item.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  }
  return visuals[project.id] || <div className="w-full h-full bg-graphite-mid" />
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
