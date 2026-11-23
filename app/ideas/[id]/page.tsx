'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { getProjectById } from '@/lib/projects-data'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'

export default function IdeaDetailPage() {
  const params = useParams()
  const rawId = (params?.id as string) || ''
  const project = getProjectById(rawId)

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white">
        <SiteNavbar />
        <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center glass-card p-10 space-y-5">
            <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
            <p className="text-zinc-400 text-sm">
              The project you are looking for could not be found.
            </p>
            <Link href="/ideas">
              <Button className="rounded-full bg-white text-black hover:bg-zinc-200">
                Back to Projects
              </Button>
            </Link>
          </div>
        </section>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <Floating3DEasterEggs />
      <SiteNavbar />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <Link
              href="/ideas"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
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
                  className="rounded-full bg-white text-black hover:bg-zinc-200 font-medium gap-1.5"
                >
                  Visit {project.title}
                  <ArrowUpRight size={14} />
                </Button>
              </a>
            )}
          </div>

          <div className="glass-card p-8 sm:p-10 space-y-5">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              {project.category}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {project.title}
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="glass-card p-7 space-y-4">
            <h2 className="text-lg font-semibold text-white">Key Features</h2>
            <div className="space-y-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="text-zinc-400 shrink-0 mt-0.5" size={16} />
                  <p className="text-sm text-zinc-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-7 space-y-4">
            <h2 className="text-lg font-semibold text-white">Benefits</h2>
            <div className="space-y-3">
              {project.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="text-zinc-400 shrink-0 mt-0.5" size={16} />
                  <p className="text-sm text-zinc-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card text-center space-y-5 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-white">
              Interested in {project.title}?
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Get in touch with our team to discuss how we can deploy or customize this solution for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full bg-white text-black hover:bg-zinc-200 font-medium gap-1.5 px-6">
                    Visit {project.title}
                    <ArrowUpRight size={16} />
                  </Button>
                </a>
              )}
              <Link href={`/get-started?idea=${encodeURIComponent(project.title)}`}>
                <Button
                  variant={project.externalUrl ? 'glass' : 'default'}
                  className="rounded-full gap-1.5 px-6"
                >
                  Inquire Now
                  <ArrowRight size={16} />
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
