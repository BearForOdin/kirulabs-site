'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SlxInteractiveCanvas } from '@/components/slx-interactive-canvas'
import { SmartReveal, AnimatedValueStatement } from '@/components/smart-reveal'
import { ArrowRight, ArrowUpRight, Check, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Purple Floating Line Constellations */}
      <SlxInteractiveCanvas />

      {/* 4D Purple Floating Easter Egg Objects */}
      <Floating3DEasterEggs />

      {/* Responsive Navbar */}
      <SiteNavbar />

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* HERO SECTION — Highly Responsive */}
        <section className="pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-20 text-center space-y-5 sm:space-y-7">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] text-foreground leading-[1.06]">
            <span className="block animate-headline-1">Launch Faster.</span>
            <span className="block text-muted-foreground animate-headline-2">
              Operate Smarter.
            </span>
          </h1>

          {/* Smart Animated Value Statement */}
          <AnimatedValueStatement />

          <SmartReveal delay={350}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 max-w-xs sm:max-w-none mx-auto">
              <Link href="/ideas" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-7 h-11 gap-2 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Projects</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </Link>
              <Link href="/get-started" className="w-full sm:w-auto">
                <Button
                  variant="glass"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-7 h-11"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </SmartReveal>
        </section>

        {/* FEATURED PROMO AD — Responsive on Mobile, Tablet & Desktop */}
        <section id="promo" className="py-6 sm:py-10">
          <SmartReveal delay={100} direction="scale">
            <div className="glass-card p-5 sm:p-8 md:p-10">
              <div className="flex items-center justify-between gap-3 pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-border">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-3 py-0.5 text-[11px] font-mono font-bold uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-background animate-pulse" />
                  PROMO
                </span>
                <span className="text-xs font-mono font-semibold text-foreground">
                  GHS 600
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Left: Offer & Staggered Benefits */}
                <div className="lg:col-span-7 space-y-5">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                    Get your business website for only 600 cedis!
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-foreground">
                    {[
                      'Mobile-First Design',
                      'Google SEO Ready',
                      'WhatsApp & Lead Forms',
                      'Free SSL Security',
                      'Up to 5 Custom Pages',
                      '5-Day Delivery',
                    ].map((item, i) => (
                      <SmartReveal key={i} delay={150 + i * 60}>
                        <div className="flex items-center gap-2 group/item">
                          <Check
                            size={14}
                            className="shrink-0 transition-transform duration-300 group-hover/item:scale-125"
                          />
                          <span className="transition-transform duration-300 group-hover/item:translate-x-0.5">
                            {item}
                          </span>
                        </div>
                      </SmartReveal>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/get-started?idea=600%20Cedis%20Business%20Website%20Promo"
                      className="block sm:inline-block"
                    >
                      <Button className="w-full sm:w-auto group rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-6 h-10 gap-2 transition-all duration-300 hover:-translate-y-0.5">
                        <span>Claim Offer</span>
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right: Featured Project in Ad — www.worldcommunitychurch.com */}
                <div className="lg:col-span-5">
                  <SmartReveal delay={250} direction="right">
                    <div className="rounded-xl border border-border p-4 sm:p-5 space-y-3 transition-all duration-300 hover:border-foreground hover:-translate-y-1">
                      <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                        <span>FEATURED PROJECT</span>
                        <span className="inline-flex items-center gap-1 text-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
                          LIVE
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-foreground">
                        World Community Church
                      </h3>

                      <a
                        href="https://www.worldcommunitychurch.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-wrap items-center gap-1.5 text-xs font-mono text-foreground underline underline-offset-4 hover:opacity-75 group/url break-all"
                      >
                        <Globe size={13} className="shrink-0" />
                        <span>www.worldcommunitychurch.com</span>
                        <ArrowUpRight
                          size={13}
                          className="shrink-0 transition-transform duration-300 group-hover/url:translate-x-0.5 group-hover/url:-translate-y-0.5"
                        />
                      </a>
                    </div>
                  </SmartReveal>
                </div>
              </div>
            </div>
          </SmartReveal>
        </section>

        {/* MINIMAL DISCIPLINES LIST — Responsive Rows */}
        <section id="features" className="py-10 sm:py-14">
          <div className="divide-y divide-border border-y border-border">
            {[
              { num: '01', title: 'Web & Mobile Platforms', tag: 'Full-Stack' },
              { num: '02', title: 'Automation & Data Systems', tag: 'Operations' },
              { num: '03', title: 'NFC & Smart Hardware', tag: 'IoT' },
              { num: '04', title: 'Security & Brand Design', tag: 'Enterprise' },
            ].map((item, i) => (
              <SmartReveal key={item.num} delay={i * 80}>
                <Link
                  href="/ideas"
                  className="relative py-4 sm:py-5 flex items-center justify-between gap-4 group overflow-hidden"
                >
                  <div className="flex items-baseline gap-3 sm:gap-6 min-w-0">
                    <span className="text-xs font-mono text-muted-foreground transition-colors duration-300 group-hover:text-foreground shrink-0">
                      {item.num}
                    </span>
                    <span className="text-base sm:text-2xl font-semibold text-foreground truncate transition-transform duration-300 cubic-bezier(0.16,1,0.3,1) sm:group-hover:translate-x-3">
                      {item.title}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-all duration-300 shrink-0">
                    <span>{item.tag}</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </SmartReveal>
            ))}
          </div>
        </section>

        {/* FLAGSHIP SPOTLIGHT: SIESIE.APP */}
        <section className="py-8 sm:py-10 pb-16 sm:pb-20">
          <SmartReveal delay={120}>
            <div className="glass-card p-6 sm:p-9 flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6">
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  Flagship Product
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  siesie.app
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Verified home &amp; business services marketplace in Ghana.
                </p>
              </div>

              <a
                href="https://siesie.app"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto group rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-6 h-10 gap-1.5 transition-all duration-300 hover:-translate-y-0.5">
                  <span>Visit siesie.app</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Button>
              </a>
            </div>
          </SmartReveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
