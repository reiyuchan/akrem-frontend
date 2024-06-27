import {FunctionComponent, useState} from 'react'
import {Type, ErrorMessage, Auto, Label} from '@/constants'
import Image from 'next/image'
import {
  Button,
  Form,
  Input,
  Loading,
  LoginServices,
  Modal,
  Checkbox,
} from '@/components'
import {useSessionStorage} from '@/hooks/useSessionStorage'
import {SubmitHandler, UseFormReturn} from 'react-hook-form'
import {SignUpSchema} from '@/libs/zod'
import {useRegister} from '@/hooks/user/useRegister'
import {Urls} from '@/constants/urls.enum'
import classnames from '@/libs/classnames'

interface SignupProps {
  isNewUser: boolean
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>
  registerForm: UseFormReturn<SignUpSchema>
}

export const Signup: FunctionComponent<SignupProps> = ({
  isNewUser,
  setIsNewUser,
  registerForm,
}) => {
  const [email, setEmail] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)
  const sessionStorage = useSessionStorage()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = registerForm
  const {mutate, isSuccess, isPending, error} = useRegister()

  const handleFinalSubmit: SubmitHandler<SignUpSchema> = data => {
    mutate(data)
    setEmail(data.email)
    registerForm.reset()
    setChecked(false)
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked)
  }

  const buttonStyle = classnames('w-40 font-bold text-slate-100', {
    'group-invalid:pointer-events-none group-invalid:opacity-50': !checked,
  })

  if (isPending) return <Loading />
  else
    return (
      <>
        <Modal open={isSuccess} setIsNewUser={setIsNewUser} userEmail={email} />
        <Form
          method='post'
          onSubmit={handleSubmit(handleFinalSubmit)}
          className='group form-switch bg-transparent shadow-none'>
          <h1 className='text-black self-center text-6xl font-extrabold my-5'>
            Sign Up
          </h1>
          <div className='w-full h-0.5 my-5 bg-gray-500 self-center bg-opacity-50'></div>
          <div className='flex md:flex-row flex-col m-auto p-5 mt-14'>
            <Image
              src={Urls.AKREM_BG_LOGO}
              width={400}
              height={400}
              alt='logo.png'
              className='self-start mb-5 md:mb-0'
            />
            <div className='w-full px-5'>
              <div className='flex flex-col gap-10 mb-5'>
                <Input
                  type={Type.TEXT}
                  placeholder={Label.FIRST_NAME}
                  title={ErrorMessage.FIRST_NAME_CONSTRAINT}
                  {...register('firstName')}
                  errMessageProperty={errors.firstName?.message}
                  required
                  className='p-0.5 w-full'
                />
                <Input
                  type={Type.TEXT}
                  placeholder={Label.LAST_NAME}
                  title={ErrorMessage.LAST_NAME_CONSTRAINT}
                  errMessageProperty={errors.lastName?.message}
                  {...register('lastName')}
                  required
                  className='p-0.5 w-full'
                />
                <Input
                  type={Type.EMAIL}
                  placeholder={Label.EMAIL}
                  title={ErrorMessage.EMAIL_CONSTRAINT}
                  {...register('email')}
                  errMessageProperty={errors.email?.message}
                  required
                  autoComplete={Auto.EMAIL_AUTO_COMPLETE}
                  className='p-0.5 w-full'
                />
                <Input
                  type={Type.PASSWORD}
                  placeholder={Label.PASSWORD}
                  title={ErrorMessage.PASSWORD_CONSTRAINT}
                  {...register('password')}
                  errMessageProperty={errors.password?.message}
                  required
                  autoComplete={Auto.PASSWORD_AUTO_COMPLETE}
                  className='p-0.5 w-full'
                />
                <Input
                  type={Type.PASSWORD}
                  placeholder={Label.CONFIRM_PASSWORD}
                  {...register('confirmPassword')}
                  errMessageProperty={errors.confirmPassword?.message}
                  required
                  autoComplete={Auto.PASSWORD_AUTO_COMPLETE}
                  className='p-0.5 w-full'
                />
              </div>
              <div className='flex flex-col items-center gap-5'>
                <div className='w-10/12 h-0.5 my-5 bg-gray-500 self-center '></div>
                <LoginServices />
                <span
                  className='cursor-pointer hover:underline decoration-blue-600 underline-offset-3 text-blue-600 text-center'
                  onClick={() => {
                    setIsNewUser(!isNewUser)
                    registerForm.reset()
                    sessionStorage.setItem('isNotNew', isNewUser.toString())
                  }}>
                  Already have an account?
                </span>
                {error?.response?.status === 409 ? (
                  <span className='text-red-500'>
                    {ErrorMessage.EMAIL_EXISTS}
                  </span>
                ) : null}
                <Checkbox
                  onChange={handleCheckbox}
                  textPosition='right'
                  text={Label.AGREE_TO_TERMS}
                />
                <Button type='submit' className={buttonStyle}>
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </>
    )
}
