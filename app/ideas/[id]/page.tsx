'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SpotlightCard } from '@/components/spotlight-card'
import { ProjectVisual } from '@/components/project-visual'
import { getProjectById } from '@/lib/projects-data'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

export default function IdeaDetailPage() {
  const params = useParams()
  const rawId = (params?.id as string) || ''
  const project = getProjectById(rawId)

  if (!project) {
    return (
      <div className="min-h-screen bg-[#04040a] text-foreground">
        <SiteNavbar />
        <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center glass-card p-10 space-y-6">
            <h1 className="text-3xl font-bold text-white">Project Not Found</h1>
            <p className="text-zinc-300">
              The project you are looking for could not be found. Explore all active Kirulabs projects below.
            </p>
            <Link href="/ideas">
              <Button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600">
                Back to All Projects
              </Button>
            </Link>
          </div>
        </section>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#04040a] text-foreground overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="fixed inset-x-0 top-0 h-[36rem] bg-radial-glow pointer-events-none z-0" />

      <Floating3DEasterEggs />
      <SiteNavbar />

      {/* Project Hero */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/ideas"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} className="text-indigo-400" />
              Back to Projects
            </Link>

            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white gap-1.5 shadow-[0_0_25px_rgba(99,102,241,0.4)]"
                >
                  Launch {project.title} Live
                  <ArrowUpRight size={15} />
                </Button>
              </a>
            )}
          </div>

          <SpotlightCard className="p-0 overflow-hidden border-indigo-500/30">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden border-b border-white/10 bg-[#070812]">
              <ProjectVisual projectId={project.id} />
              <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-2.5 z-20">
                <span className="rounded-full bg-black/80 backdrop-blur-md border border-white/15 px-3.5 py-1 text-xs font-mono text-indigo-300">
                  {project.category}
                </span>
                {project.status && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1 text-xs font-mono text-emerald-300 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {project.status}
                  </span>
                )}
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg font-medium text-indigo-300 mt-1.5">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Key Metrics Row */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white/[0.03] border border-white/10 p-4"
                    >
                      <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        {metric.label}
                      </div>
                      <div className="text-lg font-bold text-white mt-1">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <SpotlightCard className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs uppercase tracking-wider">
              <Sparkles size={14} />
              <span>System Capabilities</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Key Features</h2>
            <div className="space-y-3.5">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl bg-white/[0.02] border border-white/[0.06] p-3.5"
                >
                  <CheckCircle2 className="text-indigo-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm sm:text-base text-zinc-200">{feature}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Measured Impact</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Strategic Benefits</h2>
            <div className="space-y-3.5">
              {project.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl bg-white/[0.02] border border-white/[0.06] p-3.5"
                >
                  <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm sm:text-base text-zinc-200">{benefit}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          <SpotlightCard className="text-center space-y-6 p-8 sm:p-12 border-indigo-500/30">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Interested in {project.title}?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
              Whether you want to partner on {project.title} or commission a similar solution tailored to your organization, our engineering team is ready.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white gap-2 px-7"
                  >
                    Visit {project.title} Live
                    <ArrowUpRight size={18} />
                  </Button>
                </a>
              )}
              <Link href={`/get-started?idea=${encodeURIComponent(project.title)}`}>
                <Button
                  variant={project.externalUrl ? 'glass' : 'default'}
                  size="lg"
                  className="rounded-full gap-2 px-7"
                >
                  Inquire About This Solution
                  <ArrowRight size={18} />
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
