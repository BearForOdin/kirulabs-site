'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { SpotlightCard } from '@/components/spotlight-card'
import { ArrowRight, Mail, Phone, Building2, Sparkles } from 'lucide-react'

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    service: '',
    description: '',
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const idea = params.get('idea') || ''
    if (idea) {
      setFormData((prev) => ({
        ...prev,
        service: idea,
      }))
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const serviceOptions = [
    'siesie.app Partnership / Enterprise Maintenance',
    'IT & Software Solutions',
    'Web & Mobile Platform Development',
    'AI & Workflow Automation',
    'Custom Enterprise NFC Systems',
    'Enterprise Security Suite',
    'Data Analytics & BI Dashboards',
    'Resilient Networking Infrastructure',
    'Smart AgriTech & Farming Hardware',
    'Interactive 3D Brand Experiences',
    'Videography & Digital Media',
    'Other',
  ]

  return (
    <div className="relative min-h-screen bg-[#04040a] text-foreground overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="fixed inset-x-0 top-0 h-[36rem] bg-radial-glow pointer-events-none z-0" />

      <Floating3DEasterEggs />
      <SiteNavbar />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-indigo-300">
              <Sparkles size={12} />
              Project Discovery
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Start Your <span className="gradient-accent">Journey</span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-300">
              Tell us about your organization and what you’re looking to build. Our engineering team responds within 24 hours.
            </p>
          </div>

          <SpotlightCard className="p-6 sm:p-10 border-indigo-500/30">
            <form
              action="https://formsubmit.co/kirulabsofficial@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="New Kirulabs Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium mb-2 text-zinc-200">
                  <Building2 className="inline mr-2 text-indigo-400" size={16} />
                  Company or Organization Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-zinc-500 focus:border-indigo-400 focus:outline-none smooth-all text-sm sm:text-base"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium mb-2 text-zinc-200">
                  Contact Person *
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-zinc-500 focus:border-indigo-400 focus:outline-none smooth-all text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-zinc-200">
                    <Mail className="inline mr-2 text-indigo-400" size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-zinc-500 focus:border-indigo-400 focus:outline-none smooth-all text-sm sm:text-base"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-zinc-200">
                    <Phone className="inline mr-2 text-indigo-400" size={16} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-zinc-500 focus:border-indigo-400 focus:outline-none smooth-all text-sm sm:text-base"
                    placeholder="+233 (0) 55 123 4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-zinc-200">
                  What solution are you interested in? *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl grey border border-white/15 text-white focus:border-indigo-400 focus:outline-none smooth-all text-sm sm:text-base"
                >
                  <option value="">Select a solution...</option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2 text-zinc-200">
                  Project Scope &amp; Objectives (optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-zinc-500 focus:border-indigo-400 focus:outline-none smooth-all text-sm sm:text-base resize-none"
                  placeholder="Describe your timeline, goals, and any specific requirements..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold gap-2 py-6 shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                Send Request
                <ArrowRight size={18} />
              </Button>
            </form>
          </SpotlightCard>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
