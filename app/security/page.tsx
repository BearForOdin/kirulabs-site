'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Shield, Lock, Eye, CheckCircle } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SpotlightCard } from '@/components/spotlight-card'

export default function SecurityPage() {
  return (
    <main className="relative min-h-screen bg-[#04040a] text-foreground overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="fixed inset-x-0 top-0 h-[36rem] bg-radial-glow pointer-events-none z-0" />

      <Floating3DEasterEggs />
      <SiteNavbar />

      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-mono uppercase tracking-wider">
            <Shield size={15} />
            <span>Zero-Trust Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Enterprise-Grade <span className="gradient-accent">Security</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            Comprehensive cybersecurity and escrow protection engineered to safeguard your business, customer transactions, and cloud infrastructure.
          </p>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <SpotlightCard className="p-8 sm:p-10 space-y-8 border-indigo-500/30">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">Security &amp; Trust Framework</h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Every Kirulabs deployment—including our flagship marketplace{' '}
                <a
                  href="https://siesie.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 underline underline-offset-4"
                >
                  siesie.app
                </a>
                —is hardened with strict identity verification, encrypted data pipelines, and continuous anomaly monitoring.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Lock size={22} />,
                  title: 'End-to-End Data & Escrow Protection',
                  desc: 'AES-256 encryption at rest, TLS 1.3 in transit, and milestone-locked escrow safeguards.',
                },
                {
                  icon: <Eye size={22} />,
                  title: '24/7 Telemetry Monitoring',
                  desc: 'Real-time threat detection, rate-limiting, and automated incident alerts.',
                },
                {
                  icon: <Shield size={22} />,
                  title: 'Zero-Trust Compliance',
                  desc: 'Role-based access controls, audit logging, and strict identity verification.',
                },
                {
                  icon: <CheckCircle size={22} />,
                  title: 'Continuous Audits & Pentesting',
                  desc: 'Proactive vulnerability scanning and code reviews before every production release.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5"
                >
                  <div className="text-indigo-400">{item.icon}</div>
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Secure Your Enterprise?
          </h2>
          <p className="text-zinc-300">
            Schedule a security architecture audit or consultation with our engineering team.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/get-started?idea=Enterprise%20Security%20Suite">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white gap-2 px-8"
              >
                Request Security Audit
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
