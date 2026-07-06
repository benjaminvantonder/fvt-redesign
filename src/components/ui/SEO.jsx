import { Helmet } from 'react-helmet-async'
import { site } from '../../data/site'

export default function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
}) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`
  const metaDescription = description || site.description
  const canonicalUrl = url ? `https://fvt.co.za${url}` : 'https://fvt.co.za'
  const ogImage = image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=630&fit=crop'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={site.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ArchitecturalService',
    name: site.name,
    description: site.description,
    url: 'https://fvt.co.za',
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      addressCountry: 'ZA',
      postalCode: site.address.postal,
    },
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    slogan: site.tagline,
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
