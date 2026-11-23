'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { ArrowRight, ArrowUpRight, Zap, Shield, Rocket } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      {/* 4D Purple Floating Easter Egg Objects */}
      <Floating3DEasterEggs />

      {/* Clean Minimal Navbar */}
      <SiteNavbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <img
              src="/kiru-logo.png"
              alt="Kirulabs Logo"
              className="h-32 sm:h-40 w-auto mx-auto object-contain"
            />

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Launch Faster.{' '}
              <span className="text-zinc-400">Operate Smarter.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Kirulabs exists to simplify technology and amplify growth. We create smart, scalable solutions that help businesses run efficiently, innovate confidently, and scale sustainably.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link href="/ideas">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-black hover:bg-zinc-200 font-medium px-7 gap-2"
                >
                  Explore Projects
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/get-started">
                <Button
                  variant="glass"
                  size="lg"
                  className="rounded-full px-7"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="glass-card p-7">
              <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-white">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Comprehensive Solutions
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We cover every aspect of IT, software, and digital execution so you don&apos;t need multiple vendors.
              </p>
            </div>

            <div className="glass-card p-7">
              <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-white">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Error-Free Systems
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Our mission is to make work more planned, efficient, and less prone to mistakes.
              </p>
            </div>

            <div className="glass-card p-7 sm:col-span-2 md:col-span-1">
              <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-white">
                <Rocket size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Future Ready
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We combine creativity with technical expertise to deliver solutions that stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: siesie.app */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Featured Project
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  siesie.app
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  A home and business services marketplace built by Kirulabs connecting households and offices in Ghana with ID-verified professionals, upfront pricing, and escrow payment protection.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="https://siesie.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-zinc-200 font-medium px-6 gap-1.5">
                    Visit siesie.app
                    <ArrowUpRight size={16} />
                  </Button>
                </a>
                <Link href="/ideas/siesie-app">
                  <Button
                    variant="glass"
                    className="w-full sm:w-auto rounded-full px-6"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Kirulabs */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why Choose Kirulabs
            </h2>
            <p className="text-base text-zinc-400 max-w-xl mx-auto">
              We offer practical, reliable technology solutions for modern enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'All-in-One Tech Partner',
                desc: 'We provide complete IT and digital solutions under one roof, from software development to creative design and videography.',
              },
              {
                title: 'Error-Free Efficiency',
                desc: 'Our systems are built to make work easier, more organized, and less prone to mistakes, ensuring smooth operations for enterprises.',
              },
              {
                title: 'Creative + Technical Expertise',
                desc: 'We blend technical problem-solving with creative execution to give your brand a clear, professional edge.',
              },
              {
                title: 'Future-Driven Innovation',
                desc: 'At Kirulabs, we don’t just solve today’s problems—we design solutions that prepare your business for tomorrow’s growth.',
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-7">
                <h3 className="text-xl font-semibold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card text-center space-y-5 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Contact us today to discover how Kirulabs can support your business with reliable software and smart systems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link href="/get-started">
                <Button className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-zinc-200 font-medium px-7 gap-2">
                  Get Started
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="glass" className="w-full sm:w-auto rounded-full px-7">
                  About Us
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
