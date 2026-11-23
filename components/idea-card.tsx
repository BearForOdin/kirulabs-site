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
    <div className="glass-card group flex flex-col justify-between h-full p-6 sm:p-7">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground transition-transform duration-300 group-hover:scale-105">
            {icon}
          </div>
          {category && (
            <span className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
              {category}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-foreground tracking-tight">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-5 mt-6 border-t border-border flex items-center justify-between gap-3">
        <Link
          href={`/ideas/${id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:opacity-75 transition-opacity group/link"
        >
          <span>More info</span>
          <ArrowRight
            size={15}
            className="text-muted-foreground group-hover/link:text-foreground group-hover/link:translate-x-0.5 transition-all"
          />
        </Link>

        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            <span>siesie.app</span>
            <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </div>
  )
}
