import {Urls} from '@/constants'
import {CodeXml, ShieldX} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen gap-3'>
      <ShieldX className='text-red-600' size={200} />
      <p className='font-bold text-4xl text-red-600'>404</p>
      <CodeXml size={100} color='black' />
      <Link
        href={Urls.HOME_PAGE}
        className='text-black font-bold text-2xl hover:cursor-pointer hover:underline hover:underline-offset-4 active:border-2 active:border-black active:rounded-2xl active:no-underline active:bg-black active:text-slate-100'>
        Go Back To Home
      </Link>
    </div>
  )
}

export default NotFound
