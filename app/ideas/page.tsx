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
    <div className="relative min-h-screen bg-[#050505] text-white">
      <Floating3DEasterEggs />
      <SiteNavbar />

      {/* Header */}
      <section className="pt-36 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Our <span className="text-zinc-400">Projects</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Explore our active platforms, software deployments, and hardware solutions built to solve real-world challenges.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card text-center space-y-5 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Let&apos;s collaborate to turn your ideas into reliable solutions that move your business forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link href="/get-started">
                <Button className="rounded-full bg-white text-black hover:bg-zinc-200 font-medium px-7 gap-2">
                  Start a Project
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="glass" className="rounded-full px-7">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
