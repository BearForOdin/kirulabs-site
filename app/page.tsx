'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SlxInteractiveCanvas } from '@/components/slx-interactive-canvas'
import { ArrowRight, ArrowUpRight, Check, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Purple Floating Line Constellations */}
      <SlxInteractiveCanvas />

      {/* 4D Purple Floating Easter Egg Objects */}
      <Floating3DEasterEggs />

      {/* Minimal Navbar with Light/Dark Switch */}
      <SiteNavbar />

      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">
        {/* HERO SECTION — Ultra Minimal */}
        <section className="pt-36 pb-20 text-center space-y-6 animate-reveal-up">
          <img
            src="/kiru-logo.png"
            alt="Kirulabs"
            className="h-20 sm:h-24 w-auto mx-auto object-contain invert dark:invert-0"
          />

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] text-foreground leading-[1.04]">
            Launch Faster.
            <br />
            <span className="text-muted-foreground">Operate Smarter.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto">
            Software, web platforms, and smart hardware built for modern businesses.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/ideas">
              <Button
                size="lg"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-7 h-11 gap-2"
              >
                <span>Projects</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/get-started">
              <Button variant="glass" size="lg" className="rounded-full px-7 h-11">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        {/* FEATURED PROMO AD — Concise, Punchy & Unblurred */}
        <section id="promo" className="py-10">
          <div className="glass-card p-7 sm:p-10">
            <div className="flex items-center justify-between gap-3 pb-5 mb-6 border-b border-border">
              <span className="inline-flex items-center rounded-full bg-foreground text-background px-3 py-0.5 text-[11px] font-mono font-bold uppercase tracking-widest">
                PROMO
              </span>
              <span className="text-xs font-mono font-semibold text-foreground">
                GHS 600
              </span>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Left: Offer & Benefits */}
              <div className="md:col-span-7 space-y-5">
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Get your business website for only 600 cedis!
                </h2>

                <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm text-foreground">
                  {[
                    'Mobile-First Design',
                    'Google SEO Ready',
                    'WhatsApp & Lead Forms',
                    'Free SSL Security',
                    'Up to 5 Custom Pages',
                    '5-Day Delivery',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check size={14} className="shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link href="/get-started?idea=600%20Cedis%20Business%20Website%20Promo">
                    <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-6 h-10 gap-2">
                      <span>Claim Offer</span>
                      <ArrowRight size={15} />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Featured Project in Ad — www.worldcommunitychurch.com */}
              <div className="md:col-span-5">
                <div className="rounded-xl border border-border p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span>FEATURED PROJECT</span>
                    <span>LIVE</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground">
                    World Community Church
                  </h3>

                  <a
                    href="https://www.worldcommunitychurch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground underline underline-offset-4 hover:opacity-75"
                  >
                    <Globe size={13} />
                    <span>www.worldcommunitychurch.com</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MINIMAL DISCIPLINES LIST */}
        <section id="features" className="py-14">
          <div className="divide-y divide-border border-y border-border">
            {[
              { num: '01', title: 'Web & Mobile Platforms', tag: 'Full-Stack' },
              { num: '02', title: 'Automation & Data Systems', tag: 'Operations' },
              { num: '03', title: 'NFC & Smart Hardware', tag: 'IoT' },
              { num: '04', title: 'Security & Brand Design', tag: 'Enterprise' },
            ].map((item) => (
              <Link
                key={item.num}
                href="/ideas"
                className="py-5 flex items-center justify-between group"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-xs font-mono text-muted-foreground">
                    {item.num}
                  </span>
                  <span className="text-lg sm:text-2xl font-semibold text-foreground transition-transform duration-300 group-hover:translate-x-2">
                    {item.title}
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {item.tag} →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FLAGSHIP SPOTLIGHT: SIESIE.APP — Minimal */}
        <section className="py-10 pb-20">
          <div className="glass-card p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                Flagship Product
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                siesie.app
              </h2>
              <p className="text-sm text-muted-foreground">
                Verified home &amp; business services marketplace in Ghana.
              </p>
            </div>

            <a
              href="https://siesie.app"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-6 h-10 gap-1.5">
                <span>Visit siesie.app</span>
                <ArrowUpRight size={15} />
              </Button>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
