import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { site } from '../../data/site'

const footerLinks = {
  'Quick Links': [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/philosophy', label: 'Philosophy' },
  ],
  Services: [
    { to: '/services#residential', label: 'Residential' },
    { to: '/services#developer', label: 'Developer Services' },
    { to: '/services#drawing-bureau', label: 'Drawing Bureau' },
  ],
  Resources: [
    { to: '/resources', label: 'SACAP' },
    { to: '/resources', label: 'TUT Architecture' },
    { to: '/resources', label: 'Useful Links' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-white">
                <span className="font-serif text-sm font-bold text-stone-900">FVT</span>
              </div>
              <span className="font-serif text-lg font-semibold text-white">
                FVT Architecture
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              {site.description}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm text-stone-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-3 text-sm text-stone-400 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-stone-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {site.address.street}<br />
                  {site.address.city}, {site.address.province}<br />
                  {site.address.country}
                </span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-1 text-sm text-stone-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-800 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-stone-500">
              &copy; {new Date().getFullYear()} FVT Architecture. All rights reserved.
            </p>
            <p className="text-xs text-stone-500 italic">
              &ldquo;A house is a machine for living in&rdquo; &mdash; Le Corbusier
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
