import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import React, {FunctionComponent} from 'react'
import {Button} from '@/components'
import {Urls} from '@/constants'

export const DonateSection: FunctionComponent = () => {
  const router = useRouter()

  return (
    <div className='bg-[#DAE3EE] flex md:flex-row flex-col items-center'>
      <Image
        src={Urls.Home_PNG}
        width={500}
        height={500}
        alt='home_picture.png'
        draggable={false}
      />
      <div className='text-black w-full flex flex-col items-center gap-2 p-5'>
        <h1 className='font-extrabold text-6xl text-center'>Donate</h1>
        <h2 className='font-bold text-2xl text-center'>From Your Home</h2>
        <p className='text-center font-medium'>
          Our service provide for the user to donate from home which make the
          donation easier for the user.
        </p>
        <Button className='text-slate-100 font-bold w-40 mt-5'>
          <Link href={Urls.DONATE_PAGE}>Donate now</Link>
        </Button>
      </div>
    </div>
  )
}
