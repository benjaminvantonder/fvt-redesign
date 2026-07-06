import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import Button from '../components/ui/Button'
import { services } from '../data/services'
import { Check } from 'lucide-react'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="FVT Architecture offers residential design, developer services, and a dedicated drawing bureau for architects across South Africa."
        url="/services"
      />

      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Comprehensive architectural solutions"
              description="From initial concept to final construction, we offer a full range of architectural services tailored to your needs."
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`border-t border-stone-200 py-24 sm:py-32 ${
            i % 2 === 0 ? 'bg-stone-50' : 'bg-white'
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'}>
                <p className="text-sm font-medium tracking-widest text-stone-500 uppercase">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-stone-500">
                  {service.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-900">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm text-stone-600">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button to="/contact" showArrow>
                    Discuss Your Project
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <img
                  src={`https://images.unsplash.com/photo-${
                    i === 0
                      ? '1600585154340-be6161a56a0c'
                      : i === 1
                      ? '1545324418-cc1a3fa10c00'
                      : '1503387762-592deb58ef4e'
                  }?w=800&h=600&fit=crop`}
                  alt={service.title}
                  className="rounded-lg object-cover shadow-lg"
                  loading="lazy"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-stone-900 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
              Not sure what you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-stone-400">
              Every project is unique. Let&apos;s have a conversation about your
              requirements and find the right solution together.
            </p>
            <div className="mt-8">
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                showArrow
                className="border-white/20 text-white hover:bg-white hover:text-stone-900"
              >
                Start a Conversation
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
