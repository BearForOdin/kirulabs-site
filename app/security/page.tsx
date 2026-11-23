'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Shield, Lock, Eye, CheckCircle } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'

export default function SecurityPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <Floating3DEasterEggs />
      <SiteNavbar />

      <main className="max-w-6xl mx-auto border-x border-border/70">
        <section className="pt-32 pb-12 px-6 sm:px-10 lg:px-14 border-b border-border/80">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Trust &amp; Infrastructure
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Enterprise-Grade <span className="text-muted-foreground">Security</span>
            </h1>
            <p className="text-base text-muted-foreground">
              Comprehensive security solutions to protect your business, data, and infrastructure.
            </p>
          </div>
        </section>

        <section className="py-14 px-6 sm:px-10 lg:px-14">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Lock size={20} />,
                title: 'Data Protection',
                desc: 'End-to-end encryption and secure data handling across all platforms.',
              },
              {
                icon: <Eye size={20} />,
                title: '24/7 Monitoring',
                desc: 'Continuous security monitoring and real-time anomaly alerts.',
              },
              {
                icon: <Shield size={20} />,
                title: 'Compliance',
                desc: 'Built to meet strict industry and enterprise security standards.',
              },
              {
                icon: <CheckCircle size={20} />,
                title: 'Verification & Audits',
                desc: 'Proactive security audits, identity vetting, and penetration testing.',
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-7 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 sm:px-10 lg:px-14 border-t border-border/80 bg-secondary/20">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="text-2xl font-bold text-foreground">
              Ready to Secure Your Business?
            </h2>
            <p className="text-sm text-muted-foreground">
              Contact us to learn more about our security solutions.
            </p>
            <div className="flex justify-center">
              <Link href="/get-started?idea=Enterprise%20Security%20Suite">
                <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium gap-2 px-7">
                  Get in Touch
                  <ArrowRight size={16} />
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
