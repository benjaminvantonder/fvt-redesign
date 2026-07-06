import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

export default function Philosophy() {
  return (
    <>
      <SEO
        title="Philosophy"
        description="FVT Architecture is guided by Le Corbusier's philosophy that a house is a machine for living in — functional, purposeful, and designed for how people truly live."
        url="/philosophy"
      />

      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-medium tracking-[0.3em] text-stone-500 uppercase">
              Our Philosophy
            </p>
            <blockquote className="mt-8 font-serif text-3xl font-medium leading-relaxed text-stone-900 sm:text-4xl lg:text-5xl">
              &ldquo;A house is a machine for living in&rdquo;
            </blockquote>
            <p className="mt-6 text-base text-stone-500">&mdash; Le Corbusier</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-stone-200 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div className="space-y-6 text-base leading-relaxed text-stone-600">
                <p>
                  Our inspirational slogan finds its roots in the philosophy of the visionary
                  French architect, Le Corbusier. As one of the most influential figures in
                  modern architecture, Le Corbusier championed the idea that homes should not
                  merely serve as shelters, but as efficient, functional living spaces tailored
                  to the needs of daily life.
                </p>
                <p>
                  He was a pioneer in reimagining urban living, introducing the concept of
                  high-density apartment-style housing &mdash; a revolutionary shift away from
                  traditional single-family homes. His innovative thinking helped lay the
                  groundwork for much of contemporary architectural practice.
                </p>
                <p>
                  When we employ this slogan, our aim is to underscore the paramount significance
                  of functional architecture. We firmly believe that one&apos;s home, where they
                  spend their most cherished moments and invest their precious resources, should be
                  meticulously designed to cater to their specific needs and desires.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=1000&fit=crop"
                alt="Functional architecture"
                className="rounded-lg object-cover shadow-lg"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="How we apply this philosophy"
              align="center"
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Listen',
                description:
                  'We begin by understanding how you live — your routines, your family, your aspirations. Architecture starts with people.',
              },
              {
                step: '02',
                title: 'Analyse',
                description:
                  'We study the site, climate, context, and constraints. Every design decision is informed by evidence and experience.',
              },
              {
                step: '03',
                title: 'Design',
                description:
                  'We create spaces that function beautifully — where form follows purpose and every detail serves a reason.',
              },
              {
                step: '04',
                title: 'Deliver',
                description:
                  'We guide your project through documentation, approvals, and construction, ensuring the design intent is realised.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-serif text-5xl font-bold text-stone-200">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-500">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Philosophy in Practice"
              title="See our work in action"
              description="Every project we undertake is an opportunity to apply our philosophy — creating spaces that truly serve the people who inhabit them."
              align="center"
            />
            <div className="mt-8">
              <Button to="/projects" variant="secondary" size="lg" showArrow>
                Explore Our Projects
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
