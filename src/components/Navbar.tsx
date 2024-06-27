import {FunctionComponent} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Badge, CartIcon, MobileNavigations} from '@/components'
import {useCart} from '@/store/cart'
import {useUserCachedEmail} from '@/store/user'
import {Urls} from '@/constants'
import {useSessionStorage} from '@/hooks/useSessionStorage'

export const Navbar: FunctionComponent = () => {
  const [userEmail] = useUserCachedEmail()
  const userProfile = userEmail && userEmail.split('@')[0]
  const sessionStorage = useSessionStorage()
  const [cart, setCart] = useCart()

  const totalProducts = cart.length.toString()

  const handleMobileToggle = () => {
    const openBtn = document.querySelector('.open-btn') as HTMLDivElement
    openBtn.classList.toggle('fadein')
  }

  const mobileOptions = {
    userProfile,
    userEmail,
    totalProducts,
  }

  const handleSwitchCredentialsForm = (option: boolean) => {
    sessionStorage.setItem('isNotNew', option.toString())
  }

  return (
    <nav className='sticky top-0 z-30 '>
      <div
        className={`select-none flex h-16 justify-between font-medium lg:text-xl w-full bg-slate-300/95 backdrop-brightness-75 hover:underline-offset-4 cursor-default border-b border-gray-300`}>
        <div className='flex gap-5 text-blue-600'>
          <ul className='hidden md:flex p-4 gap-5 uppercase'>
            <li className='hover:cursor-pointer'>
              <Link
                className='hover:border-b-2 border-blue-600 hover:[transform:scale(1.1)] inline-flex h-7'
                href={Urls.HOME_PAGE}>
                Home
              </Link>
            </li>
            <li className='hover:cursor-pointer'>
              <Link
                className='hover:border-b-2 border-blue-600 hover:[transform:scale(1.1)] inline-flex h-7'
                href={Urls.DONATE_PAGE}>
                Donate
              </Link>
            </li>
            <li className='hover:cursor-pointer'>
              <Link
                className='hover:border-b-2 border-blue-600 hover:[transform:scale(1.1)] inline-flex h-7'
                href={Urls.ORDER_PAGE}>
                Order
              </Link>
            </li>
            <li className='hover:cursor-pointer'>
              <Link
                className='hover:border-b-2 border-blue-600 hover:[transform:scale(1.1)] inline-flex h-7'
                href={Urls.CONTACT_PAGE}>
                Contact
              </Link>
            </li>
          </ul>
          <Link
            className='self-center items-center flex flex-row gap-2 px-3 md:px-0 md:py-2 md:mt-1 md:mb-1'
            href={Urls.HOME_PAGE}>
            <Image
              src={Urls.AKREM_LOGO_ICON}
              width={50}
              height={50}
              alt='logo.png'
            />
            <Image
              src={Urls.AKREM_LOGO_TEXT}
              width={100}
              height={100}
              alt='logo.png'
              className='hover:border-b-2 border-blue-600 py-1 '
            />
          </Link>
        </div>
        <div className='flex items-center gap-3'>
          <div className='hidden md:flex flex-row items-center cursor-pointer md:hover:[transform:scaleY(1.2)] md:active:transform-none md:focus:transform-none active:[transform:scaleY(1.2)]'>
            <Badge className='mt-5' text={totalProducts} />
            <CartIcon />
          </div>
          <ul className='list-none md:flex hidden items-center gap-2 p-2'>
            {userEmail && (
              <li className='hover:underline hover:cursor-pointer text-blue-600 hover:scale-105'>
                <Link
                  href={{
                    pathname: Urls.PROFILE_PAGE,
                    query: {profile: userProfile},
                  }}>
                  {userEmail}
                </Link>
              </li>
            )}
            <li className='uppercase'>
              <Link
                className='text-base border-2 p-1 rounded-xl  text-blue-600 font-bold border-blue-600  hover:[transform:scale(1.1)] inline-flex'
                onClick={() => handleSwitchCredentialsForm(true)}
                href={'/member'}>
                {userEmail ? 'Logout' : 'Login'}
              </Link>
            </li>
            {!userEmail && (
              <li className='uppercase'>
                <Link
                  className='text-base border-2 p-1 rounded-xl  text-slate-100 font-bold border-blue-600 bg-blue-600  hover:[transform:scale(1.1)] inline-flex'
                  onClick={() => handleSwitchCredentialsForm(false)}
                  href={Urls.MEMBER_PAGE}>
                  {'Sign Up'}
                </Link>
              </li>
            )}
          </ul>
        </div>
        <MobileNavigations
          functions={{handleMobileToggle, handleSwitchCredentialsForm}}
          options={mobileOptions}
        />
      </div>
    </nav>
  )
}
