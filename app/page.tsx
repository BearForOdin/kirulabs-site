'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SlxInteractiveCanvas } from '@/components/slx-interactive-canvas'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  Plus,
  Minus,
} from 'lucide-react'

const SCENARIO_PROMPTS = [
  {
    id: 'promo',
    question: 'Tell me about the 600 Cedis website promo',
    answer:
      'We design, build, and launch a fast, mobile-first business or organization website for just GHS 600—modeled on the same standard as our live build for World Community Church (www.worldcommunitychurch.com).',
    ctaLabel: 'Claim 600 Cedis Promo',
    ctaHref: '/get-started?idea=600%20Cedis%20Business%20Website%20Promo',
  },
  {
    id: 'company',
    question: 'What would you build for my company?',
    answer:
      'We act as your single engineering & creative studio—delivering web applications, internal automation, custom NFC hardware, and brand systems without juggling multiple vendors.',
    ctaLabel: 'Start a Project Brief',
    ctaHref: '/get-started',
  },
  {
    id: 'case',
    question: 'Show me a live case like mine',
    answer:
      'Explore siesie.app (Ghana’s escrow-backed home services marketplace) and www.worldcommunitychurch.com (a high-speed organization portal built in Accra).',
    ctaLabel: 'Browse All 10 Projects',
    ctaHref: '/ideas',
  },
  {
    id: 'method',
    question: 'How does Kirulabs work?',
    answer:
      'We move from scope to interactive prototype in days, not months—combining clean architecture, error-free operational workflows, and transparent milestone delivery.',
    ctaLabel: 'Meet the Engineering Team',
    ctaHref: '/about',
  },
]

const SERVICES_INDEX = [
  {
    num: '01',
    title: 'Web Platforms & Digital Products',
    tag: 'Strategy • UI/UX • Full-Stack',
    summary:
      'High-conversion business websites, custom web apps, and marketplaces engineered for speed, SEO, and mobile reliability.',
    deliverables: ['Business Websites (GHS 600 Promo)', 'Custom SaaS & Marketplaces', 'Mobile-First Responsive UI', 'SEO & Analytics Telemetry'],
  },
  {
    num: '02',
    title: 'Operational Systems & Automation',
    tag: 'Workflows • Data • AI',
    summary:
      'Error-free internal tools, data dashboards, and automated workflows that eliminate manual bottlenecks across your organization.',
    deliverables: ['Executive BI Dashboards', 'Process & CRM Automation', 'Geospatial Availability Maps', 'Custom API Integrations'],
  },
  {
    num: '03',
    title: 'Smart Hardware, NFC & Connectivity',
    tag: 'IoT • NFC • Networking',
    summary:
      'Physical-digital hardware solutions including programmable NFC business cards, campus networking, and agricultural telemetry.',
    deliverables: ['Custom Branded NFC Smart Cards', 'Failover Enterprise Networking', 'AgriTech Drone & Sensor Systems', 'Hardware Prototyping'],
  },
  {
    num: '04',
    title: 'Enterprise Security & Brand Craft',
    tag: 'Zero-Trust • Motion • Identity',
    summary:
      'End-to-end cybersecurity hardening paired with distinctive creative direction, publications, and interactive 3D brand experiences.',
    deliverables: ['Zero-Trust Security Audits', 'SSL & Cloud Infrastructure Hardening', 'Interactive 3D Web Experiences', 'Brand & Media Production'],
  },
]

