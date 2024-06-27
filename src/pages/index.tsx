import {useEffect} from 'react'
import Head from 'next/head'
import {RESET} from 'jotai/utils'
import {
  Loading,
  IntroSection,
  DonateSection,
  MapSection,
  MobileDownload,
} from '@/components'
import {useGetUserData} from '@/hooks/user/useGetUserData'
import {useUserCachedEmail, useUserToken} from '@/store/user'

const Home = () => {
  const [_, setCachedEmail] = useUserCachedEmail()
  const [token] = useUserToken()
  const {data, isPending, refetch} = useGetUserData(token[0] || '')

  useEffect(() => {
    if (token.length === 2) refetch()
    setCachedEmail(data?.data.email || RESET)
    sessionStorage.removeItem('isNotNew')
  }, [setCachedEmail, data?.data.email, refetch, token])

  if (isPending && !token.includes('')) <Loading />
  else
    return (
      <div className='flex flex-col flex-wrap'>
        <Head>
          <title>{`Akrem - Home`}</title>
        </Head>
        <ul className='slide'>
          <li>
            <IntroSection />
          </li>
          <li>
            <DonateSection />
          </li>
          <li>
            <MapSection />
          </li>
          <li>
            <MobileDownload />
          </li>
        </ul>
      </div>
    )
}

export default Home
