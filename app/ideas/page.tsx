'use client'

import React from 'react'
import { IdeaCard } from '@/components/idea-card'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SlxInteractiveCanvas } from '@/components/slx-interactive-canvas'
import { SmartReveal } from '@/components/smart-reveal'
import { PROJECTS, ProjectItem } from '@/lib/projects-data'
import {
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
      <SlxInteractiveCanvas />
      <Floating3DEasterEggs />
      <SiteNavbar />

      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">
        <section className="pt-36 pb-10">
          <SmartReveal>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Projects
            </h1>
          </SmartReveal>
        </section>

        <section className="pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <SmartReveal key={project.id} delay={i * 65}>
                <IdeaCard
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.subtitle}
                  externalUrl={project.externalUrl}
                  icon={getIconComponent(project.iconName)}
                />
              </SmartReveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
