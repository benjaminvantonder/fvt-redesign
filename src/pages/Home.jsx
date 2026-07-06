import SEO from '../components/ui/SEO'
import Hero from '../components/sections/Hero'
import AboutPreview from '../components/sections/AboutPreview'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import PhilosophyPreview from '../components/sections/PhilosophyPreview'
import ServicesOverview from '../components/sections/ServicesOverview'
import Testimonial from '../components/sections/Testimonial'
import CTABanner from '../components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <SEO
        title="South African Architectural Practice"
        description="FVT Architecture - Residential design, developer services, and functional architecture across South Africa. A house is a machine for living in."
        url="/"
      />
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <PhilosophyPreview />
      <ServicesOverview />
      <Testimonial />
      <CTABanner />
    </>
  )
}
