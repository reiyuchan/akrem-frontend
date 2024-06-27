import Image from 'next/image'
import React, {FunctionComponent} from 'react'
import {Urls} from '@/constants'

export const IntroSection: FunctionComponent = () => {
  return (
    <div className='flex md:flex-row flex-col w-full items-center'>
      <div className='flex flex-col self-center text-center w-full md:p-2 p-5 md:my-0 my-10 gap-2'>
        <h1 className='font-extrabold text-black text-4xl'>
          Your Health & Wellness Is Our Priority.
        </h1>
        <p className='text-black font-medium md:mb-0'>
          We are a company that deliver medicine for the ones who cant reach
          their medications for particular reasons.
        </p>
      </div>
      <Image
        src={Urls.DOCTOR_GIVE_TABLETS_PNG}
        width={400}
        height={400}
        alt='doctor_give_tablets.png'
        className='md:w-1/2'
        draggable={false}
      />
    </div>
  )
}
