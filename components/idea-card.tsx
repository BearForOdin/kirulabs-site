'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

interface IdeaCardProps {
  id: string | number
  title: string
  subtitle?: string
  description: string
  category?: string
  externalUrl?: string
  icon: React.ReactNode
}

export function IdeaCard({
  id,
  title,
  category,
  description,
  externalUrl,
  icon,
}: IdeaCardProps) {
  return (
    <div className="glass-card flex flex-col justify-between h-full p-6 sm:p-7">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200">
            {icon}
          </div>
          {category && (
            <span className="text-xs text-zinc-500 font-mono">{category}</span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-white tracking-tight">
          {title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-zinc-900 flex items-center justify-between gap-3">
        <Link
          href={`/ideas/${id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-200 hover:text-white transition-colors group"
        >
          <span>More info</span>
          <ArrowRight
            size={15}
            className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all"
          />
        </Link>

        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <span>siesie.app</span>
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>
    </div>
  )
}
