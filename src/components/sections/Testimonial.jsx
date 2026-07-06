import { Quote } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

export default function Testimonial() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <ScrollReveal>
          <Quote className="mx-auto h-10 w-10 text-stone-300" />
          <blockquote className="mt-8 font-serif text-2xl font-medium leading-relaxed text-stone-700 sm:text-3xl">
            FVT Architecture understood our vision from the very first meeting. They
            designed a home that perfectly reflects how our family lives — functional,
            beautiful, and uniquely ours.
          </blockquote>
          <div className="mt-8">
            <p className="font-medium text-stone-900">The Naidoo Family</p>
            <p className="mt-1 text-sm text-stone-500">Umhlanga Residence Clients</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
