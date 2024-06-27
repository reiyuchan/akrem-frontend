import {useEffect, useCallback, useState} from 'react'
import {useRouter} from 'next/router'
import {useLoading} from '@/store'

export const useLoadingScreen = () => {
  const [isLoading, setIsLoading] = useLoading()
  const router = useRouter()

  const handleLoadingScreen = useCallback(() => {
    const hanldeChangeStart = (url: string) => {
      url !== router.asPath && setIsLoading(true)
    }
    const hanldeChangeComplete = (url: string) => {
      url === router.asPath && setTimeout(() => setIsLoading(false))
    }
    router.events.on('routeChangeStart', hanldeChangeStart)
    router.events.on('routeChangeComplete', hanldeChangeComplete)
    router.events.on('routeChangeError', hanldeChangeComplete)
    return () => {
      router.events.off('routeChangeStart', hanldeChangeStart)
      router.events.off('routeChangeComplete', hanldeChangeComplete)
      router.events.off('routeChangeError', hanldeChangeComplete)
    }
  }, [router, setIsLoading])

  useEffect(() => {
    handleLoadingScreen()
  }, [handleLoadingScreen])

  return isLoading
}
