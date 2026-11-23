'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Sparkles, ShieldCheck, Globe2 } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[#030308]/90 backdrop-blur-xl z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/kirulabs-logo.png"
                alt="Kirulabs"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Kirulabs (Dekiru Company Limited) is a technology &amp; product engineering studio founded in Ghana. We build scalable enterprise systems, hardware integrations, and consumer platforms like{' '}
              <a
                href="https://siesie.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                siesie.app
              </a>
              .
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 text-xs text-zinc-300">
                <Globe2 size={13} className="text-indigo-400" />
                Accra • Tema • Kumasi
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs text-emerald-300">
                <ShieldCheck size={13} />
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Flagship & Solutions */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Products &amp; Builds
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li>
                <a
                  href="https://siesie.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors font-medium text-indigo-300"
                >
                  <Sparkles size={13} />
                  siesie.app Marketplace
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <Link href="/ideas/siesie-app" className="hover:text-white transition-colors">
                  Siesie Case Study
                </Link>
              </li>
              <li>
                <Link href="/ideas" className="hover:text-white transition-colors">
                  All Projects &amp; Labs
                </Link>
              </li>
              <li>
                <Link href="/products/features" className="hover:text-white transition-colors">
                  Capabilities &amp; Features
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Enterprise Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About &amp; Team
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="hover:text-white transition-colors">
                  Careers (Kiru Core)
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-white transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/products/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Engage */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li>
                <Link href="/get-started" className="hover:text-white transition-colors">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="hover:text-white transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="/resources/support" className="hover:text-white transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Kirulabs (Dekiru Company Limited). All rights reserved.</p>
          <p className="font-mono text-[11px] text-zinc-400">
            Hint: Click the floating 3D geometric artifacts around the page to unlock hidden Easter Eggs.
          </p>
        </div>
      </div>
    </footer>
  )
}
