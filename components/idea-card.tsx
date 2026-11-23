'use client'

import React, { useRef, useState } from 'react'
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
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(
    'perspective(900px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)'
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    if (typeof window !== 'undefined' && window.innerWidth < 768) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4
    setTransform(
      `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(0, -4px, 0)`
    )
  }

  const handleMouseLeave = () => {
    setTransform(
      'perspective(900px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)'
    )
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms ease',
      }}
      className="glass-card group flex flex-col justify-between h-full p-6 sm:p-7"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>
          {category && (
            <span className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
              {category}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-foreground tracking-tight transition-transform duration-300 group-hover:translate-x-0.5">
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
            className="text-muted-foreground group-hover/link:text-foreground group-hover/link:translate-x-1 transition-all duration-300"
          />
        </Link>

        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <span>{externalUrl.replace(/^https?:\/\/(www\.)?/, '')}</span>
            <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </div>
  )
}
