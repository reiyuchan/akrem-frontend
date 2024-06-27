import {Urls} from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, {FunctionComponent} from 'react'

export const MobileDownload: FunctionComponent = () => {
  return (
    <div className='flex md:flex-row flex-col w-full items-center mb-10'>
      <Image
        src={Urls.ANDROID_LOGO}
        width={400}
        height={400}
        alt='android_logo.png'
        className='p-10'
        draggable={false}
      />
      <div className='flex flex-col self-center items-center text-center w-full md:p-2 p-5 md:my-0 my-10 gap-2'>
        <h1 className='font-extrabold text-black text-4xl'>Download Our App</h1>
        <a href={Urls.DOWNLOAD_MOBILE_APP} download>
          <Image
            src={Urls.DOWNLOAD_FOR_ANDROID}
            width={250}
            height={250}
            alt='download_for_android.png'
          />
        </a>
      </div>
    </div>
  )
}
