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
    <main className="relative min-h-screen bg-[#050505] text-white">
      <Floating3DEasterEggs />
      <SiteNavbar />

      <section className="pt-36 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Enterprise-Grade <span className="text-zinc-400">Security</span>
          </h1>
          <p className="text-base text-zinc-400 max-w-xl mx-auto">
            Comprehensive security solutions to protect your business, data, and infrastructure.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
              <div key={i} className="glass-card p-6 space-y-2.5">
                <div className="text-white">{item.icon}</div>
                <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="text-2xl font-bold text-white">
            Ready to Secure Your Business?
          </h2>
          <p className="text-sm text-zinc-400">
            Contact us to learn more about our security solutions.
          </p>
          <div className="flex justify-center">
            <Link href="/get-started?idea=Enterprise%20Security%20Suite">
              <Button className="rounded-full bg-white text-black hover:bg-zinc-200 font-medium gap-2 px-7">
                Get in Touch
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
