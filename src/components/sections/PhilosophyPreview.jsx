import ScrollReveal from '../ui/ScrollReveal'

export default function PhilosophyPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-[0.3em] text-stone-400 uppercase">
            Our Philosophy
          </p>
          <blockquote className="mt-8 font-serif text-3xl font-medium leading-relaxed text-stone-900 sm:text-4xl lg:text-5xl">
            &ldquo;A house is a machine for living in&rdquo;
          </blockquote>
          <p className="mt-6 text-base text-stone-500">
            &mdash; Le Corbusier
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-500">
            We believe that one&apos;s home, where they spend their most cherished moments
            and invest their precious resources, should be meticulously designed to cater
            to their specific needs and desires.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
