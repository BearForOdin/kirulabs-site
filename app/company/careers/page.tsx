'use client'

import React from 'react'
import Link from 'next/link'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white">
      <Floating3DEasterEggs />
      <SiteNavbar />

      <section className="pt-36 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Careers at <span className="text-zinc-400">Kirulabs</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Join Kiru Labs and grow your career with us. Explore opportunities as an intern, contractor, or core team member.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
          <div className="glass-card p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Interns</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Get hands-on experience and learn from industry experts in a supportive environment.
              </p>
            </div>
            <Button disabled variant="glass" className="w-full rounded-full opacity-50">
              Coming Soon
            </Button>
          </div>

          <div className="glass-card p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Contractors</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Part-time flexible opportunities to work on diverse and interesting projects.
              </p>
            </div>
            <Button disabled variant="glass" className="w-full rounded-full opacity-50">
              Coming Soon
            </Button>
          </div>

          <div className="glass-card p-8 flex flex-col justify-between border-zinc-700">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Kiru Core</h2>
              <p className="text-zinc-300 text-sm leading-relaxed mb-8">
                Full-time positions with our core team. Build something meaningful and make a lasting impact.
              </p>
            </div>
            <Link href="/company/careers/kiru-core">
              <Button className="w-full rounded-full bg-white text-black hover:bg-zinc-200 font-medium gap-2">
                View Open Roles
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
