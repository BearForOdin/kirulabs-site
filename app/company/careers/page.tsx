'use client'

import React from 'react'
import Link from 'next/link'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SpotlightCard } from '@/components/spotlight-card'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-[#04040a] text-foreground overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="fixed inset-x-0 top-0 h-[36rem] bg-radial-glow pointer-events-none z-0" />

      <Floating3DEasterEggs />
      <SiteNavbar />

      <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 px-4 py-1 text-xs font-mono uppercase tracking-wider text-indigo-300">
            <Sparkles size={13} />
            Join the Studio
          </span>
          <img
            src="/careers-banner.png"
            alt="Careers at Kiru Labs"
            className="h-44 sm:h-60 md:h-68 w-auto drop-shadow-2xl"
            loading="lazy"
            decoding="async"
          />
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Join Kiru Labs and help us build platforms like <strong className="text-white">siesie.app</strong> and enterprise systems across Africa. Explore opportunities as an intern, contractor, or core team member.
          </p>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
          <SpotlightCard className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-400">TRACK // 01</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">Interns</h2>
              <p className="text-zinc-300 text-base leading-relaxed mb-8">
                Get hands-on engineering, product, and creative experience alongside industry mentors in a fast-shipping studio environment.
              </p>
            </div>
            <div className="space-y-3">
              <Button disabled variant="glass" className="w-full rounded-full opacity-50">
                Cohort Opening Soon
              </Button>
              <p className="text-xs text-zinc-400 text-center font-mono">
                Follow our socials for cohort announcements
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-400">TRACK // 02</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">Contractors</h2>
              <p className="text-zinc-300 text-base leading-relaxed mb-8">
                Flexible, project-based engagements for specialist engineers, designers, and field operators on high-impact client builds.
              </p>
            </div>
            <div className="space-y-3">
              <Button disabled variant="glass" className="w-full rounded-full opacity-50">
                Opening Soon
              </Button>
              <p className="text-xs text-zinc-400 text-center font-mono">
                Check back for open partner briefs
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard
            tilt
            spotlightColor="rgba(168, 85, 247, 0.25)"
            className="p-8 sm:p-10 flex flex-col justify-between border-indigo-500/45 shadow-[0_0_50px_rgba(99,102,241,0.2)]"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-0.5 text-xs font-mono text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                HIRING NOW
              </span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-4">Kiru Core</h2>
              <p className="text-zinc-200 text-base leading-relaxed mb-8">
                Full-time leadership and execution positions with our core team. Build flagship products and make a lasting impact.
              </p>
            </div>
            <Link href="/company/careers/kiru-core">
              <Button
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold gap-2 shadow-[0_0_25px_rgba(99,102,241,0.4)]"
              >
                View Open Roles
                <ArrowRight size={18} />
              </Button>
            </Link>
          </SpotlightCard>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
