'use client'

import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'

export default function About() {
  const founders = [
    {
      id: 1,
      name: 'Selasi Dzeamesi',
      title: 'Co-Founder & CEO',
      bio: "As a visionary leader in tech innovation, Selasi drives Kirulabs' mission to become a leading technology company.",
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
      bio: 'Overseeing software and hardware operations, David coordinates the engineering teams powering Kirulabs.',
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
      bio: 'With a background in finance and DevOps, Paa manages infrastructure reliability and key operational metrics.',
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
      bio: 'Emmanuel communicates the vision of Kirulabs to our clients, stakeholders, and partner communities.',
      image: '/emmacrop.jpg',
      socials: [
        { icon: Linkedin, link: 'https://linkedin.com/in/emmanuelbilla' },
        { icon: Github, link: 'https://github.com/emmanuelbilla' },
        { icon: Mail, link: 'mailto:immanuelbilla33@gmail.com' },
      ],
    },
  ]

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <Floating3DEasterEggs />
      <SiteNavbar />

      <main className="max-w-6xl mx-auto border-x border-border/70">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6 sm:px-10 lg:px-14 border-b border-border/80">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Leadership &amp; Story
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Meet the <span className="text-muted-foreground">Team</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Leaders united by a passion for practical innovation and dependable engineering.
            </p>
          </div>
        </section>

        {/* Founders Grid */}
        <section className="py-14 px-6 sm:px-10 lg:px-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="glass-card flex flex-col h-full p-5"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl border border-border aspect-square bg-secondary">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {founder.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 mb-3">
                  {founder.title}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground flex-grow mb-4 leading-relaxed">
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
                      >
                        <Icon size={14} />
                      </a>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 px-6 sm:px-10 lg:px-14 border-t border-border/80 bg-secondary/20">
          <div className="max-w-3xl">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Our Origin
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Kirulabs is a digital and technology solutions company founded in Ghana in 2024, built to help businesses move from ideas to operational systems in record time—eliminating the delays and fragmentation that organizations face when working with multiple disconnected vendors.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We operate at the intersection of technology, creativity, and business execution, building client platforms as well as our own products like{' '}
                <a
                  href="https://siesie.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium underline underline-offset-4"
                >
                  siesie.app
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 px-6 sm:px-10 lg:px-14 border-t border-border/80">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              <div key={i} className="glass-card p-6 space-y-2">
                <div className="text-xs font-mono text-muted-foreground">0{i + 1}</div>
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
