import {Badge} from '@/components/Badge'
import {CartIcon} from '@/components/Cart/CartIcon'
import {Drawer} from '@/components/Drawer'
import {Urls} from '@/constants/urls.enum'
import {Menu} from 'lucide-react'
import Link from 'next/link'
import React, {FunctionComponent} from 'react'

interface MobileNavigationsProps {
  functions?: {
    handleMobileToggle: () => void
    handleSwitchCredentialsForm: (option: boolean) => void
  }
  options?: {
    userProfile: string
    userEmail: string
    totalProducts: string
  }
}

export const MobileNavigations: FunctionComponent<MobileNavigationsProps> = ({
  functions,
  options,
}) => {
  if (functions && options)
    return (
      <div className='md:hidden flex items-center space-x-5 ml-10 p-2 text-slate-100 '>
        <div className='md:hidden flex flex-row items-center p-2 cursor-pointer md:hover:[transform:scaleY(1.2)] md:active:transform-none md:focus:transform-none active:[transform:scaleY(1.2)]'>
          <Badge className='mt-5' text={options.totalProducts} />
          <CartIcon />
        </div>
        <Drawer
          btnStyle='open-btn fadein btn bg-transparent hover:bg-transparent border-blue-400 p-2'
          Icon={<Menu strokeWidth={1} color='black' />}
          handleMobileToggle={functions.handleMobileToggle}>
          <li className='[&>a]:hover:bg-blue-600'>
            <Link
              className='active:!bg-blue-500 focus:!bg-blue-600 active:!text-slate-100 focus:!text-slate-100'
              href={Urls.HOME_PAGE}>
              Home
            </Link>
          </li>
          <li className='[&>a]:hover:bg-blue-600'>
            <Link
              className='active:!bg-blue-700 focus:!bg-blue-700 active:!text-slate-100 focus:!text-slate-100'
              href={Urls.DONATE_PAGE}>
              Donate
            </Link>
          </li>
          <li className='[&>a]:hover:bg-blue-600'>
            <Link
              className='active:!bg-blue-700 focus:!bg-blue-700 active:!text-slate-100 focus:!text-slate-100'
              href={Urls.ORDER_PAGE}>
              Order
            </Link>
          </li>
          <li className='[&>a]:hover:bg-blue-600'>
            <Link
              className='active:!bg-blue-700 focus:!bg-blue-700 active:!text-slate-100 focus:!text-slate-100'
              href={Urls.CONTACT_PAGE}>
              Contact
            </Link>
          </li>
          {options.userEmail && (
            <li className='[&>a]:hover:bg-blue-600'>
              <Link
                href={{
                  pathname: Urls.PROFILE_PAGE,
                  query: {profile: options.userProfile},
                }}>
                {options.userEmail}
              </Link>
            </li>
          )}
          <li>
            <Link
              className='w-20 border-2 justify-center ml-2 font-extrabold active:!bg-blue-700 focus:!bg-blue-700 active:!text-slate-100 focus:!text-slate-100'
              onClick={() => functions.handleSwitchCredentialsForm(true)}
              href={Urls.MEMBER_PAGE}>
              {options.userEmail ? 'Logout' : 'Login'}
            </Link>
          </li>
          {!options.userEmail && (
            <li>
              <Link
                className='w-20 border-2 justify-center ml-2 bg-slate-100 text-black font-extrabold hover:bg-slate-300 active:!bg-blue-700  focus:!bg-blue-700 active:!text-slate-100 focus:!text-slate-100 whitespace-nowrap'
                onClick={() => functions.handleSwitchCredentialsForm(false)}
                href={Urls.MEMBER_PAGE}>
                {options.userEmail ? 'Logout' : 'Sign Up'}
              </Link>
            </li>
          )}
        </Drawer>
      </div>
    )
}
