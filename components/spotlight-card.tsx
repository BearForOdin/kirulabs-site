'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  tilt?: boolean
}

export function SpotlightCard({
  children,
  className,
  ...props
}: SpotlightCardProps) {
  return (
    <div
      className={cn(
        'glass-card relative overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
