import React, {FunctionComponent} from 'react'
import {Copyright} from 'lucide-react'
import Link from 'next/link'
import {Urls} from '@/constants'
import {useRouter} from 'next/router'

export const Footer: FunctionComponent = () => {
  const router = useRouter()

  return (
    <footer className='footer items-center p-4 bg-[#475A65] text-slate-100 '>
      <aside className='grid-flow-col items-center'>
        <Copyright />
        <p className='font-bold'>Copyright</p>
        <p>
          All content on this platform is copyrighted and owned by Akrem.
          Unauthorized use or reproduction is strictly prohibited. For
          inquiries, contact Akrem@tech.org.
        </p>
        {(router.asPath.includes(Urls.MEMBER_PAGE) ||
          router.asPath.includes('/404')) && (
          <Link
            className='border-2 border-slate-100 rounded-2xl p-1 active:bg-black'
            href={Urls.HOME_PAGE}>
            To Home Page
          </Link>
        )}
      </aside>
    </footer>
  )
}
