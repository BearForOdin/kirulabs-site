'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { IdeaCard } from '@/components/idea-card'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { PROJECTS, ProjectItem } from '@/lib/projects-data'
import {
  ArrowRight,
  Globe,
  Palette,
  Shield,
  Sparkles,
  MapPin,
  Database,
  Cpu,
  Network,
  Sprout,
  Cloud,
  Smartphone,
  Code,
  Video,
} from 'lucide-react'

function getIconComponent(name: ProjectItem['iconName']) {
  switch (name) {
    case 'sparkles':
      return <Sparkles size={18} />
    case 'globe':
      return <Globe size={18} />
    case 'map-pin':
      return <MapPin size={18} />
    case 'database':
      return <Database size={18} />
    case 'palette':
      return <Palette size={18} />
    case 'cpu':
      return <Cpu size={18} />
    case 'shield':
      return <Shield size={18} />
    case 'network':
      return <Network size={18} />
    case 'sprout':
      return <Sprout size={18} />
    case 'cloud':
      return <Cloud size={18} />
    case 'smartphone':
      return <Smartphone size={18} />
    case 'code':
      return <Code size={18} />
    case 'video':
      return <Video size={18} />
    default:
      return <Globe size={18} />
  }
}

export default function IdeasPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <Floating3DEasterEggs />
      <SiteNavbar />

      <main className="max-w-6xl mx-auto border-x border-border/70">
        {/* Header */}
        <section className="pt-32 pb-12 px-6 sm:px-10 lg:px-14 border-b border-border/80">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Portfolio &amp; Builds
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Our <span className="text-muted-foreground">Projects</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Explore our active platforms, software deployments, and hardware solutions built to solve real-world challenges.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-14 px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <IdeaCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                externalUrl={project.externalUrl}
                icon={getIconComponent(project.iconName)}
              />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-6 sm:px-10 lg:px-14 border-t border-border/80 bg-secondary/20">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Let&apos;s collaborate to turn your ideas into reliable solutions that move your business forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link href="/get-started">
                <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-7 h-10 gap-2">
                  <span>Start a Project</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="glass" className="rounded-full px-7 h-10">
                  Back to Home
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
