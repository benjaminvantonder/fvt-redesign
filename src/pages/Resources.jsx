import { ExternalLink } from 'lucide-react'
import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'

const resources = [
  {
    name: 'South African Council for the Architectural Profession (SACAP)',
    description:
      'The statutory body responsible for the registration of architectural professionals in South Africa. SACAP regulates the profession and ensures standards of practice.',
    url: 'https://www.sacapsa.com',
    category: 'Regulatory',
  },
  {
    name: 'TUT - Department of Architecture',
    description:
      'The Department of Architecture at Tshwane University of Technology, one of South Africa\'s leading architectural education institutions.',
    url: 'https://www.tut.ac.za',
    category: 'Education',
  },
  {
    name: 'South African Institute of Architects (SAIA)',
    description:
      'The representative body for registered architects in South Africa, promoting professional standards and architectural excellence.',
    url: 'https://www.saia.org.za',
    category: 'Professional Body',
  },
  {
    name: 'Green Building Council South Africa (GBCSA)',
    description:
      'Leading the transformation of the built environment to sustainability through green building certification and education.',
    url: 'https://www.gbcsa.org.za',
    category: 'Sustainability',
  },
  {
    name: 'National Home Builders Registration Council (NHBRC)',
    description:
      'The regulatory body for home builders in South Africa, responsible for the registration of home builders and enrolment of homes.',
    url: 'https://www.nhbrcoza.co.za',
    category: 'Regulatory',
  },
  {
    name: 'Architectural Digest',
    description:
      'International architecture and design publication providing inspiration and insight into contemporary architectural practice.',
    url: 'https://www.archdigest.com',
    category: 'Inspiration',
  },
]

export default function Resources() {
  return (
    <>
      <SEO
        title="Resources"
        description="Useful resources for architectural professionals and clients in South Africa — SACAP, TUT, SAIA, and more."
        url="/resources"
      />

      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Resources"
              title="Useful links and information"
              description="A curated collection of resources for clients and architectural professionals in South Africa."
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, i) => (
              <ScrollReveal key={resource.name} delay={i * 0.1}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-lg border border-stone-200 bg-white p-6 transition-all duration-300 hover:border-stone-900 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                      {resource.category}
                    </span>
                    <ExternalLink className="h-4 w-4 text-stone-400 transition-colors group-hover:text-stone-900" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-stone-900">
                    {resource.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-500">
                    {resource.description}
                  </p>
                  <div className="mt-4 text-sm font-medium text-stone-900 transition-colors group-hover:underline">
                    Visit Website &rarr;
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
