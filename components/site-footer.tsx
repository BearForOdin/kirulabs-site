'use client'

import React from 'react'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-border">
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="/kiru-logo.png"
                alt="Kirulabs"
                className="h-6 w-auto object-contain invert dark:invert-0"
              />
              <span className="text-sm font-bold tracking-wider text-foreground">
                KIRULABS
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Enterprise technology, custom hardware, and digital products built in Ghana.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground mb-3">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://siesie.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  siesie.app
                </a>
              </li>
              <li>
                <Link href="/ideas" className="hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/products/features" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-foreground transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/get-started" className="hover:text-foreground transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kirulabs (Dekiru Company Limited). All rights reserved.</p>
          <p className="font-mono text-[11px]">Accra, Ghana</p>
        </div>
      </div>
    </footer>
  )
}
