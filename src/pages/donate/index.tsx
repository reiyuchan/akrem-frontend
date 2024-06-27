import {DonationList, MedicineData} from '@/components'
import {Urls} from '@/constants'
import {useImageEmpty} from '@/store/donation'
import {useUserToken} from '@/store/user'
import {RESET} from 'jotai/utils'
import Head from 'next/head'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'

const Donate = () => {
  const [, setImageEmpty] = useImageEmpty()
  const router = useRouter()
  const [token] = useUserToken()

  useEffect(() => {
    setImageEmpty(RESET)
  }, [setImageEmpty])

  useEffect(() => {
    if (token.includes('')) {
      router.push(Urls.MEMBER_PAGE)
      return
    }
  }, [router, token])

  return (
    <>
      <Head>
        <title>{`Akrem - Donate`}</title>
      </Head>
      <MedicineData />
      <DonationList />
    </>
  )
}

export default Donate
