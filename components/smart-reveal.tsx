'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface SmartRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
}

/**
 * Scroll-triggered choreographed reveal with blur-to-sharp + spring physics.
 */
export function SmartReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: SmartRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -20px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenTransform =
    direction === 'up'
      ? 'translate3d(0, 26px, 0) scale(0.985)'
      : direction === 'left'
      ? 'translate3d(-26px, 0, 0) scale(0.985)'
      : direction === 'right'
      ? 'translate3d(26px, 0, 0) scale(0.985)'
      : 'translate3d(0, 12px, 0) scale(0.94)'

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? 'translate3d(0, 0, 0) scale(1)' : hiddenTransform,
        opacity: visible ? 1 : 0,
        filter: visible ? 'blur(0px)' : 'blur(6px)',
        transitionProperty: 'transform, opacity, filter',
        transitionDuration: '750ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity, filter',
      }}
      className={cn(className)}
    >
      {children}
    </div>
  )
}

/**
 * Word-by-word kinetic text animation + live rotating value statement.
 */
export function AnimatedValueStatement() {
  const phrases = [
    'built for modern businesses.',
    'engineered to launch faster.',
    'designed for error-free scale.',
    'crafted under one studio roof.',
  ]
  const [mounted, setMounted] = useState(false)
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true))
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        setAnimating(false)
      }, 280)
    }, 3000)
    return () => {
      cancelAnimationFrame(timer)
      clearInterval(interval)
    }
  }, [phrases.length])

  const staticWords = [
    'Software,',
    'web',
    'platforms,',
    'and',
    'smart',
    'hardware',
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-base sm:text-xl text-muted-foreground leading-relaxed flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1.5">
        {staticWords.map((word, i) => (
          <span
            key={word}
            style={{
              transitionDelay: `${150 + i * 65}ms`,
              transform: mounted
                ? 'translate3d(0, 0, 0)'
                : 'translate3d(0, 14px, 0)',
              opacity: mounted ? 1 : 0,
              filter: mounted ? 'blur(0px)' : 'blur(5px)',
              transitionProperty: 'transform, opacity, filter',
              transitionDuration: '650ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="inline-block text-muted-foreground"
          >
            {word}
          </span>
        ))}
        <span
          style={{
            transitionDelay: '560ms',
            transform: mounted
              ? 'translate3d(0, 0, 0)'
              : 'translate3d(0, 14px, 0)',
            opacity: mounted ? 1 : 0,
            transitionProperty: 'transform, opacity',
            transitionDuration: '650ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="relative inline-flex items-center overflow-hidden px-3 py-0.5 rounded-full border border-border"
        >
          <span
            className={`inline-block font-semibold text-foreground transition-all duration-300 ${
              animating
                ? 'opacity-0 -translate-y-3 blur-[4px]'
                : 'opacity-100 translate-y-0 blur-0'
            }`}
          >
            {phrases[index]}
          </span>
        </span>
      </p>
    </div>
  )
}
