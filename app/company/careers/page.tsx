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
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <Floating3DEasterEggs />
      <SiteNavbar />

      <main className="max-w-6xl mx-auto border-x border-border/70">
        <section className="pt-32 pb-12 px-6 sm:px-10 lg:px-14 border-b border-border/80">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Join the Team
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Careers at <span className="text-muted-foreground">Kirulabs</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Join Kiru Labs and grow your career with us. Explore opportunities as an intern, contractor, or core team member.
            </p>
          </div>
        </section>

        <section className="py-14 px-6 sm:px-10 lg:px-14">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-muted-foreground mb-2">01</div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Interns</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Get hands-on experience and learn from industry experts in a supportive environment.
                </p>
              </div>
              <Button disabled variant="glass" className="w-full rounded-full opacity-50">
                Coming Soon
              </Button>
            </div>

            <div className="glass-card p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-muted-foreground mb-2">02</div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Contractors</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Part-time flexible opportunities to work on diverse and interesting projects.
                </p>
              </div>
              <Button disabled variant="glass" className="w-full rounded-full opacity-50">
                Coming Soon
              </Button>
            </div>

            <div className="glass-card p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-muted-foreground mb-2">03</div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Kiru Core</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Full-time positions with our core team. Build something meaningful and make a lasting impact.
                </p>
              </div>
              <Link href="/company/careers/kiru-core">
                <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium gap-2">
                  View Open Roles
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
