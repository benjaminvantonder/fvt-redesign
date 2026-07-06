import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { site } from '../data/site'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your enquiry. We will be in touch shortly.')
    setFormState({ name: '', email: '', phone: '', projectType: '', message: '' })
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with FVT Architecture. We'd love to discuss your project — residential, commercial, or development."
        url="/contact"
      />

      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Let's discuss your project"
              description="Whether you have a clear vision or are just starting to think about your project, we'd love to hear from you."
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-stone-700"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-stone-700"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-stone-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                        placeholder="+27 (0)00 000 0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-stone-700"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      >
                        <option value="">Select a project type</option>
                        <option value="new-home">New Home Design</option>
                        <option value="renovation">Renovation / Extension</option>
                        <option value="developer">Developer Project</option>
                        <option value="drawing-bureau">Drawing Bureau</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700"
                    >
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                      placeholder="Describe your project, site location, budget range, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
                  >
                    <Send className="h-4 w-4" />
                    Send Enquiry
                  </button>
                </form>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-stone-900">
                    Contact Details
                  </h3>
                  <div className="mt-4 space-y-4">
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-3 text-sm text-stone-600 transition-colors hover:text-stone-900"
                    >
                      <Mail className="h-4 w-4 text-stone-400" />
                      {site.email}
                    </a>
                    <a
                      href={`tel:${site.phone}`}
                      className="flex items-center gap-3 text-sm text-stone-600 transition-colors hover:text-stone-900"
                    >
                      <Phone className="h-4 w-4 text-stone-400" />
                      {site.phone}
                    </a>
                    <div className="flex items-start gap-3 text-sm text-stone-600">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
                      <span>
                        {site.address.street}<br />
                        {site.address.city}, {site.address.province}<br />
                        {site.address.country}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-8">
                  <h3 className="font-serif text-lg font-semibold text-stone-900">
                    Office Hours
                  </h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-3 text-sm text-stone-600">
                      <Clock className="h-4 w-4 text-stone-400" />
                      {site.hours.weekdays}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-stone-600">
                      <Clock className="h-4 w-4 text-stone-400" />
                      {site.hours.saturday}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-stone-600">
                      <Clock className="h-4 w-4 text-stone-400" />
                      {site.hours.sunday}
                    </div>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-8">
                  <h3 className="font-serif text-lg font-semibold text-stone-900">
                    Location
                  </h3>
                  <div className="mt-4 aspect-video overflow-hidden rounded-lg bg-stone-200">
                    <div className="flex h-full items-center justify-center text-sm text-stone-500">
                      Map placeholder
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
