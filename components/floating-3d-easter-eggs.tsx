'use client'

import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export interface EasterEggArtifact {
  id: string
  name: string
  note: string
  positionClass: string
}

const ARTIFACTS: EasterEggArtifact[] = [
  {
    id: 'tesseract',
    name: '4D Tesseract Core',
    note: 'Kirulabs (Dekiru Co. Ltd.) was founded in Ghana in 2024 to unify software, hardware, and design under one roof.',
    positionClass: 'top-[13rem] left-4 xl:left-12',
  },
  {
    id: 'gyroscope',
    name: 'Siesie Orbital Node',
    note: 'In Twi, "Siesie" means to fix and put in order — powering verified home & business services on siesie.app.',
    positionClass: 'top-[32rem] right-4 xl:right-12',
  },
  {
    id: 'octahedron',
    name: '4D Data Prism',
    note: 'Precision engineering built to eliminate operational bottlenecks and human error.',
    positionClass: 'top-[58rem] left-6 xl:left-14',
  },
  {
    id: 'monolith',
    name: 'Smart Hardware Slab',
    note: 'Bridging cloud platforms with real-world NFC systems and agricultural hardware.',
    positionClass: 'top-[82rem] right-6 xl:right-14',
  },
]

export function Floating3DEasterEggs() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [discovered, setDiscovered] = useState<string[]>([])
  const [activeEgg, setActiveEgg] = useState<EasterEggArtifact | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('kiru_easter_eggs_v1')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) setDiscovered(parsed)
      }
    } catch {
      // ignore
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
    } catch {
      // ignore
    }
  }

  return (
    <>
      {/* 4D Purple Floating Objects (The ONLY colored elements on the monochrome site) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-20 select-none">
        {ARTIFACTS.map((artifact, index) => {
          const isHovered = hoveredId === artifact.id
          const depthFactor = (index + 1) * 9
          const offsetX = mouse.x * depthFactor
          const offsetY = mouse.y * depthFactor

          return (
            <div
              key={artifact.id}
              style={{
                transform: `translate3d(${offsetX.toFixed(1)}px, ${offsetY.toFixed(1)}px, 0)`,
                transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className={`pointer-events-auto absolute ${artifact.positionClass} hidden lg:block`}
            >
              <button
                type="button"
                aria-label={`Inspect 3D Easter Egg: ${artifact.name}`}
                onClick={() => handleDiscover(artifact)}
                onMouseEnter={() => setHoveredId(artifact.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col items-center focus:outline-none cursor-pointer"
              >
                {/* Purple Ambient Halo */}
                <div className="absolute -inset-4 rounded-full bg-purple-600/20 dark:bg-purple-500/25 blur-xl transition-all duration-300 group-hover:bg-purple-600/35 group-hover:scale-125" />

                <div className="perspective-1000 animate-float-slow relative flex h-16 w-16 items-center justify-center">
                  {/* 1. 4D Tesseract (Outer + Counter-Rotating Inner Purple Hypercube) */}
                  {artifact.id === 'tesseract' && (
                    <div
                      className={`preserve-3d relative h-12 w-12 ${
                        isHovered ? 'spin-3d-cube-fast' : 'spin-3d-cube'
                      }`}
                    >
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
                          className="absolute inset-0 rounded-md border-[1.5px] border-purple-600/75 dark:border-purple-400/75 bg-purple-600/12 dark:bg-purple-500/15 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                        />
                      ))}
                      {/* Inner Counter-Rotating 4D Hypercube */}
                      <div className="preserve-3d spin-inner-4d absolute inset-3">
                        {[
                          'rotateY(0deg) translateZ(12px)',
                          'rotateY(90deg) translateZ(12px)',
                          'rotateY(180deg) translateZ(12px)',
                          'rotateY(-90deg) translateZ(12px)',
                          'rotateX(90deg) translateZ(12px)',
                          'rotateX(-90deg) translateZ(12px)',
                        ].map((transform, j) => (
                          <div
                            key={j}
                            style={{ transform }}
                            className="absolute inset-0 rounded-xs border border-purple-700 dark:border-purple-300 bg-purple-600/40 dark:bg-purple-400/35 shadow-[0_0_12px_rgba(147,51,234,0.6)]"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 2. 4D Purple Gyroscope */}
                  {artifact.id === 'gyroscope' && (
                    <div
                      className={`preserve-3d relative h-14 w-14 flex items-center justify-center ${
                        isHovered ? 'spin-3d-cube-fast' : 'spin-3d-cube'
                      }`}
                    >
                      <div
                        style={{ transform: 'rotateX(65deg) rotateY(15deg)' }}
                        className="absolute inset-0 rounded-full border-[1.5px] border-purple-600/80 dark:border-purple-400/80 shadow-[0_0_14px_rgba(147,51,234,0.35)]"
                      />
                      <div
                        style={{ transform: 'rotateX(-55deg) rotateY(70deg)' }}
                        className="absolute inset-1.5 rounded-full border-[1.5px] border-purple-500/70 dark:border-purple-300/70"
                      />
                      <div
                        style={{ transform: 'rotateY(45deg) rotateZ(45deg)' }}
                        className="absolute inset-3 rounded-full border border-purple-600/60 dark:border-purple-400/60"
                      />
                      <div className="h-3.5 w-3.5 rounded-full bg-purple-600 dark:bg-purple-400 shadow-[0_0_14px_#9333ea]" />
                    </div>
                  )}

                  {/* 3. 4D Purple Octahedron */}
                  {artifact.id === 'octahedron' && (
                    <div
                      className={`preserve-3d relative h-12 w-12 flex items-center justify-center ${
                        isHovered ? 'spin-3d-cube-fast' : 'spin-3d-cube'
                      }`}
                    >
                      {[0, 60, 120].map((deg) => (
                        <div
                          key={deg}
                          style={{ transform: `rotateY(${deg}deg) rotateZ(45deg)` }}
                          className="absolute h-9 w-9 rounded-xs border-[1.5px] border-purple-600/75 dark:border-purple-400/75 bg-purple-600/12 dark:bg-purple-500/15 shadow-[0_0_12px_rgba(147,51,234,0.3)]"
                        />
                      ))}
                      <div className="h-3 w-3 rotate-45 bg-purple-600 dark:bg-purple-300 shadow-[0_0_12px_#9333ea]" />
                    </div>
                  )}

                  {/* 4. 4D Purple Monolith */}
                  {artifact.id === 'monolith' && (
                    <div
                      className={`preserve-3d relative h-14 w-10 ${
                        isHovered ? 'spin-3d-cube-fast' : 'spin-3d-cube'
                      }`}
                    >
                      <div
                        style={{ transform: 'translateZ(5px)' }}
                        className="absolute inset-0 rounded-lg border-[1.5px] border-purple-600/75 dark:border-purple-400/75 bg-purple-600/15 dark:bg-purple-500/20 p-2 flex flex-col justify-between shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                      >
                        <div className="h-2 w-3 rounded-xs bg-purple-600 dark:bg-purple-300" />
                        <div className="space-y-1">
                          <div className="h-0.5 w-full bg-purple-600/60 dark:bg-purple-300/60 rounded" />
                          <div className="h-0.5 w-2/3 bg-purple-600/60 dark:bg-purple-400/60 rounded" />
                        </div>
                      </div>
                      <div
                        style={{ transform: 'translateZ(-5px)' }}
                        className="absolute inset-0 rounded-lg border border-purple-600/45 dark:border-purple-500/45 bg-purple-600/10 dark:bg-purple-950/30"
                      />
                    </div>
                  )}
                </div>
              </button>
            </div>
          )
        })}
      </div>

      {/* Minimal Easter Egg Card when clicked */}
      {activeEgg && (
        <div className="fixed bottom-5 right-5 z-50 max-w-xs animate-reveal-up">
          <div className="rounded-xl bg-card border border-purple-500/50 p-4 shadow-xl">
            <div className="flex items-center justify-between gap-3 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                <span className="text-xs font-mono font-medium text-purple-600 dark:text-purple-300">
                  Easter Egg {discovered.length}/{ARTIFACTS.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveEgg(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close Easter Egg notification"
              >
                <X size={14} />
              </button>
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1">{activeEgg.name}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{activeEgg.note}</p>
          </div>
        </div>
      )}
    </>
  )
}
