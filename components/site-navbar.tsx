'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, Sparkles, ArrowUpRight, Box } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/ideas' },
  { label: 'siesie.app', href: '/ideas/siesie-app', badge: 'Live' },
  { label: 'About', href: '/about' },
  { label: 'Security', href: '/security' },
  { label: 'Careers', href: '/company/careers' },
]

export function SiteNavbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [eggCount, setEggCount] = useState(0)

  useEffect(() => {
    const syncEggs = () => {
      try {
        const saved = localStorage.getItem('kiru_easter_eggs_v1')
        if (saved) {
          const parsed = JSON.parse(saved)
          if (Array.isArray(parsed)) setEggCount(parsed.length)
        }
      } catch {
        // ignore
      }
    }
    syncEggs()
    window.addEventListener('kiru-egg-update', syncEggs)
    return () => window.removeEventListener('kiru-egg-update', syncEggs)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-3">
      <nav className="max-w-7xl mx-auto glass-effect rounded-2xl border border-white/10 px-4 sm:px-6 h-16 flex items-center justify-between shadow-2xl">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 border border-white/15 group-hover:border-indigo-400/60 transition-all">
            <img
              src="/kiru-logo.png"
              alt="Kirulabs"
              className="h-6 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              KIRULABS
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 hidden sm:inline">
              Engineering Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.03] border border-white/10 p-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href || (item.href !== '/ideas' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-1.5 py-0.2 text-[10px] font-mono text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <div
            title="Click the floating 3D objects around the site to unlock KiruLabs Easter Eggs"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-mono text-zinc-300"
          >
            <Box size={13} className="text-indigo-400" />
            <span>3D Eggs:</span>
            <span className="font-semibold text-white">{eggCount}/4</span>
          </div>

          <a
            href="https://siesie.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            siesie.app
            <ArrowUpRight size={13} className="text-indigo-400" />
          </a>

          <Link href="/get-started">
            <Button
              variant="default"
              size="sm"
              className="rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] border border-white/15 px-4"
            >
              <Sparkles size={14} />
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden glass-button-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto glass-card p-4 space-y-2 border border-white/15">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
