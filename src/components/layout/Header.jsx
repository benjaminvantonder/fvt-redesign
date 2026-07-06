import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-stone-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded transition-colors ${
              scrolled ? 'bg-stone-900' : 'bg-white'
            }`}>
              <span className={`font-serif text-sm font-bold transition-colors ${
                scrolled ? 'text-white' : 'text-stone-900'
              }`}>FVT</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-serif text-lg font-semibold transition-colors ${
                scrolled ? 'text-stone-900' : 'text-white'
              }`}>
                FVT Architecture
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? scrolled
                        ? 'bg-stone-900 text-white'
                        : 'bg-white text-stone-900'
                      : scrolled
                        ? 'text-stone-600 hover:text-stone-900'
                        : 'text-stone-200 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex h-11 w-11 items-center justify-center rounded-md transition-colors lg:hidden ${
              scrolled
                ? 'text-stone-700 hover:bg-stone-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`overflow-hidden lg:hidden ${scrolled ? 'bg-white' : 'bg-stone-900'}`}
          >
            <div className="space-y-1 px-6 pb-6 pt-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? scrolled
                          ? 'bg-stone-900 text-white'
                          : 'bg-white text-stone-900'
                        : scrolled
                          ? 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                          : 'text-stone-300 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
