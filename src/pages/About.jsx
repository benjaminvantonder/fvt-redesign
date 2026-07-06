import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { site } from '../data/site'
import { site as siteData } from '../data/site'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about FVT Architecture - a South African practice dedicated to functional, people-centred residential architecture."
        url="/about"
      />

      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="About FVT"
              title="Architecture rooted in people"
              description="With the magnificent diversity found within our nation, every day presents an exhilarating challenge as we strive to meet the unique needs of our valued clients."
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div className="space-y-6 text-base leading-relaxed text-stone-600">
                <p>
                  FVT Architecture is a South African architectural practice with a deep
                  commitment to designing homes that serve the people who inhabit them.
                  Our work is grounded in the belief that architecture should be functional,
                  honest, and tailored to the unique contexts of our clients and their
                  environments.
                </p>
                <p>
                  Our clientele primarily consists of the general public, necessitating an
                  exceptional grasp of people skills. This aspect infuses the design process
                  with an irresistible allure, making each project all the more captivating.
                  Moreover, we also extend our services to small-scale developers operating
                  in the residential sector.
                </p>
                <p>
                  Additionally, we have an exciting drawing bureau exclusively for
                  architects, providing technical drawing support and construction
                  documentation services to fellow practices.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop"
                alt="Architecture studio"
                className="rounded-lg object-cover shadow-lg"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Values"
              title="What guides our practice"
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Function First',
                description:
                  'Every design decision starts with how the space will be used. Beautiful form follows purposeful function.',
              },
              {
                title: 'People-Centred',
                description:
                  'We listen deeply to understand our clients\' lives, ensuring every home reflects the people who inhabit it.',
              },
              {
                title: 'Contextual Design',
                description:
                  'We respond to site, climate, and culture — creating architecture that belongs where it stands.',
              },
              {
                title: 'Honest Materials',
                description:
                  'We celebrate the authentic character of materials — stone, timber, concrete — used with integrity.',
              },
              {
                title: 'South African Identity',
                description:
                  'Our work draws on the rich architectural heritage of South Africa while embracing contemporary innovation.',
              },
              {
                title: 'Sustainable Practice',
                description:
                  'We consider environmental impact through orientation, materials, and passive design strategies.',
              },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="rounded-lg border border-stone-200 bg-white p-6 sm:p-8">
                  <h3 className="font-serif text-lg font-semibold text-stone-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-500">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Team"
              title="The people behind the practice"
              description="A dedicated team of architects and designers passionate about creating meaningful spaces."
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Principal Architect', role: 'Design Director' },
              { name: 'Project Architect', role: 'Technical Lead' },
              { name: 'Architectural Technologist', role: 'Documentation' },
            ].map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto aspect-square w-48 overflow-hidden rounded-full bg-stone-200">
                    <img
                      src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-6 font-serif text-lg font-semibold text-stone-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Ready to start your project?"
              description="We'd love to hear about your plans. Let's discuss how we can bring your vision to life."
              align="center"
            />
            <div className="mt-8">
              <Button to="/contact" size="lg" showArrow>
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
