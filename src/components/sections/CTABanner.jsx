import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'

export default function CTABanner() {
  return (
    <section className="bg-stone-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-[0.3em] text-stone-400 uppercase">
            Start Your Project
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build something<br />remarkable together
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-stone-400">
            Whether you&apos;re planning a new home, a renovation, or a development,
            we&apos;d love to hear about your project.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              showArrow
              className="border-white/20 text-white hover:bg-white hover:text-stone-900"
            >
              Get in Touch
            </Button>
            <Button to="/projects" variant="ghost" size="lg" className="text-stone-400 hover:text-white">
              View Our Work
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
