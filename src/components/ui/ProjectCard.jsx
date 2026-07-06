import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group relative block overflow-hidden rounded-lg bg-stone-100"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium tracking-wider text-stone-300 uppercase">
                {project.category}
              </p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-stone-300">
                {project.location}
              </p>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
