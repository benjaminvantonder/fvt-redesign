import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, MapPin, Calendar, Maximize } from 'lucide-react'
import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-semibold text-stone-900">
            Project Not Found
          </h1>
          <p className="mt-4 text-stone-500">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="mt-8">
            <Button to="/projects" showArrow>
              Back to Projects
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        image={project.thumbnail}
        url={`/projects/${project.slug}`}
      />

      <section className="pt-24 pb-8 sm:pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h1 className="font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                  {project.title}
                </h1>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-6 text-sm text-stone-500">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {project.year}
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-4 w-4" />
                  {project.area}
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-block rounded-full bg-stone-100 px-4 py-1.5 text-xs font-medium text-stone-600">
                  {project.category}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.images[0]}
                alt={project.title}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-serif text-2xl font-semibold text-stone-900">
                  About This Project
                </h2>
                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  {project.longDescription}
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <h3 className="font-serif text-lg font-semibold text-stone-900">
                  Project Details
                </h3>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-xs font-medium text-stone-400 uppercase">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-stone-700">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-stone-400 uppercase">
                      Year
                    </dt>
                    <dd className="mt-1 text-sm text-stone-700">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-stone-400 uppercase">
                      Area
                    </dt>
                    <dd className="mt-1 text-sm text-stone-700">{project.area}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-stone-400 uppercase">
                      Typology
                    </dt>
                    <dd className="mt-1 text-sm text-stone-700">{project.category}</dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {project.images.length > 1 && (
        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.images.slice(1).map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`${project.title} ${i + 2}`}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-stone-200 bg-stone-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-stone-900">
            Next Project
          </h2>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group mt-6 block overflow-hidden rounded-lg"
          >
            <div className="relative aspect-video overflow-hidden sm:aspect-[21/9]">
              <img
                src={nextProject.thumbnail}
                alt={nextProject.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-3 sm:p-6 md:p-8">
                <p className="text-[10px] font-medium text-stone-300 sm:text-xs sm:text-sm">
                  {nextProject.category}
                </p>
                <h3 className="mt-0.5 font-serif text-lg font-semibold text-white sm:text-xl sm:mt-1 sm:text-2xl sm:text-3xl">
                  {nextProject.title}
                </h3>
                <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-stone-300 transition-colors group-hover:text-white sm:mt-2 sm:gap-2 sm:text-sm">
                  View Project
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
