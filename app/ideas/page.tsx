'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { IdeaCard } from '@/components/idea-card'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SpotlightCard } from '@/components/spotlight-card'
import { PROJECTS, ProjectItem } from '@/lib/projects-data'
import {
  ArrowRight,
  ArrowUpRight,
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
  BadgeCheck,
  Wallet,
  Wrench,
} from 'lucide-react'

function getIconComponent(name: ProjectItem['iconName']) {
  switch (name) {
    case 'sparkles':
      return <Sparkles size={22} />
    case 'globe':
      return <Globe size={22} />
    case 'map-pin':
      return <MapPin size={22} />
    case 'database':
      return <Database size={22} />
    case 'palette':
      return <Palette size={22} />
    case 'cpu':
      return <Cpu size={22} />
    case 'shield':
      return <Shield size={22} />
    case 'network':
      return <Network size={22} />
    case 'sprout':
      return <Sprout size={22} />
    case 'cloud':
      return <Cloud size={22} />
    case 'smartphone':
      return <Smartphone size={22} />
    case 'code':
      return <Code size={22} />
    case 'video':
      return <Video size={22} />
    default:
      return <Sparkles size={22} />
  }
}

export default function IdeasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(PROJECTS.map((item) => item.category)))
  const filteredProjects = selectedCategory
    ? PROJECTS.filter((item) => item.category === selectedCategory)
    : PROJECTS

  const flagship = PROJECTS.find((p) => p.id === 'siesie-app')

  return (
    <div className="relative min-h-screen bg-[#04040a] text-foreground overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="fixed inset-x-0 top-0 h-[38rem] bg-radial-glow pointer-events-none z-0" />

      {/* Interactive 3D Floating Easter Egg Objects */}
      <Floating3DEasterEggs />

      {/* Unified Navbar */}
      <SiteNavbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 border border-indigo-400/30 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-indigo-300">
            <Sparkles size={13} />
            Kirulabs Engineering Portfolio
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Our Innovative <span className="gradient-accent">Projects &amp; Platforms</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Explore our flagship live products, enterprise software deployments, and hardware systems engineered to solve real-world challenges.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap gap-2 justify-center">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                  : 'bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                    : 'bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Spotlight Banner for siesie.app */}
      {flagship && selectedCategory === null && (
        <section className="relative pb-8 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <SpotlightCard
              spotlightColor="rgba(168, 85, 247, 0.25)"
              className="p-6 sm:p-10 border-indigo-500/40 shadow-[0_0_60px_rgba(99,102,241,0.18)]"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 px-3 py-1 text-xs font-mono font-semibold text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      FLAGSHIP LIVE PLATFORM
                    </span>
                    <span className="rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 text-xs font-mono text-indigo-300">
                      siesie.app
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    siesie.app — Verified Home &amp; Business Services Marketplace
                  </h2>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {flagship.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-1 text-xs text-zinc-200">
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/[0.04] border border-white/10 px-3 py-1.5">
                      <BadgeCheck size={15} className="text-indigo-400" />
                      ID-Verified Service Pros
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/[0.04] border border-white/10 px-3 py-1.5">
                      <Wrench size={15} className="text-purple-400" />
                      Transparent Upfront Quotes
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/[0.04] border border-white/10 px-3 py-1.5">
                      <Wallet size={15} className="text-pink-400" />
                      Mobile Money Escrow Protection
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                  <a
                    href="https://siesie.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-semibold gap-2 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                    >
                      Visit siesie.app Live
                      <ArrowUpRight size={18} />
                    </Button>
                  </a>
                  <Link href="/ideas/siesie-app" className="w-full">
                    <Button variant="glass" size="lg" className="w-full rounded-full gap-2">
                      View Architecture &amp; Details
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project) => (
              <IdeaCard
                key={project.id}
                id={project.id}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                category={project.category}
                status={project.status}
                featured={project.featured}
                externalUrl={project.externalUrl}
                icon={getIconComponent(project.iconName)}
                image={project.image}
                metrics={project.metrics}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <SpotlightCard className="text-center space-y-6 p-8 sm:p-12 border-indigo-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Have a Vision You Want Engineered?
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Let’s collaborate to turn your next product, internal tool, or hardware system into a reliable competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Link href="/get-started">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 gap-2"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="glass" size="lg" className="rounded-full px-8">
                  Back to Home
                </Button>
              </Link>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
