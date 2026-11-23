'use client'

import React from 'react'
import {
  BadgeCheck,
  Wallet,
  Wrench,
  Globe,
  MapPin,
  Database,
  Palette,
  Cpu,
  Shield,
  Network,
  Sprout,
  Lock,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

interface ProjectVisualProps {
  projectId: string
  className?: string
}

export function ProjectVisual({ projectId, className = '' }: ProjectVisualProps) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-[#060711] select-none ${className}`}
    >
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70" />

      {projectId === 'siesie-app' && (
        <div className="relative h-full w-full flex flex-col justify-between p-5 bg-gradient-to-br from-indigo-950/60 via-[#070814] to-purple-950/50">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/25 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-500/25 blur-3xl" />

          <div className="relative z-10 mt-9 rounded-xl bg-[#0b0d1e]/90 border border-indigo-500/30 p-3.5 shadow-xl space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
                  S
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    siesie.app
                    <BadgeCheck size={12} className="text-emerald-400" />
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">
                    Accra • Tema • Kumasi
                  </div>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                ESCROW ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="rounded-lg bg-white/[0.04] border border-white/10 p-2">
                <div className="flex items-center gap-1 text-[10px] text-indigo-300 font-medium">
                  <BadgeCheck size={11} />
                  <span>ID-Verified</span>
                </div>
                <div className="text-[11px] font-bold text-white mt-0.5">100% Vetted</div>
              </div>
              <div className="rounded-lg bg-white/[0.04] border border-white/10 p-2">
                <div className="flex items-center gap-1 text-[10px] text-purple-300 font-medium">
                  <Wrench size={11} />
                  <span>Upfront</span>
                </div>
                <div className="text-[11px] font-bold text-white mt-0.5">Fixed Quote</div>
              </div>
              <div className="rounded-lg bg-white/[0.04] border border-white/10 p-2">
                <div className="flex items-center gap-1 text-[10px] text-pink-300 font-medium">
                  <Wallet size={11} />
                  <span>MoMo</span>
                </div>
                <div className="text-[11px] font-bold text-white mt-0.5">Safe Escrow</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {projectId === 'ngo-page' && (
        <div className="relative h-full w-full flex items-center justify-center p-5 bg-gradient-to-br from-blue-950/60 via-[#070814] to-cyan-950/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.22),transparent_65%)]" />
          <div className="relative z-10 mt-6 w-full max-w-xs rounded-xl bg-[#0b0d1e]/90 border border-blue-400/25 p-4 space-y-2.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300">
              <span>GENERATIVE AI MOTION</span>
              <span>60 FPS</span>
            </div>
            <div className="h-14 rounded-lg bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-cyan-400/30 border border-white/10 flex items-center justify-center gap-2">
              <Globe size={18} className="text-cyan-300" />
              <span className="text-xs font-semibold text-white">Global Impact Portal</span>
            </div>
          </div>
        </div>
      )}

      {projectId === 'availability-map' && (
        <div className="relative h-full w-full flex items-center justify-center p-5 bg-gradient-to-br from-purple-950/60 via-[#070814] to-pink-950/40">
          <div className="relative z-10 mt-6 w-full max-w-xs rounded-xl bg-[#0b0d1e]/90 border border-purple-400/25 p-4 space-y-3">
            <div className="flex items-center justify-between text-[10px] font-mono text-purple-300">
              <span>LIVE GIS TELEMETRY</span>
              <span className="text-emerald-300">● 24 ZONES</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div
                  key={n}
                  className={`h-6 rounded-md border ${
                    n % 3 === 0
                      ? 'bg-pink-500/30 border-pink-400/50'
                      : 'bg-indigo-500/25 border-indigo-400/40'
                  } flex items-center justify-center`}
                >
                  <MapPin size={11} className="text-white/80" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {projectId === 'data-analysis' && (
        <div className="relative h-full w-full flex items-center justify-center p-5 bg-gradient-to-br from-indigo-950/60 via-[#070814] to-blue-950/40">
          <div className="relative z-10 mt-6 w-full max-w-xs rounded-xl bg-[#0b0d1e]/90 border border-indigo-400/25 p-4 space-y-2.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-indigo-300">
              <span>BI PIPELINE</span>
              <span>+142% ROI</span>
            </div>
            <div className="flex items-end gap-2 h-14 pt-2 px-2">
              {[35, 55, 45, 75, 65, 95, 85].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-t bg-gradient-to-t from-indigo-600 to-cyan-400"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {projectId === 'interactive-brand-experience' && (
        <div className="relative h-full w-full flex items-center justify-center p-5 bg-gradient-to-br from-fuchsia-950/60 via-[#070814] to-indigo-950/50">
          <div className="relative z-10 mt-6 w-full max-w-xs rounded-xl bg-[#0b0d1e]/90 border border-fuchsia-400/30 p-4 flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-pink-300">WEBGL + 3D MOTION</div>
              <div className="text-sm font-bold text-white">Spatial Brand UI</div>
              <div className="text-[11px] text-zinc-400">Interactive Shaders</div>
            </div>
            <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <Palette size={20} className="text-white" />
            </div>
          </div>
        </div>
      )}

      {projectId === 'nfc-solutions' && (
        <div className="relative h-full w-full flex items-center justify-center p-5 bg-gradient-to-br from-blue-950/60 via-[#070814] to-indigo-950/60">
          <div className="relative z-10 mt-6 w-64 rounded-2xl bg-gradient-to-br from-[#121631] to-[#090b18] border border-indigo-400/35 p-4 shadow-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-5 w-7 rounded bg-gradient-to-r from-amber-300 to-yellow-500" />
              <span className="text-[10px] font-mono text-indigo-300">NFC TAP • 13.56MHz</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-wider text-white">KIRULABS SMART ID</span>
              <Cpu size={15} className="text-indigo-400" />
            </div>
          </div>
        </div>
      )}

      {projectId === 'enterprise-security-suite' && (
        <div className="relative h-full w-full flex items-center justify-center p-5 bg-gradient-to-br from-rose-950/50 via-[#070814] to-purple-950/50">
          <div className="relative z-10 mt-6 w-full max-w-xs rounded-xl bg-[#0b0d1e]/90 border border-rose-400/30 p-4 space-y-2.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-rose-300">
              <span>ZERO-TRUST SHIELD</span>
              <span className="text-emerald-300">AES-256</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/10 p-2.5">
              <Lock size={18} className="text-rose-400 shrink-0" />
              <div className="text-xs text-zinc-200 font-medium">
                24/7 Threat Telemetry Active
              </div>
            </div>
          </div>
        </div>
      )}

      {projectId === 'networking-infrastructure' && (
        <div className="relative h-full w-full flex items-center justify-center p-5 bg-gradient-to-br from-amber-950/40 via-[#070814] to-indigo-950/50">
          <div className="relative z-10 mt-6 w-full max-w-xs rounded-xl bg-[#0b0d1e]/90 border border-amber-400/25 p-4 space-y-2.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-amber-300">
              <span>MESH FAILOVER</span>
              <span className="text-emerald-300">99.95% SLA</span>
            </div>
            <div className="flex items-center justify-around py-1">
              <div className="h-8 w-8 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center">
                <Network size={14} className="text-indigo-300" />
              </div>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-indigo-400 to-emerald-400 mx-2" />
              <div className="h-8 w-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-emerald-300" />
              </div>
            </div>
          </div>
        </div>
      )}

      {projectId === 'farming-hardware-systems' && (
        <div className="relative h-full w-full flex items-center justify-center p-5 bg-gradient-to-br from-emerald-950/50 via-[#070814] to-blue-950/50">
          <div className="relative z-10 mt-6 w-full max-w-xs rounded-xl bg-[#0b0d1e]/90 border border-emerald-400/30 p-4 space-y-2.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-emerald-300">
              <span>AGRITECH DRONE &amp; IOT</span>
              <span>LORAWAN</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/10 p-2.5">
              <Sprout size={18} className="text-emerald-400 shrink-0" />
              <div className="text-xs text-zinc-200 font-medium">
                Autonomous Soil &amp; Aerial Telemetry
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
