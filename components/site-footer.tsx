'use client'

import React from 'react'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-border">
          <Link
            href="/"
            aria-label="Kirulabs Home"
            className="inline-flex items-center gap-2.5"
          >
            <img
              src="/kiru-logo.png?v=3"
              alt="Kirulabs"
              className="h-8 w-auto object-contain dark:invert"
            />
            <span className="text-base font-bold tracking-tight text-foreground">
              KIRULABS
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/ideas" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/company/careers" className="hover:text-foreground transition-colors">
              Careers
            </Link>
            <Link href="/get-started" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kirulabs. All rights reserved.</p>
          <p className="font-mono text-[11px]">Accra, Ghana</p>
        </div>
      </div>
    </footer>
  )
}
