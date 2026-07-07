import ScrollReveal from '../ui/ScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { site } from '../../data/site'

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <SectionHeading
              eyebrow="About Us"
              title="Designing homes for how people actually live"
              description="With the magnificent diversity found within our nation, every day presents an exhilarating challenge as we strive to meet the unique needs of our valued clients."
            />
            <p className="mt-6 text-base leading-relaxed text-stone-500">
              Our clientele primarily consists of the general public, necessitating an
              exceptional grasp of people skills. This aspect infuses the design process
              with an irresistible allure, making each project all the more captivating.
            </p>
            <div className="mt-8">
              <Button to="/about" showArrow>
                Learn More About Us
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
                alt="FVT Architecture studio"
                className="rounded-lg object-cover shadow-lg"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-stone-900/90 p-4 shadow-xl backdrop-blur-sm sm:bottom-6 sm:left-6 sm:p-6">
                <p className="font-serif text-2xl font-bold text-white sm:text-3xl">15+</p>
                <p className="mt-0.5 text-xs text-stone-300 sm:mt-1 sm:text-sm">Years of experience</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
