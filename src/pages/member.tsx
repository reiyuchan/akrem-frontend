import {useState, useEffect} from 'react'
import Head from 'next/head'
import {RESET} from 'jotai/utils'
import {Login, Signup, ForgotPass} from '@/components'
import {useFormValidation} from '@/hooks/useFormValidation'
import {useUser, useUserCachedEmail, useUserToken} from '@/store/user'
import Link from 'next/link'
import {Urls} from '@/constants'

const Member = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(false)
  const [forgotPass, setForgotPass] = useState<boolean>(false)
  const {loginForm, registerForm, forgetPassForm} = useFormValidation()
  const [_, setToken] = useUserToken()
  const [__, setUser] = useUser()
  const [___, setCachedEmail] = useUserCachedEmail()

  useEffect(() => {
    setIsNewUser(sessionStorage.getItem('isNotNew') === 'false' ? true : false)
    setUser(RESET)
    setToken(RESET)
    setCachedEmail(RESET)
  }, [setUser, setToken, setCachedEmail])

  return (
    <div>
      <Head>
        <title>{`Akrem - Member`}</title>
      </Head>
      {!isNewUser ? (
        !forgotPass ? (
          <Login
            isNewUser={isNewUser}
            setIsNewUser={setIsNewUser}
            forgotPass={forgotPass}
            setForgotPass={setForgotPass}
            loginForm={loginForm}
          />
        ) : (
          <ForgotPass
            forgetPassForm={forgetPassForm}
            forgotPass={forgotPass}
            setForgotPass={setForgotPass}
          />
        )
      ) : (
        <Signup
          isNewUser={isNewUser}
          setIsNewUser={setIsNewUser}
          registerForm={registerForm}
        />
      )}
    </div>
  )
}

export default Member
