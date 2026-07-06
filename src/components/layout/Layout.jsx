import { useEffect, useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()
  const prevPathname = useRef(pathname)

  useLayoutEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      window.scrollTo(0, 0)
    }
  }, [pathname])

  useEffect(() => {
    if (prevPathname.current === pathname) return
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
    return () => clearTimeout(timer)
  }, [pathname])

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
