import {useRef, useEffect, FunctionComponent} from 'react'
import Image from 'next/image'
import {SubmitHandler, UseFormReturn} from 'react-hook-form'
import {Type, ErrorMessage, Auto, Label} from '@/constants'
import {Button, Form, Input, Modal} from '@/components'
import {useCounter} from '@/hooks/useCounter'
import {ForgetPassSchema} from '@/libs/zod'
import {useResetPassword} from '@/hooks/user/useResetPassword'
import {Urls} from '@/constants/urls.enum'

interface ForgotPassProps {
  forgotPass: boolean
  setForgotPass: React.Dispatch<React.SetStateAction<boolean>>
  forgetPassForm: UseFormReturn<ForgetPassSchema>
}

export const ForgotPass: FunctionComponent<ForgotPassProps> = ({
  forgotPass,
  setForgotPass,
  forgetPassForm,
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const counter = useCounter()
  const {
    register,
    handleSubmit,
    getValues,
    formState: {errors},
  } = forgetPassForm
  const userObject = getValues()
  const {isSuccess, isError, refetch} = useResetPassword(userObject)

  const handleFinalSubmit: SubmitHandler<ForgetPassSchema> = data => {
    refetch()
    btnRef.current?.setAttribute('disabled', '')
    counter.startCounter(10)
  }

  useEffect(() => {
    if (isSuccess) setTimeout(() => setForgotPass(!forgotPass), 2000)
    if (counter.counter === 0) {
      const disabled = btnRef.current?.hasAttribute('disabled')
      if (!disabled) return
      btnRef.current?.removeAttribute('disabled')
    }
  }, [counter.counter, forgotPass, setForgotPass, isSuccess])

  return (
    <>
      <Modal open={isSuccess} className='!text-blue-600 font-medium'>
        <div className='flex flex-col items-center justify-center gap-5'>
          <Image
            src={Urls.AKREM_LOGO_ICON}
            width={200}
            height={200}
            alt='AKREM'
          />
          <p>Check your e-mail!</p>
        </div>
      </Modal>
      <Form
        method='post'
        onSubmit={handleSubmit(handleFinalSubmit)}
        className='group form-switch bg-transparent shadow-none'>
        <h1 className='text-black self-center text-6xl font-extrabold my-5'>
          Forgot Password
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
          <div className='w-full px-5 mt-5'>
            <Input
              type={Type.EMAIL}
              placeholder={Label.EMAIL}
              title={ErrorMessage.EMAIL_CONSTRAINT}
              {...register('email')}
              errMessageProperty={errors.email?.message}
              required
              autoComplete={Auto.EMAIL_AUTO_COMPLETE}
              className='p-0.5 mb-2 md:w-96 w-full'
            />
            {isError && (
              <span className='text-red-500 pt-5'>{`This account doesn't exist or not verified!`}</span>
            )}
            <div className='flex flex-col items-center gap-5'>
              <span
                className='cursor-pointer hover:underline decoration-blue-600 underline-offset-3 text-blue-600 text-center pt-3'
                onClick={() => {
                  setForgotPass(!forgotPass)
                  forgetPassForm.reset()
                }}>
                Go back?
              </span>
              {counter.counter !== 0 && (
                <span className='text-blue-600 text-center'>
                  {counter.counter}
                </span>
              )}
              <Button
                btnRef={btnRef}
                className='w-40 disabled:opacity-50 text-slate-100 font-bold'
                type='submit'>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  )
}
