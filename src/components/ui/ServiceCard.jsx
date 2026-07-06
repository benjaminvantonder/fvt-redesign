import { Home, Building2, Ruler } from 'lucide-react'
import { motion } from 'framer-motion'

const icons = {
  home: Home,
  building: Building2,
  ruler: Ruler,
}

export default function ServiceCard({ service, index = 0 }) {
  const Icon = icons[service.icon] || Home

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-lg border border-stone-200 bg-white p-6 transition-all duration-300 hover:border-stone-900 hover:shadow-lg sm:p-8"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone-100 transition-colors duration-300 group-hover:bg-stone-900">
        <Icon className="h-6 w-6 text-stone-600 transition-colors duration-300 group-hover:text-white" />
      </div>
      <h3 className="mt-6 font-serif text-xl font-semibold text-stone-900">
        {service.shortTitle}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-stone-500">
        {service.description}
      </p>
      <ul className="mt-6 space-y-2">
        {service.details.slice(0, 4).map((detail) => (
          <li key={detail} className="flex items-start gap-2 text-sm text-stone-600">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
