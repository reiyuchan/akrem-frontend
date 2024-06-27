import {useEffect} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {SubmitHandler} from 'react-hook-form'
import {Form, Button, Input, Loading} from '@/components'
import {Label, Type} from '@/constants'
import {useFormValidation} from '@/hooks/useFormValidation'
import {useConfirmResetPassword} from '@/hooks/user/useConfirmResetPassword'
import {ResetPasswordSchema} from '@/libs/zod'

const Reset = () => {
  const router = useRouter()
  const {resetPasswordForm} = useFormValidation()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = resetPasswordForm
  const {mutate, isSuccess, isPending} = useConfirmResetPassword()
  const handleFinalSubmit: SubmitHandler<ResetPasswordSchema> = data => {
    const {confirmationToken, userId} = router.query
    if (router.isReady) {
      mutate({...data, userId, confirmationToken})
    }
    resetPasswordForm.reset()
  }

  useEffect(() => {
    const {userId, confirmationToken} = router.query
    if (router.isReady && (!userId || !confirmationToken)) {
      router.push('/member')
    }
  }, [router])

  if (isPending) return <Loading />
  else
    return (
      <div>
        <Form
          method='post'
          onSubmit={handleSubmit(handleFinalSubmit)}
          className='w-10/12 md:w-1/2 items-center gap-5 group'>
          <Image
            src={'/akrem_logo.png'}
            width={200}
            height={200}
            alt='Akrem Logo'
            draggable='false'
          />
          <div className='text-blue-600 font-medium text-lg space-y-5 text-center mb-2'>
            <Input
              type={Type.PASSWORD}
              placeholder={Label.PASSWORD}
              label={Label.PASSWORD}
              {...register('password')}
              errMessageProperty={errors.password?.message}
              required
              className='p-0.5 w-full'
            />
            <Input
              type={Type.PASSWORD}
              label={Label.CONFIRM_PASSWORD}
              placeholder={Label.CONFIRM_PASSWORD}
              {...register('confirmPassword')}
              errMessageProperty={errors.confirmPassword?.message}
              required
              className='p-0.5  w-full'
            />
          </div>
          {isSuccess && (
            <span className='text-green-500 uppercase font-semibold border-[1px] border-blue-500 p-1 rounded-xl bg-cyan-100'>
              {'Password changed successfully'}
            </span>
          )}
          <Button type='submit' className='text-slate-100 w-52'>
            Confirm
          </Button>
        </Form>
      </div>
    )
}

export default Reset
