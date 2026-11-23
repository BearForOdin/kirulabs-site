'use client'

import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SlxInteractiveCanvas } from '@/components/slx-interactive-canvas'
import { SmartReveal } from '@/components/smart-reveal'

export default function About() {
  const founders = [
    {
      id: 1,
      name: 'Selasi Dzeamesi',
      title: 'Co-Founder & CEO',
      bio: "As a visionary leader in tech innovation, Selasi drives Kirulabs' mission to become a leading technology company.",
      image: '/ceo.jpg?v=2',
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
      bio: 'Overseeing software and hardware operations, David coordinates the engineering teams powering Kirulabs.',
      image: '/davidcrop.jpg?v=2',
      socials: [
        { icon: Linkedin, link: '#' },
        { icon: Github, link: '#' },
        { icon: Mail, link: 'mailto:kirulabsofficial@gmail.com' },
      ],
    },
    {
      id: 3,
      name: 'Jerry Etornam Kudaya',
      title: 'DevOps & Finance',
      bio: 'With a background in finance and DevOps, Jerry manages infrastructure reliability and key operational metrics.',
      image: '/paacrop.jpg?v=2',
      socials: [
        { icon: Linkedin, link: '#' },
        { icon: Github, link: 'https://github.com/Marrtian1' },
        { icon: Mail, link: 'mailto:kirulabsofficial@gmail.com' },
      ],
    },
  ]

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <SlxInteractiveCanvas />
      <Floating3DEasterEggs />
      <SiteNavbar />

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Hero Section */}
        <section className="pt-28 sm:pt-36 pb-8 sm:pb-12">
          <SmartReveal>
            <div className="max-w-2xl space-y-2.5">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Leadership &amp; Story
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Meet the <span className="text-muted-foreground">Team</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Leaders united by a passion for practical innovation and dependable engineering.
              </p>
            </div>
          </SmartReveal>
        </section>

        {/* Founders Grid (3 Cards) */}
        <section className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {founders.map((founder, i) => (
              <SmartReveal key={founder.id} delay={i * 90}>
                <div className="glass-card group flex flex-col h-full p-5 sm:p-6">
                  <div className="relative mb-5 overflow-hidden rounded-xl border border-border aspect-[4/5] bg-black">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mt-1 mb-3">
                    {founder.title}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground flex-grow mb-5 leading-relaxed">
                    {founder.bio}
                  </p>

                  <div className="flex gap-2 pt-3 border-t border-border">
                    {founder.socials.map((social, idx) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={idx}
                          href={social.link}
                          className="glass-button-icon"
                          aria-label={`${founder.name} social link`}
                        >
                          <Icon size={14} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </SmartReveal>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="py-10 sm:py-14 border-t border-border">
          <SmartReveal>
            <div className="glass-card p-6 sm:p-9 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Our Origin
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Kirulabs is a digital and technology solutions company founded in Ghana in 2024, built to help businesses move from ideas to operational systems in record time—eliminating the delays and fragmentation that organizations face when working with multiple disconnected vendors.
              </p>
            </div>
          </SmartReveal>
        </section>

        {/* Core Values Section */}
        <section className="py-10 sm:py-16 pb-20 border-t border-border">
          <SmartReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Our Core Values
            </h2>
          </SmartReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'Execution Excellence',
                description: 'We prioritize delivery and measurable results over promises.',
              },
              {
                title: 'Speed with Precision',
                description: 'We move fast, but never at the cost of quality.',
              },
              {
                title: 'Innovation',
                description: 'We apply practical technology to solve real business problems.',
              },
              {
                title: 'Collaboration',
                description: 'We work closely with clients as long-term partners.',
              },
              {
                title: 'Integrity',
                description: 'We operate with transparency, honesty, and accountability.',
              },
              {
                title: 'Customer-Centricity',
                description: 'We build solutions around the real goals of our clients.',
              },
            ].map((value, i) => (
              <SmartReveal key={i} delay={i * 60}>
                <div className="glass-card p-5 sm:p-6 space-y-2 h-full">
                  <div className="text-xs font-mono text-muted-foreground">0{i + 1}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </SmartReveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
