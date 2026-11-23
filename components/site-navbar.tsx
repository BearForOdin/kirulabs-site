'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Projects', href: '/ideas' },
  { label: 'About', href: '/about' },
  { label: 'Security', href: '/security' },
  { label: 'Careers', href: '/company/careers' },
]

export function SiteNavbar() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/kiru-logo.png"
            alt="Kirulabs"
            className="h-7 w-auto object-contain invert dark:invert-0 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-sm font-bold tracking-wider text-foreground">
            KIRULABS
          </span>
        </Link>

        {/* Desktop Nav Links (siesie.app removed as requested) */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-secondary/60 p-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-background text-foreground shadow-2xs border border-border/80'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Right Actions: Light/Dark Theme Toggle + Get Started */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Light / Dark Mode Switch */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/70 p-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 transition-all ${
                !isDark
                  ? 'bg-background text-foreground shadow-2xs'
                  : 'text-muted-foreground'
              }`}
            >
              <Sun size={13} />
              <span>Light</span>
            </span>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 transition-all ${
                isDark
                  ? 'bg-background text-foreground shadow-2xs'
                  : 'text-muted-foreground'
              }`}
            >
              <Moon size={13} />
              <span>Dark</span>
            </span>
          </button>

          <Link href="/get-started">
            <Button
              size="sm"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-4 h-8.5 text-xs gap-1"
            >
              <span>Get Started</span>
              <ArrowUpRight size={13} />
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className="glass-button-icon"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            className="glass-button-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
