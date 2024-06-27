import {FunctionComponent, useState} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {Button, Form, Input, Loading, LoginServices, Modal} from '@/components'
import {Type, ErrorMessage, Auto, Label} from '@/constants'
import {useSessionStorage} from '@/hooks/useSessionStorage'
import {SubmitHandler, UseFormReturn} from 'react-hook-form'
import {useLogin} from '@/hooks/user/useLogin'
import {Urls} from '@/constants/urls.enum'
import {LoginSchema} from '@/libs/zod'

interface LoginProps {
  isNewUser: boolean
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>
  forgotPass: boolean
  setForgotPass: React.Dispatch<React.SetStateAction<boolean>>
  loginForm: UseFormReturn<LoginSchema>
}

export const Login: FunctionComponent<LoginProps> = ({
  isNewUser,
  setIsNewUser,
  forgotPass,
  setForgotPass,
  loginForm,
}) => {
  const [email, setEmail] = useState<string>('')
  const router = useRouter()
  const sessionStorage = useSessionStorage()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = loginForm
  const {mutate, isPending, error} = useLogin(router)

  const handleFinalSubmit: SubmitHandler<LoginSchema> = data => {
    mutate(data)
    setEmail(data.email)
    loginForm.reset()
  }

  if (isPending) return <Loading />
  else
    return (
      <>
        <Modal
          open={error?.response?.status === 403 ? true : false}
          userEmail={email}
        />
        <Form
          method='post'
          onSubmit={handleSubmit(handleFinalSubmit)}
          className='form-switch bg-transparent shadow-none'>
          <h1 className='text-black self-center text-6xl font-extrabold my-5'>
            Login
          </h1>
          <div className='w-full h-0.5 my-5 bg-gray-500 self-center bg-opacity-50'></div>
          <div className='flex md:flex-row flex-col m-auto p-5 mt-14'>
            <Image
              src={Urls.AKREM_BG_LOGO}
              width={400}
              height={400}
              alt='logo.png'
              className='self-start'
            />
            <div className='w-full px-5'>
              <div className='flex flex-col gap-10 mb-5'>
                <Input
                  type={Type.EMAIL}
                  placeholder={Label.EMAIL}
                  label={Label.EMAIL}
                  title={ErrorMessage.EMAIL_CONSTRAINT}
                  {...register('email')}
                  errMessageProperty={errors.email?.message}
                  required
                  autoComplete={Auto.EMAIL_AUTO_COMPLETE}
                  className='p-0.5 email w-full'
                />
                <Input
                  type={Type.PASSWORD}
                  placeholder={Label.PASSWORD}
                  label={Label.PASSWORD}
                  title={ErrorMessage.PASSWORD_CONSTRAINT}
                  {...register('password')}
                  errMessageProperty={errors.password?.message}
                  required
                  autoComplete={Auto.PASSWORD_AUTO_COMPLETE}
                  className='p-0.5 w-full'
                />
              </div>
              <div className='flex flex-col items-center gap-5'>
                <div className='w-10/12 h-0.5 my-5 bg-gray-500 self-center '></div>
                <LoginServices />
                <div className='flex flex-row gap-5'>
                  <span
                    className='cursor-pointer hover:underline decoration-blue-600 underline-offset-3 text-indigo-600 text-center'
                    onClick={() => {
                      setIsNewUser(!isNewUser)
                      loginForm.reset()
                      sessionStorage.setItem('isNotNew', isNewUser.toString())
                    }}>
                    Don&apos;t have an account?
                  </span>
                  <span
                    className='cursor-pointer hover:underline decoration-blue-600 underline-offset-3 text-indigo-600 text-center'
                    onClick={() => setForgotPass(!forgotPass)}>
                    Forgot your password?
                  </span>
                  {error?.response?.status === 401 ? (
                    <span className='text-red-500'>
                      {ErrorMessage.WRONG_CREDENTIALS}
                    </span>
                  ) : null}
                </div>
                <Button className='w-40 text-slate-100 font-bold' type='submit'>
                  Login
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </>
    )
}
