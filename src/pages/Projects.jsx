import { useState } from 'react'
import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import ProjectCard from '../components/ui/ProjectCard'
import { projects, categories } from '../data/projects'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <SEO
        title="Projects"
        description="Explore the FVT Architecture portfolio - residential homes, developments, and commercial projects across South Africa."
        url="/projects"
      />

      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-medium tracking-[0.3em] text-stone-500 uppercase">
              Portfolio
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Our Work
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-stone-500">
              A selection of projects that reflect our commitment to functional,
              context-driven architecture across South Africa.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-lg text-stone-500">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
