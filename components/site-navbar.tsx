'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Projects', href: '/ideas' },
  { label: 'siesie.app', href: '/ideas/siesie-app' },
  { label: 'About', href: '/about' },
  { label: 'Security', href: '/security' },
  { label: 'Careers', href: '/company/careers' },
]

export function SiteNavbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/80 bg-[#050505]/85 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/kiru-logo.png"
            alt="Kirulabs"
            className="h-7 w-auto object-contain"
          />
          <span className="text-sm font-semibold tracking-wider text-white">
            KIRULABS
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/ideas' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/get-started">
            <Button
              size="sm"
              className="rounded-full bg-white text-black hover:bg-zinc-200 font-medium px-4 h-8 text-xs"
            >
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
        <div className="md:hidden border-t border-zinc-800 bg-[#09090b] px-4 py-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-zinc-900"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full rounded-full bg-white text-black hover:bg-zinc-200">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
