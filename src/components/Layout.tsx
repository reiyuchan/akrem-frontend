import {useRouter} from 'next/router'
import React, {FunctionComponent} from 'react'
import {Navbar, Footer, Loading} from '@/components'
import {Urls} from '@/constants'
import {useLoadingScreen} from '@/hooks/useLoadingScreen'

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({children}) => {
  const router = useRouter()
  const isLoading = useLoadingScreen()

  const checkNavbarPages = () => {
    const routes = [
      Urls.MEMBER_PAGE,
      Urls.RESET_PAGE,
      Urls.CONFIRM_PAGE,
      '/404',
    ]
    const hasNavbar = routes.map(route => {
      if (router.asPath.includes(route)) {
        return true
      } else {
        return false
      }
    })
    if (hasNavbar.includes(true)) {
      return true
    }
    return false
  }
  if (isLoading) return <Loading />
  else
    return (
      <>
        {checkNavbarPages() || isLoading ? null : <Navbar />}
        <main className='select-none bg-slate-100  overflow-x-scroll md:overflow-hidden min-h-screen'>
          {children}
        </main>
        <Footer />
      </>
    )
}
