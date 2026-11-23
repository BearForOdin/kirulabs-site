'use client'

import React from 'react'
import { Mail, Linkedin, Github, Sparkles } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SpotlightCard } from '@/components/spotlight-card'

export default function About() {
  const founders = [
    {
      id: 1,
      name: 'Selasi Dzeamesi',
      title: 'Co-Founder & CEO',
      bio: 'Visionary leader driving Kirulabs’ mission to engineer category-defining platforms and enterprise solutions across Africa and beyond.',
      image: '/ceo.jpg',
      socials: [
        { icon: Linkedin, link: '#' },
        { icon: Github, link: '#' },
        { icon: Mail, link: 'mailto:kirulabsofficial@gmail.com' },
      ],
    },
    {
      id: 2,
      name: 'David Mends',
      title: 'Software & Hardware Supervisor',
      bio: 'Systems architect overseeing full-stack software engineering, hardware prototyping, and the technical teams powering Kirulabs and siesie.app.',
      image: '/davidcrop.jpg',
      socials: [
        { icon: Linkedin, link: '#' },
        { icon: Github, link: '#' },
        { icon: Mail, link: 'mailto:kirulabsofficial@gmail.com' },
      ],
    },
    {
      id: 3,
      name: 'Paa Joe',
      title: 'DevOps & Finance',
      bio: 'Combines financial discipline with cloud DevOps reliability—keeping infrastructure resilient, scalable, and investor-ready.',
      image: '/paacrop.jpg',
      socials: [
        { icon: Linkedin, link: '#' },
        { icon: Github, link: 'https://github.com/Marrtian1' },
        { icon: Mail, link: 'mailto:kirulabsofficial@gmail.com' },
      ],
    },
    {
      id: 4,
      name: 'Emmanuel Billa',
      title: 'Community Manager & Brand Ambassador',
      bio: 'The voice of Kirulabs—bridging our engineering vision with customers, partners, and communities across Ghana.',
      image: '/emmacrop.jpg',
      socials: [
        { icon: Linkedin, link: 'https://linkedin.com/in/emmanuelbilla' },
        { icon: Github, link: 'https://github.com/emmanuelbilla' },
        { icon: Mail, link: 'mailto:immanuelbilla33@gmail.com' },
      ],
    },
  ]

  return (
    <div className="relative min-h-screen bg-[#04040a] text-foreground overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="fixed inset-x-0 top-0 h-[38rem] bg-radial-glow pointer-events-none z-0" />

      <Floating3DEasterEggs />
      <SiteNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 border border-indigo-400/30 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-indigo-300">
            <Sparkles size={13} />
            Dekiru Company Limited • Founded 2024
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Meet the <span className="gradient-accent">Engineers &amp; Builders</span>
            <br />
            Behind Kirulabs
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            United by a passion for technical rigor and design excellence, we build platforms like{' '}
            <a
              href="https://siesie.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 underline underline-offset-4"
            >
              siesie.app
            </a>{' '}
            and mission-critical systems for modern enterprises.
          </p>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((founder) => (
              <SpotlightCard
                key={founder.id}
                tilt
                className="group flex flex-col h-full p-5 sm:p-6"
              >
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/15 aspect-square bg-[#080914]">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {founder.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-indigo-400 mt-1 mb-3">
                  {founder.title}
                </p>
                <p className="text-sm text-zinc-300 flex-grow mb-5 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="flex gap-2 pt-3 border-t border-white/10">
                  {founder.socials.map((social, idx) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={idx}
                        href={social.link}
                        target={social.link.startsWith('http') ? '_blank' : undefined}
                        rel={social.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="glass-button-icon"
                      >
                        <Icon size={15} />
                      </a>
                    )
                  })}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <SpotlightCard className="space-y-5 p-8 sm:p-10 border-indigo-500/30">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Our Origin Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Built in Ghana for Global Standards
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Kirulabs (legally registered as Dekiru Company Limited) was founded in Ghana in 2024 to help organizations move from raw ideas to operational software and hardware systems in record time—eliminating the delays and fragmentation businesses suffer when coordinating multiple disconnected vendors.
            </p>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Operating at the intersection of software architecture, hardware IoT, and creative execution, we ship both client enterprise solutions and our own flagship ventures such as{' '}
              <a
                href="https://siesie.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 font-medium underline underline-offset-4"
              >
                siesie.app
              </a>
              .
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Our Core <span className="gradient-accent">Engineering Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Execution Excellence',
                description: 'We prioritize shipping verifiable, production-ready systems over slide-deck promises.',
              },
              {
                title: 'Speed with Precision',
                description: 'We iterate rapidly while holding strict standards for security, uptime, and UX craft.',
              },
              {
                title: 'Applied Innovation',
                description: 'We apply AI, escrow fintech, and IoT hardware to solve tangible everyday problems.',
              },
              {
                title: 'True Partnership',
                description: 'We embed alongside our clients as co-builders invested in their long-term growth.',
              },
              {
                title: 'Integrity & Trust',
                description: 'Transparency, accountability, and escrow-grade honesty guide every relationship.',
              },
              {
                title: 'Customer-Centricity',
                description: 'Every line of code is measured by the clarity and value it creates for end users.',
              },
            ].map((value, i) => (
              <SpotlightCard key={i} tilt className="p-6 space-y-2.5">
                <div className="text-xs font-mono text-indigo-400">0{i + 1}</div>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {value.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
