'use client'

import React, { useEffect, useState } from 'react'
import { Sparkles, X, Cpu, Compass, Gem, Layers, CheckCircle2 } from 'lucide-react'

export interface EasterEggArtifact {
  id: string
  code: string
  name: string
  subtitle: string
  lore: string
  positionClass: string
  accent: string
}

const ARTIFACTS: EasterEggArtifact[] = [
  {
    id: 'tesseract',
    code: 'ARTIFACT // 01',
    name: 'Kiru Hypercube',
    subtitle: 'Unified Architecture Node',
    lore: 'Easter Egg #1 Unlocked — Kirulabs (Dekiru Co. Ltd.) was engineered in Ghana to eliminate vendor fragmentation by combining software, hardware, and creative execution inside one unified cube.',
    positionClass: 'top-[15rem] left-4 sm:left-8 lg:left-14',
    accent: 'from-blue-500 via-indigo-500 to-purple-500',
  },
  {
    id: 'gyroscope',
    code: 'ARTIFACT // 02',
    name: 'Siesie Escrow Gyro',
    subtitle: 'Trust & Verification Core',
    lore: 'Easter Egg #2 Unlocked — In Twi, "Siesie" means to fix, arrange, and put in order. Our flagship siesie.app holds payments safely in escrow until verified pros finish the job.',
    positionClass: 'top-[32rem] right-4 sm:right-8 lg:right-14',
    accent: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    id: 'octahedron',
    code: 'ARTIFACT // 03',
    name: 'Quantum Data Prism',
    subtitle: 'Zero-Error Telemetry Crystal',
    lore: 'Easter Egg #3 Unlocked — Every system we ship is designed for error-free operational telemetry, turning raw enterprise data into clear decisions.',
    positionClass: 'top-[62rem] left-5 sm:left-10 lg:left-16',
    accent: 'from-cyan-400 via-blue-500 to-indigo-600',
  },
  {
    id: 'monolith',
    code: 'ARTIFACT // 04',
    name: 'NFC Smart Monolith',
    subtitle: 'Physical-Digital Bridge',
    lore: 'Easter Egg #4 Unlocked — From custom NFC business cards to autonomous farming drones, Kirulabs bridges cloud software with real-world hardware.',
    positionClass: 'top-[90rem] right-5 sm:right-10 lg:right-16',
    accent: 'from-purple-500 via-pink-500 to-rose-500',
  },
]

