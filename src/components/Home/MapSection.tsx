import Link from 'next/link'
import React, {FunctionComponent} from 'react'
import {Button} from '@/components'
import {Urls} from '@/constants/urls.enum'

export const MapSection: FunctionComponent = () => {
  return (
    <div className='flex md:flex-row flex-col items-center bg-[url(/map_bg.png)] w-full md:h-screen bg-cover bg-no-repeat bg-center'>
      <div className='text-slate-100 bg-black/50 backdrop-brightness-75 w-full h-full flex flex-col justify-center text-center gap-2 px-10 py-5'>
        <h1 className='font-extrabold text-6xl w-96 '>Search</h1>
        <h2 className='font-bold text-2xl w-96'>From Your Home</h2>
        <p className='text-center font-medium w-96'>
          Our service provide for the user to donate from home which make the
          donation easier for the user.
        </p>
        <Button className='text-slate-100 font-bold w-40 mt-5 ml-28'>
          <Link href={Urls.BOXES}>Available boxes</Link>
        </Button>
      </div>
    </div>
  )
}
