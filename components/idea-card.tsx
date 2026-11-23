'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import { SpotlightCard } from '@/components/spotlight-card'
import { ProjectVisual } from '@/components/project-visual'

interface IdeaCardProps {
  id: string | number
  title: string
  subtitle?: string
  description: string
  category?: string
  status?: string
  featured?: boolean
  externalUrl?: string
  icon: React.ReactNode
  image?: string
  metrics?: { label: string; value: string }[]
}

export function IdeaCard({
  id,
  title,
  subtitle,
  description,
  category,
  status,
  featured,
  externalUrl,
  icon,
  image,
  metrics,
}: IdeaCardProps) {
  return (
    <SpotlightCard
      tilt
      spotlightColor={featured ? 'rgba(168, 85, 247, 0.24)' : 'rgba(99, 102, 241, 0.18)'}
      className={`group flex flex-col h-full p-0 overflow-hidden ${featured
        ? 'border-indigo-500/40 shadow-[0_0_50px_rgba(99,102,241,0.18)]'
        : 'border-white/10'
        }`}
    >
      {/* Image / Visual Header */}
      <div className="relative w-full h-56 overflow-hidden bg-[#080914] border-b border-white/10">
        <ProjectVisual projectId={String(id)} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a12] via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2">
          {category && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1 text-xs font-mono text-zinc-200">
              {category}
            </span>
          )}
          {status && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono backdrop-blur-md border ${featured
                ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                : 'bg-indigo-500/20 border-indigo-400/35 text-indigo-200'
                }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${featured ? 'bg-emerald-400 animate-pulse' : 'bg-indigo-400'
                  }`}
              />
              {status}
            </span>
          )}
        </div>

        {/* Floating Icon Badge */}
        <div className="absolute bottom-4 left-6 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400/60 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300 shadow-lg">
            {icon}
          </div>
          {featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 border border-purple-400/40 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-purple-200">
              <Sparkles size={11} className="text-pink-400" />
              Flagship Product
            </span>
          )}
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between gap-6">
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs font-mono uppercase tracking-wider text-indigo-400/90 mt-1">
                {subtitle}
              </p>
            )}
          </div>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {description}
          </p>

          {/* Optional Metric Pills */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 pt-3">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white/[0.03] border border-white/[0.07] px-2.5 py-2"
                >
                  <div className="text-[10px] font-mono text-zinc-400 truncate">
                    {m.label}
                  </div>
                  <div className="text-xs font-semibold text-white truncate mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <Link
            href={`/ideas/${id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-300 transition-colors group/btn"
          >
            <span>Explore Case Study</span>
            <ArrowRight
              size={16}
              className="text-indigo-400 transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link>

          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600/90 to-purple-600/90 hover:from-indigo-500 hover:to-purple-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all"
            >
              <span>Visit Live</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  )
}
