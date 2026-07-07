import { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()
  const { pathname, key } = location

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [key])

  useEffect(() => {
    const reset = () => window.scrollTo(0, 0)
    reset()
    const t1 = setTimeout(reset, 0)
    const t2 = setTimeout(reset, 100)
    window.addEventListener('popstate', reset)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      window.removeEventListener('popstate', reset)
    }
  }, [key])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
