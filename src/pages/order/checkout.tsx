import React, {useEffect} from 'react'
import {PackageCheck} from 'lucide-react'
import {useRouter} from 'next/router'
import {Urls} from '@/constants'

const Checkout = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push(Urls.HOME_PAGE), 3000)
  }, [router])
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <PackageCheck size={200} className='text-green-500' />
      <h1 className='text-green-500 font-bold text-4xl'>Order Confirmed</h1>
    </div>
  )
}

export default Checkout