export default function Home() {
  const [activePrompt, setActivePrompt] = useState(SCENARIO_PROMPTS[0])
  const [expandedService, setExpandedService] = useState<string | null>('01')

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* SLX-Inspired Subtle Spatial Depth Canvas */}
      <SlxInteractiveCanvas />

      {/* 4D Purple Floating Easter Egg Objects */}
      <Floating3DEasterEggs />

      {/* Minimal Navbar with Light/Dark Switch */}
      <SiteNavbar />

      {/* Structural Editorial Container */}
      <main className="relative z-10 max-w-6xl mx-auto border-x border-border/75 bg-background/60 backdrop-blur-[2px]">
        {/* HERO SECTION — SLX Management Minimalist Manifesto + Interactive Prompts */}
        <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl mx-auto text-center space-y-7 animate-reveal-up">
            {/* Minimal Studio Coordinate Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
              <span>Kirulabs • Technology &amp; Product Studio</span>
            </div>

            {/* Theme-Aware Emblem */}
            <div>
              <img
                src="/kiru-logo.png"
                alt="Kirulabs Logo"
                className="h-20 sm:h-28 w-auto mx-auto object-contain invert dark:invert-0 transition-all duration-300"
              />
            </div>

            {/* Editorial Display Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-[4.35rem] font-bold tracking-[-0.04em] text-foreground leading-[1.04]">
              Launch Faster.
              <br />
              <span className="text-muted-foreground">Operate Smarter.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We guide your technology projects from strategy to live execution—building high-craft web platforms, error-free enterprise systems, and connected hardware.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              <Link href="/ideas">
                <Button
                  size="lg"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-7 h-11 gap-2"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/get-started">
                <Button
                  variant="glass"
                  size="lg"
                  className="rounded-full px-7 h-11"
                >
                  Start a Project
                </Button>
              </Link>
            </div>

            {/* SLX-Style Interactive Conversational Scenario Switcher */}
            <div className="pt-8 space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                Ask Kirulabs — Interactive Brief
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {SCENARIO_PROMPTS.map((item) => {
                  const isSelected = activePrompt.id === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActivePrompt(item)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? 'bg-foreground text-background border-foreground shadow-xs'
                          : 'bg-card text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground'
                      }`}
                    >
                      {item.question}
                    </button>
                  )
                })}
              </div>

              {/* Active Scenario Response Card */}
              <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-card/90 p-5 text-left shadow-xs transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {activePrompt.answer}
                </p>
                <Link
                  href={activePrompt.ctaHref}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:opacity-75 shrink-0 underline underline-offset-4"
                >
                  <span>{activePrompt.ctaLabel}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROMO AD: "Get your business website for only 600 cedis!" featuring www.worldcommunitychurch.com */}
        <section id="promo" className="py-16 px-6 sm:px-10 lg:px-14 border-t border-border/80 bg-secondary/30">
          <div className="glass-card p-7 sm:p-10 lg:p-12 border-foreground/20 relative overflow-hidden">
            {/* Subtle top hairline accent */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-border">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center rounded-full bg-foreground text-background px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest">
                  PROMO
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Limited SME &amp; Organization Launch Offer
                </span>
              </div>
              <span className="text-xs font-mono font-semibold text-foreground">
                ONE-TIME PACKAGE • GHS 600
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-stretch">
              {/* Left Column: Offer Headline, Benefits List & CTA */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.03em] text-foreground leading-[1.1]">
                    Get your business website for only{' '}
                    <span className="underline decoration-border underline-offset-8">
                      600 cedis!
                    </span>
                  </h2>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                    Give your business, church, or organization a fast, credible online presence engineered by Kirulabs—complete with modern responsive design, SEO, and instant customer inquiry flows.
                  </p>

                  {/* Benefits Checklist */}
                  <div className="pt-2 grid sm:grid-cols-2 gap-3">
                    {[
                      'Custom Mobile-First Responsive Design',
                      'Google SEO & Fast Page-Load Optimization',
                      'WhatsApp & Direct Lead Capture Forms',
                      'SSL Security & Domain Configuration Support',
                      'Up to 5 Core Pages (Home, About, Services, etc.)',
                      'Rapid 5-Day Delivery by Kirulabs Engineers',
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="mt-0.5 h-5 w-5 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="text-xs sm:text-sm text-foreground font-medium leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Promo Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Link href="/get-started?idea=600%20Cedis%20Business%20Website%20Promo">
                    <Button
                      size="lg"
                      className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-7 h-11 gap-2"
                    >
                      <span>Claim 600 Cedis Website</span>
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <a
                    href="https://www.worldcommunitychurch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="glass"
                      size="lg"
                      className="rounded-full px-6 h-11 gap-1.5"
                    >
                      <span>See Live Sample</span>
                      <ArrowUpRight size={15} />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Column: Featured Project inside the Ad — www.worldcommunitychurch.com */}
              <div className="lg:col-span-5 flex">
                <div className="w-full rounded-2xl border border-border bg-secondary/50 p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Browser-Style Address Header */}
                    <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-border">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-foreground" />
                        Featured Project
                      </span>
                      <a
                        href="https://www.worldcommunitychurch.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-[11px] font-mono text-foreground hover:bg-foreground hover:text-background transition-colors"
                      >
                        <Globe size={11} />
                        <span>www.worldcommunitychurch.com</span>
                        <ArrowUpRight size={11} />
                      </a>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-mono text-muted-foreground">
                        LIVE CLIENT DEPLOYMENT • ACCRA, GHANA
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                        World Community Church
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Built by Kirulabs for World Community Church International (Tantra Hills, Accra). Features responsive mobile architecture, service schedules, leadership portals, and instant visitor onboarding.
                      </p>
                    </div>

                    {/* Key Specs Pill Grid */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="rounded-xl border border-border bg-card p-2.5">
                        <div className="text-[10px] font-mono text-muted-foreground">Speed</div>
                        <div className="text-xs font-semibold text-foreground mt-0.5">99+ Mobile</div>
                      </div>
                      <div className="rounded-xl border border-border bg-card p-2.5">
                        <div className="text-[10px] font-mono text-muted-foreground">Security</div>
                        <div className="text-xs font-semibold text-foreground mt-0.5">SSL Active</div>
                      </div>
                      <div className="rounded-xl border border-border bg-card p-2.5">
                        <div className="text-[10px] font-mono text-muted-foreground">Status</div>
                        <div className="text-xs font-semibold text-foreground mt-0.5">Live Now</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                    <a
                      href="https://www.worldcommunitychurch.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground hover:opacity-75 transition-opacity"
                    >
                      <span>Visit www.worldcommunitychurch.com</span>
                      <ArrowUpRight size={15} />
                    </a>

                    <Link
                      href="/ideas/world-community-church"
                      className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLX-STYLE INTERACTIVE SERVICES INDEX */}
        <section id="features" className="py-20 px-6 sm:px-10 lg:px-14 border-t border-border/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Capabilities &amp; Execution
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                One Studio. Every Discipline.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Click any discipline below to inspect our technical deliverables.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {SERVICES_INDEX.map((service) => {
              const isOpen = expandedService === service.num
              return (
                <div key={service.num} className="py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedService(isOpen ? null : service.num)
                    }
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-5 sm:gap-8">
                      <span className="text-xs font-mono text-muted-foreground">
                        {service.num}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2">
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline text-xs font-mono text-muted-foreground">
                        {service.tag}
                      </span>
                      <span className="h-8 w-8 rounded-full border border-border bg-card flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-5 pl-9 sm:pl-14 grid md:grid-cols-12 gap-6 animate-reveal-up">
                      <p className="md:col-span-6 text-sm text-muted-foreground leading-relaxed">
                        {service.summary}
                      </p>
                      <div className="md:col-span-6 grid sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((d, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-border bg-secondary/40 px-3 py-2 text-xs font-medium text-foreground flex items-center gap-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* FLAGSHIP PLATFORM SPOTLIGHT: SIESIE.APP */}
        <section className="py-20 px-6 sm:px-10 lg:px-14 border-t border-border/80 bg-secondary/20">
          <div className="glass-card p-8 sm:p-10 lg:p-12">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-foreground" />
                  <span>Flagship Venture • Built by Kirulabs</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  siesie.app
                </h2>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Ghana&apos;s trusted home and business services marketplace connecting households and offices across Accra, Tema, and Kumasi with verified local service professionals.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://siesie.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-6 h-10 gap-1.5">
                      <span>Visit siesie.app</span>
                      <ArrowUpRight size={15} />
                    </Button>
                  </a>
                  <Link href="/ideas/siesie-app">
                    <Button
                      variant="glass"
                      className="rounded-full px-6 h-10 gap-1.5"
                    >
                      <span>Project Overview</span>
                      <ArrowRight size={15} />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-border bg-secondary/40 divide-y divide-border">
                  {[
                    {
                      title: 'ID-Verified Professionals',
                      desc: 'Every service provider is vetted before taking bookings.',
                    },
                    {
                      title: 'Transparent Upfront Pricing',
                      desc: 'Clear quotes agreed upon before any work begins.',
                    },
                    {
                      title: 'Escrow Payment Protection',
                      desc: 'Funds release to Mobile Money only after job completion.',
                    },
                  ].map((spec, idx) => (
                    <div key={idx} className="p-4 flex items-start gap-3.5">
                      <div className="mt-0.5 h-5 w-5 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                        <Check size={12} className="text-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          {spec.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {spec.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" className="py-20 px-6 sm:px-10 lg:px-14 border-t border-border/80">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Ready to Move Your Project Forward?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Whether you need a business website for 600 cedis or a custom enterprise platform, our team is ready to build.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link href="/get-started?idea=600%20Cedis%20Business%20Website%20Promo">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-8 h-11 gap-2"
                >
                  <span>Claim 600 Cedis Website</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/get-started">
                <Button
                  variant="glass"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 h-11"
                >
                  Custom Enterprise Brief
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
