'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/ideas' },
  { label: 'About', href: '/about' },
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
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Full Unclipped Brand Logo at Balanced Proportion */}
        <Link
          href="/"
          aria-label="Kirulabs Home"
          className="inline-flex items-center group"
        >
          <img
            src="/kiru-logo.png"
            alt="Kirulabs"
            className="h-24 w-auto -my-5 object-contain invert dark:invert-0 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav Links: Home, Projects, About, Careers */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-secondary/50 p-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-foreground text-background shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Right Actions: Single Button Dark Mode Switch + Get Started */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="glass-button-icon h-9 w-9"
          >
            {isDark ? (
              <Sun size={16} className="transition-transform duration-300 rotate-0" />
            ) : (
              <Moon size={16} className="transition-transform duration-300 rotate-0" />
            )}
          </button>

          <Link href="/get-started">
            <Button
              size="sm"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-4 h-9 text-xs gap-1 transition-transform duration-300 hover:-translate-y-0.5"
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
        <div className="md:hidden border-t border-border bg-background px-4 py-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
