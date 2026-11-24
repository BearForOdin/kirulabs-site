'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'

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
    <header className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur-sm transition-colors duration-300">
      <nav className="w-full max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Left: Uploaded Logo + "KIRULABS" */}
        <Link
          href="/"
          aria-label="Kirulabs Home"
          className="inline-flex items-center gap-2.5 group"
        >
          <img
            src="/kiru-logo.png?v=3"
            alt="Kirulabs Logo"
            className="h-8 sm:h-9 w-auto object-contain dark:invert transition-opacity duration-300 group-hover:opacity-75"
          />
          <span className="text-xs sm:text-sm font-light tracking-[0.35em] text-foreground">
            KIRULABS
          </span>
        </Link>

        {/* Right: Bigger SLX-Style Minimalist Nav Text + Single Theme Icon */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-base lg:text-[17px] transition-colors duration-200 ${isActive
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground font-medium'
                  }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-foreground" />
                )}
              </Link>
            )
          })}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown — Simple & Clean */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md px-6 pb-5 pt-1 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-base transition-colors ${isActive
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground font-medium'
                  }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
