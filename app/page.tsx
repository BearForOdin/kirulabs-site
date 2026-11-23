'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { ArrowRight, ArrowUpRight, Zap, Shield, Rocket, Check } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* 4D Purple Floating Easter Egg Objects */}
      <Floating3DEasterEggs />

      {/* Clean Minimal Navbar with Light/Dark Switch */}
      <SiteNavbar />

      {/* Structural Editorial Container */}
      <main className="max-w-6xl mx-auto border-x border-border/70">
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 sm:pt-36 sm:pb-24 px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl mx-auto text-center space-y-7 animate-reveal-up">
            {/* Subtle Monochrome Studio Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              <span>Kirulabs • Technology &amp; Product Studio</span>
            </div>

            {/* Theme-Aware Emblem */}
            <div>
              <img
                src="/kiru-logo.png"
                alt="Kirulabs Logo"
                className="h-24 sm:h-32 w-auto mx-auto object-contain invert dark:invert-0 transition-all duration-300"
              />
            </div>

            {/* Editorial Display Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-[4.25rem] font-bold tracking-[-0.04em] text-foreground leading-[1.06]">
              Launch Faster.
              <br />
              <span className="text-muted-foreground">Operate Smarter.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Kirulabs exists to simplify technology and amplify growth. We create smart, scalable solutions that help businesses run efficiently, innovate confidently, and scale sustainably.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
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
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ARCHITECTURAL CAPABILITIES STRIP */}
        <section className="border-y border-border/80 bg-secondary/35">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/80">
            {[
              { index: '01', label: 'Software Engineering', detail: 'Web, Cloud & Mobile' },
              { index: '02', label: 'Hardware & IoT', detail: 'NFC & AgriTech Systems' },
              { index: '03', label: 'Enterprise Security', detail: 'Zero-Trust & Compliance' },
              { index: '04', label: 'Creative & Brand', detail: 'Motion, 3D & Identity' },
            ].map((item) => (
              <div key={item.index} className="px-6 py-5 sm:px-8">
                <div className="text-[11px] font-mono text-muted-foreground mb-1">
                  {item.index}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 CORE PILLARS */}
        <section className="py-20 px-6 sm:px-10 lg:px-14">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="glass-card p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground">
                    <Zap size={18} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">01</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2.5 tracking-tight">
                  Comprehensive Solutions
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We cover every aspect of IT, software, and digital execution so you don&apos;t need multiple vendors.
                </p>
              </div>
            </div>

            <div className="glass-card p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground">
                    <Shield size={18} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">02</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2.5 tracking-tight">
                  Error-Free Systems
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our mission is to make work more planned, efficient, and less prone to operational mistakes.
                </p>
              </div>
            </div>

            <div className="glass-card p-7 flex flex-col justify-between sm:col-span-2 md:col-span-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground">
                    <Rocket size={18} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">03</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2.5 tracking-tight">
                  Future Ready
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We combine creative direction with technical precision to deliver solutions built to last.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECT: SIESIE.APP */}
        <section className="py-20 px-6 sm:px-10 lg:px-14 border-t border-border/80 bg-secondary/20">
          <div className="glass-card p-8 sm:p-10 lg:p-12">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-foreground" />
                  <span>Featured Product • Built by Kirulabs</span>
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

              {/* Right Column: Clean Editorial Specification List */}
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

        {/* WHY CHOOSE KIRULABS */}
        <section id="features" className="py-20 px-6 sm:px-10 lg:px-14 border-t border-border/80">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Why Kirulabs
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Engineered for Enterprise Clarity.
            </h2>
            <p className="text-base text-muted-foreground">
              We offer the best solutions to help your enterprise operate without friction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'All-in-One Tech Partner',
                desc: 'We provide complete IT and digital solutions under one roof, from software troubleshooting to creative design and videography.',
              },
              {
                num: '02',
                title: 'Error-Free Efficiency',
                desc: 'Our systems are built to make work easier, more organized, and less prone to mistakes, ensuring smooth operations for enterprises.',
              },
              {
                num: '03',
                title: 'Creative + Technical Expertise',
                desc: 'We blend technical problem-solving with creative services like publications, presentations, and brand systems to give you a clear edge.',
              },
              {
                num: '04',
                title: 'Future-Driven Innovation',
                desc: 'At Kirulabs, we don’t just solve today’s problems—we design solutions that prepare your enterprise for tomorrow’s challenges.',
              },
            ].map((item) => (
              <div key={item.num} className="glass-card p-7 space-y-3">
                <div className="text-xs font-mono text-muted-foreground">
                  {item.num}
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" className="py-20 px-6 sm:px-10 lg:px-14 border-t border-border/80 bg-secondary/20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Contact us today to discover how Kirulabs can transform your business with innovative tech solutions, smart systems, and dependable execution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link href="/get-started">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-8 h-11 gap-2"
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="glass"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 h-11"
                >
                  About Us
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
