'use client'

import React from 'react'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-900 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-900">
          <div className="col-span-2 md:col-span-1 space-y-3">
            <img
              src="/kirulabs-logo.png"
              alt="Kirulabs"
              className="h-10 w-auto object-contain"
            />
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
              Enterprise technology, custom hardware, and digital products built in Ghana.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-3">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <a
                  href="https://siesie.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  siesie.app
                </a>
              </li>
              <li>
                <Link href="/ideas" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/products/features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <Link href="/get-started" className="hover:text-white transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Kirulabs. All rights reserved.</p>
          <p>Accra, Ghana</p>
        </div>
      </div>
    </footer>
  )
}
