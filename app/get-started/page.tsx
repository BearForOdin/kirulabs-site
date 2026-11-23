'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Floating3DEasterEggs } from '@/components/floating-3d-easter-eggs'
import { ArrowRight } from 'lucide-react'

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
    'siesie.app',
    'IT & Software Solutions',
    'Web & Mobile Development',
    'AI Automation',
    'Custom NFC Systems',
    'Enterprise Security Suite',
    'Data Analytics',
    'Networking Infrastructure',
    'Farming Hardware Systems',
    'Interactive Brand Experience',
    'Videography & Media',
    'Other',
  ]

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <Floating3DEasterEggs />
      <SiteNavbar />

      <main className="max-w-6xl mx-auto border-x border-border/70">
        <section className="pt-32 pb-20 px-6 sm:px-10 lg:px-14">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Project Inquiry
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Start Your Journey
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Tell us about your company and what you&apos;re looking to achieve.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <form
                action="https://formsubmit.co/kirulabsofficial@gmail.com"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New Kirulabs Request" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label htmlFor="companyName" className="block text-xs font-medium mb-1.5 text-foreground">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-secondary/60 border border-border text-foreground placeholder-muted-foreground focus:border-foreground focus:outline-none text-sm"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-xs font-medium mb-1.5 text-foreground">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-secondary/60 border border-border text-foreground placeholder-muted-foreground focus:border-foreground focus:outline-none text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium mb-1.5 text-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-secondary/60 border border-border text-foreground placeholder-muted-foreground focus:border-foreground focus:outline-none text-sm"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium mb-1.5 text-foreground">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-secondary/60 border border-border text-foreground placeholder-muted-foreground focus:border-foreground focus:outline-none text-sm"
                      placeholder="+233 55 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-medium mb-1.5 text-foreground">
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-secondary/60 border border-border text-foreground focus:border-foreground focus:outline-none text-sm"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-xs font-medium mb-1.5 text-foreground">
                    Project Details (optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-secondary/60 border border-border text-foreground placeholder-muted-foreground focus:border-foreground focus:outline-none text-sm resize-none"
                    placeholder="Describe what you need..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium gap-2 py-5"
                >
                  Send Request
                  <ArrowRight size={16} />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
