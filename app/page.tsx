'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Meteors } from '@/components/ui/meteors'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SpotlightCard } from '@/components/spotlight-card'
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  CheckCircle2,
  Cpu,
  Layers,
  Globe2,
  Lock,
  Box,
  BadgeCheck,
  Wallet,
  Wrench,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#04040a] text-foreground overflow-hidden">
      {/* Ambient Background Video & Architectural Grid */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="fixed inset-0 w-full h-full object-cover opacity-[0.08] pointer-events-none z-0"
      >
        <source src="/funnel-animation.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="fixed inset-x-0 top-0 h-[42rem] bg-radial-glow pointer-events-none z-0" />

      {/* Interactive 3D Floating Easter Egg Objects */}
      <Floating3DEasterEggs />

      {/* Unified Floating Glass Navbar */}
      <SiteNavbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 z-10">
        <Meteors number={16} className="bg-indigo-400" />

        {/* Ambient Orbs */}
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Live Announcement Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-white/[0.04] border border-white/15 px-4 py-1.5 backdrop-blur-md shadow-lg">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                NEW FLAGSHIP
              </span>
              <span className="text-white/20">|</span>
              <span className="text-xs sm:text-sm text-zinc-200">
                Discover <strong className="text-white">siesie.app</strong> — Verified Home &amp; Business Services in Ghana
              </span>
              <Link
                href="/ideas/siesie-app"
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-300 hover:text-indigo-200 ml-1"
              >
                Explore
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Floating Emblem */}
            <div className="relative mx-auto w-fit">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl animate-pulse-glow pointer-events-none" />
              <img
                src="/kiru-logo.png"
                alt="Kirulabs Logo"
                className="relative h-28 sm:h-36 md:h-44 w-auto mx-auto drop-shadow-[0_10px_30px_rgba(99,102,241,0.35)] animate-float-slow"
              />
            </div>

            {/* Display Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Launch Faster.
                <br className="hidden sm:inline" />
                <span className="gradient-accent"> Operate Smarter.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                Kirulabs exists to simplify technology and amplify growth. We engineer high-reliability software, intelligent hardware systems, and category-defining platforms like{' '}
                <a
                  href="https://siesie.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold underline decoration-indigo-400/60 underline-offset-4 hover:text-indigo-300 transition-colors"
                >
                  siesie.app
                </a>
                .
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="/ideas">
                <Button
                  size="lg"
                  className="h-12 px-7 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-[0_0_35px_rgba(99,102,241,0.45)] border border-white/15 gap-2 text-base"
                >
                  Explore Our Projects
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/get-started">
                <Button
                  variant="glass"
                  size="lg"
                  className="h-12 px-7 rounded-full text-base"
                >
                  Start a Project
                </Button>
              </Link>
            </div>

            {/* Subtle 3D Easter Egg Discovery Prompt */}
            <div className="pt-2 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1 text-xs font-mono text-zinc-400">
                <Box size={13} className="text-indigo-400" />
                <span>Interactive 3D Easter Eggs are floating in space — click any rotating 3D artifact to inspect</span>
              </div>
            </div>
          </div>

          {/* 3 Core Value Cards */}
          <div className="mt-16 sm:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <SpotlightCard tilt className="p-6 sm:p-8">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center mb-6 text-indigo-400">
                <Zap size={22} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2.5">
                Comprehensive Solutions
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                We cover every layer of execution—from cloud software and mobile marketplaces to custom hardware and brand systems—so you never juggle fragmented vendors.
              </p>
            </SpotlightCard>

            <SpotlightCard tilt className="p-6 sm:p-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center mb-6 text-purple-400">
                <Shield size={22} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2.5">
                Error-Free Systems
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Our mission is to make enterprise operations planned, automated, and resilient—eliminating human bottlenecks with verifiable digital workflows.
              </p>
            </SpotlightCard>

            <SpotlightCard tilt className="p-6 sm:p-8 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/15 border border-pink-400/30 flex items-center justify-center mb-6 text-pink-400">
                <Rocket size={22} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2.5">
                Future-Ready Craft
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                We pair deep technical architecture with award-winning design and motion so every product we ship commands instant credibility.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* FLAGSHIP PROJECT SPOTLIGHT: SIESIE.APP */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <SpotlightCard
            spotlightColor="rgba(168, 85, 247, 0.22)"
            className="p-6 sm:p-10 md:p-12 border-indigo-500/35 shadow-[0_0_70px_rgba(99,102,241,0.16)]"
          >
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 px-3 py-1 text-xs font-mono font-semibold text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    FLAGSHIP PRODUCT • LIVE
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 text-xs font-mono text-zinc-300">
                    <Globe2 size={13} className="text-indigo-400" />
                    Accra • Tema • Kumasi
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Meet <span className="gradient-accent">siesie.app</span>
                  </h2>
                  <p className="text-lg sm:text-xl font-medium text-indigo-200">
                    Ghana’s Trusted Marketplace for Verified Home &amp; Business Service Professionals.
                  </p>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  In Twi, <strong className="text-white">“Siesie”</strong> means to fix, arrange, and put in order. Built by Kirulabs,{' '}
                  <a
                    href="https://siesie.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-300 hover:text-indigo-200 underline underline-offset-4"
                  >
                    siesie.app
                  </a>{' '}
                  connects households and facility managers with background-checked pros for plumbing, electrical work, deep cleaning, carpentry, and tiling—protected from start to finish by automated Mobile Money escrow.
                </p>

                {/* 3 Core Siesie Pillars */}
                <div className="grid sm:grid-cols-3 gap-3.5 pt-2">
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                      <BadgeCheck size={17} />
                      <span>ID-Verified Pros</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Every artisan undergoes strict National ID and skill vetting before taking bookings.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                      <Wrench size={17} />
                      <span>Upfront Pricing</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Clear, transparent quotes agreed upfront before any repair or maintenance begins.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-pink-400 font-semibold text-sm">
                      <Wallet size={17} />
                      <span>Escrow Protection</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Funds stay safe in escrow and release to MoMo or bank only when you confirm completion.
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://siesie.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold gap-2 shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                    >
                      Launch siesie.app
                      <ArrowUpRight size={18} />
                    </Button>
                  </a>
                  <Link href="/ideas/siesie-app">
                    <Button variant="glass" size="lg" className="rounded-full gap-2">
                      Read Engineering Case Study
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Interactive Product Telemetry Mockup */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-[#070812] border border-white/15 p-5 sm:p-6 shadow-2xl overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-52 h-52 bg-gradient-to-br from-blue-500/25 via-purple-500/25 to-pink-500/25 rounded-full blur-3xl pointer-events-none" />

                  {/* Mock Window Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="rounded-full bg-white/[0.06] border border-white/10 px-3 py-0.5 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                      <Lock size={10} className="text-emerald-400" />
                      https://siesie.app
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400">ESCROW v2.4</span>
                  </div>

                  {/* Mock Live Booking Flow */}
                  <div className="space-y-4">
                    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          Active Service Dispatch
                        </span>
                        <h4 className="text-base font-bold text-white mt-0.5">
                          Electrical &amp; Smart Wiring • East Legon, Accra
                        </h4>
                      </div>
                      <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-1 text-[11px] font-mono text-emerald-300">
                        Verified Pro
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5">
                        <span className="text-[10px] font-mono text-zinc-400">Upfront Quote</span>
                        <div className="text-lg font-bold text-white mt-0.5">GHS 450.00</div>
                        <span className="text-[11px] text-emerald-400">Locked &amp; Approved</span>
                      </div>
                      <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5">
                        <span className="text-[10px] font-mono text-zinc-400">Escrow Status</span>
                        <div className="text-lg font-bold text-indigo-300 mt-0.5">Protected</div>
                        <span className="text-[11px] text-zinc-400">MoMo Auto-Release</span>
                      </div>
                    </div>

                    {/* Escrow Pipeline Steps */}
                    <div className="rounded-xl bg-indigo-950/30 border border-indigo-500/30 p-4 space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-indigo-300">SIESIE TRUST PIPELINE</span>
                        <span className="font-mono text-emerald-300">3 / 3 VERIFIED</span>
                      </div>
                      <div className="space-y-2 text-xs text-zinc-200">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          <span>National ID &amp; Trade Vetting Passed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          <span>Escrow Funded via Mobile Money</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          <span>Customer Sign-Off Triggers Instant Payout</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* WHY CHOOSE KIRULABS (BENTO ARCHITECTURE) */}
      <section id="features" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-indigo-300">
              <Sparkles size={12} />
              Enterprise Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Why Industry Leaders Choose <span className="gradient-accent">Kirulabs</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-300">
              We combine software engineering, hardware prototyping, and high-craft visual design under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: '01 // UNIFIED EXECUTION',
                title: 'All-in-One Technology Partner',
                desc: 'We provide complete IT, full-stack software, hardware IoT, and digital creative solutions under one roof—eliminating the delays of coordinating multiple vendors.',
                icon: <Layers className="text-indigo-400" size={22} />,
              },
              {
                tag: '02 // OPERATIONAL PRECISION',
                title: 'Error-Free Enterprise Efficiency',
                desc: 'Our platforms are architected to make complex workflows structured, auditable, and resilient against costly operational mistakes.',
                icon: <Shield className="text-purple-400" size={22} />,
              },
              {
                tag: '03 // DESIGN + ENGINEERING',
                title: 'Creative + Technical Mastery',
                desc: 'We fuse rigorous systems engineering with interactive 3D visuals, brand systems, and motion design to give your enterprise an unmistakable edge.',
                icon: <Sparkles className="text-pink-400" size={22} />,
              },
              {
                tag: '04 // FRONTIER R&D',
                title: 'Future-Driven Innovation',
                desc: 'From escrow-backed marketplaces like siesie.app to autonomous agricultural drones and NFC smart systems, we build for tomorrow’s scale.',
                icon: <Cpu className="text-cyan-400" size={22} />,
              },
            ].map((item, i) => (
              <SpotlightCard key={i} tilt className="p-7 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-indigo-400 tracking-wider">
                      {item.tag}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <SpotlightCard
            spotlightColor="rgba(99, 102, 241, 0.25)"
            className="text-center space-y-6 p-8 sm:p-14 border-indigo-500/30"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/15 px-3.5 py-1 text-xs font-mono text-zinc-300">
              Ready for Lift-Off
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Ready to Build Your Next <span className="gradient-accent">Breakthrough?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Partner with Kirulabs to transform your ideas into production-ready software, smart hardware systems, and unforgettable digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-3">
              <Link href="/get-started">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold px-8 gap-2 shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                >
                  Get Started Today
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="glass" size="lg" className="w-full sm:w-auto rounded-full px-8">
                  Meet the Team
                </Button>
              </Link>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
