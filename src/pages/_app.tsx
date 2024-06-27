import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider as JotaiProvider} from 'jotai'
import {QueryClientProvider} from '@tanstack/react-query'
import {useAuth} from '@/hooks/useAuth'
import queryClient from '@/libs/react-query'
import {useEffect} from 'react'
import {Layout} from '@/components'

export default function App({Component, pageProps}: AppProps) {
  const interval = 1000 * 60 * 60 * 24
  const autoAuth = useAuth(interval)

  useEffect(() => {
    document.addEventListener('dragstart', e => {
      e.preventDefault()
    })
  }, [])

  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </JotaiProvider>
  )
}
