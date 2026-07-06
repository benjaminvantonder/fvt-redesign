import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative flex h-[85vh] min-h-[500px] items-center justify-center overflow-hidden sm:h-screen sm:min-h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
          alt="Modern architecture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm font-medium tracking-[0.3em] text-stone-300 uppercase">
            South African Architecture
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 font-serif text-3xl font-semibold text-white sm:text-5xl md:text-7xl lg:text-8xl"
        >
          FVT Architecture
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-4 max-w-xl text-base italic leading-relaxed text-stone-300 sm:text-lg"
        >
          &ldquo;A house is a machine for living in&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button to="/projects" variant="secondary" size="lg" showArrow className="border-white/30 text-white hover:bg-white hover:text-stone-900">
            Explore Our Work
          </Button>
          <Button to="/contact" variant="ghost" size="lg" className="text-stone-300 hover:text-white">
            Get in Touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-stone-400 uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 text-stone-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