export function Floating3DEasterEggs() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [discovered, setDiscovered] = useState<string[]>([])
  const [activeEgg, setActiveEgg] = useState<EasterEggArtifact | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [overclocked, setOverclocked] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('kiru_easter_eggs_v1')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) setDiscovered(parsed)
      }
    } catch {
      // ignore storage errors
    }

    const handleMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      setMouse({ x: nx, y: ny })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const handleDiscover = (artifact: EasterEggArtifact) => {
    setActiveEgg(artifact)
    const next = discovered.includes(artifact.id)
      ? discovered
      : [...discovered, artifact.id]
    setDiscovered(next)
    try {
      localStorage.setItem('kiru_easter_eggs_v1', JSON.stringify(next))
      window.dispatchEvent(new CustomEvent('kiru-egg-update', { detail: next }))
    } catch {
      // ignore
    }
  }

  return (
    <>
      {/* 3D Floating Artifacts Layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-20 select-none">
        {ARTIFACTS.map((artifact, index) => {
          const isFound = discovered.includes(artifact.id)
          const isHovered = hoveredId === artifact.id
          const depthFactor = (index + 1) * 10
          const offsetX = mouse.x * depthFactor
          const offsetY = mouse.y * depthFactor

          return (
            <div
              key={artifact.id}
              style={{
                transform: `translate3d(${offsetX.toFixed(1)}px, ${offsetY.toFixed(1)}px, 0)`,
                transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className={`pointer-events-auto absolute ${artifact.positionClass} hidden sm:block`}
            >
              <button
                type="button"
                aria-label={`Inspect 3D Easter Egg: ${artifact.name}`}
                onClick={() => handleDiscover(artifact)}
                onMouseEnter={() => setHoveredId(artifact.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col items-center focus:outline-none cursor-pointer"
              >
                {/* Ambient Halo */}
                <div
                  className={`absolute -inset-6 rounded-full bg-gradient-to-r ${artifact.accent} opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-60 group-hover:scale-125 ${
                    isFound ? 'opacity-45' : ''
                  }`}
                />

                {/* 3D Object Renderer */}
                <div className="perspective-1000 animate-float-slow relative flex h-20 w-20 items-center justify-center">
                  {artifact.id === 'tesseract' && (
                    <div
                      className={`preserve-3d relative h-12 w-12 ${
                        isHovered || overclocked ? 'spin-3d-cube-fast' : 'spin-3d-cube'
                      }`}
                    >
                      {/* 6 Faces of the 3D Glass Tesseract */}
                      {[
                        'rotateY(0deg) translateZ(24px)',
                        'rotateY(90deg) translateZ(24px)',
                        'rotateY(180deg) translateZ(24px)',
                        'rotateY(-90deg) translateZ(24px)',
                        'rotateX(90deg) translateZ(24px)',
                        'rotateX(-90deg) translateZ(24px)',
                      ].map((transform, i) => (
                        <div
                          key={i}
                          style={{ transform }}
                          className={`absolute inset-0 rounded-lg border ${
                            isFound
                              ? 'border-indigo-400/70 bg-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.45)]'
                              : 'border-white/25 bg-white/[0.06] group-hover:border-indigo-400/80 group-hover:bg-indigo-500/20'
                          } backdrop-blur-md transition-colors duration-300 flex items-center justify-center`}
                        >
                          <div className="h-2 w-2 rounded-full bg-indigo-400/70" />
                        </div>
                      ))}
                      {/* Inner Energy Core */}
                      <div
                        style={{ transform: 'translateZ(0px)' }}
                        className="absolute inset-3 rounded-md bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-80 blur-[1px]"
                      />
                    </div>
                  )}

                  {artifact.id === 'gyroscope' && (
                    <div
                      className={`preserve-3d relative h-16 w-16 flex items-center justify-center ${
                        isHovered || overclocked ? 'spin-3d-cube-fast' : 'spin-3d-cube'
                      }`}
                    >
                      <div
                        style={{ transform: 'rotateX(65deg) rotateY(15deg)' }}
                        className={`absolute inset-0 rounded-full border-2 ${
                          isFound ? 'border-purple-400/80' : 'border-indigo-400/45 group-hover:border-purple-400'
                        } shadow-[0_0_18px_rgba(168,85,247,0.4)]`}
                      />
                      <div
                        style={{ transform: 'rotateX(-55deg) rotateY(70deg)' }}
                        className={`absolute inset-1.5 rounded-full border-2 ${
                          isFound ? 'border-pink-400/80' : 'border-blue-400/45 group-hover:border-pink-400'
                        }`}
                      />
                      <div
                        style={{ transform: 'rotateY(45deg) rotateZ(45deg)' }}
                        className="absolute inset-3 rounded-full border border-white/30"
                      />
                      <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-[0_0_16px_rgba(236,72,153,0.8)]" />
                    </div>
                  )}

                  {artifact.id === 'octahedron' && (
                    <div
                      className={`preserve-3d relative h-14 w-14 flex items-center justify-center ${
                        isHovered || overclocked ? 'spin-3d-cube-fast' : 'spin-3d-cube'
                      }`}
                    >
                      {[0, 60, 120].map((deg) => (
                        <div
                          key={deg}
                          style={{ transform: `rotateY(${deg}deg) rotateZ(45deg)` }}
                          className={`absolute h-10 w-10 rounded-sm border ${
                            isFound
                              ? 'border-cyan-400/80 bg-cyan-500/15'
                              : 'border-blue-400/35 bg-blue-500/10 group-hover:border-cyan-400/80'
                          } shadow-[0_0_15px_rgba(59,130,246,0.35)]`}
                        />
                      ))}
                      <div className="h-3 w-3 rotate-45 bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
                    </div>
                  )}

                  {artifact.id === 'monolith' && (
                    <div
                      className={`preserve-3d relative h-16 w-11 ${
                        isHovered || overclocked ? 'spin-3d-cube-fast' : 'spin-3d-cube'
                      }`}
                    >
                      <div
                        style={{ transform: 'translateZ(6px)' }}
                        className={`absolute inset-0 rounded-xl border ${
                          isFound
                            ? 'border-pink-400/80 bg-gradient-to-br from-indigo-500/30 via-purple-500/25 to-pink-500/30'
                            : 'border-white/25 bg-white/[0.07] group-hover:border-pink-400/70'
                        } backdrop-blur-md flex flex-col justify-between p-2 shadow-[0_0_20px_rgba(236,72,153,0.3)]`}
                      >
                        <div className="h-2.5 w-3.5 rounded-xs bg-gradient-to-r from-amber-300 to-yellow-500 opacity-85" />
                        <div className="space-y-1">
                          <div className="h-0.5 w-full bg-white/40 rounded" />
                          <div className="h-0.5 w-2/3 bg-pink-400/60 rounded" />
                        </div>
                      </div>
                      <div
                        style={{ transform: 'translateZ(-6px)' }}
                        className="absolute inset-0 rounded-xl border border-purple-500/30 bg-purple-950/30"
                      />
                    </div>
                  )}
                </div>

                {/* Hover Micro-Label */}
                <div className="mt-1 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/80 px-2.5 py-1 text-[10px] font-mono tracking-wider text-zinc-300 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0.5">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isFound ? 'bg-emerald-400' : 'bg-indigo-400 animate-ping'
                    }`}
                  />
                  <span>{isFound ? `${artifact.name} ✓` : 'CLICK 3D ARTIFACT'}</span>
                </div>
              </button>
            </div>
          )
        })}
      </div>

      {/* Easter Egg Telemetry Drawer / HUD when clicked */}
      {activeEgg && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm animate-reveal-up">
          <div className="glass-card gradient-border-glow relative overflow-hidden p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-indigo-300">
                  <Sparkles size={12} className="text-pink-400" />
                  EASTER EGG [{discovered.length}/{ARTIFACTS.length}]
                </span>
                <span className="text-[11px] font-mono text-zinc-400">{activeEgg.code}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveEgg(null)}
                className="rounded-full p-1 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close Easter Egg notification"
              >
                <X size={15} />
              </button>
            </div>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/15 text-indigo-300">
                {activeEgg.id === 'tesseract' && <Cpu size={16} />}
                {activeEgg.id === 'gyroscope' && <Compass size={16} />}
                {activeEgg.id === 'octahedron' && <Gem size={16} />}
                {activeEgg.id === 'monolith' && <Layers size={16} />}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{activeEgg.name}</h4>
                <p className="text-xs text-indigo-300">{activeEgg.subtitle}</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-zinc-300 mb-3">
              {activeEgg.lore}
            </p>

            {/* Discovery Progress */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                {ARTIFACTS.map((item) => {
                  const found = discovered.includes(item.id)
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleDiscover(item)}
                      title={item.name}
                      className={`h-2 rounded-full transition-all ${
                        found
                          ? 'w-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  )
                })}
              </div>

              {discovered.length === ARTIFACTS.length ? (
                <button
                  type="button"
                  onClick={() => setOverclocked(!overclocked)}
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-300 hover:text-emerald-200"
                >
                  <CheckCircle2 size={13} />
                  {overclocked ? '3D OVERCLOCK: ON' : 'ALL FOUND! BOOST 3D'}
                </button>
              ) : (
                <span className="text-[11px] font-mono text-zinc-400">
                  {ARTIFACTS.length - discovered.length} more hidden in 3D space
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
