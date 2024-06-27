import React, {FunctionComponent} from 'react'
import {Button, Form, Input} from '@/components'
import {Label, Section, Type} from '@/constants'
import {SubmitHandler, UseFormReturn} from 'react-hook-form'
import {UpdatePasswordSchema} from '@/libs/zod'
import {useChangePassword} from '@/hooks/user/useChangePassword'
import {useUserToken} from '@/store/user'
import {Success} from '../Success'

interface ChangePasswordProps {
  children?: React.ReactNode
  updatePasswordForm: UseFormReturn<UpdatePasswordSchema>
}

export const ChangePassword: FunctionComponent<ChangePasswordProps> = ({
  children,
  updatePasswordForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = updatePasswordForm
  const {mutate, isSuccess} = useChangePassword()
  const [token] = useUserToken()
  const confirmationToken = token[0]
  const handleFinalSubmit: SubmitHandler<UpdatePasswordSchema> = data => {
    const {currentPassword, password, confirmPassword} = data
    mutate({confirmationToken, currentPassword, password, confirmPassword})
  }
  return (
    <Form
      onSubmit={handleSubmit(handleFinalSubmit)}
      className='select-none items-center gap-4 text-slate-100 md:w-[52rem] md:items-stretch'>
      <div className='text-black '>
        <div>
          <h2 className='font-bold uppercase text-blue-600'>
            {Section.CHANGE_PASSWORD}
          </h2>
        </div>
        <div className='flex flex-col items-center gap-5 [&>button]:font-semibold'>
          <div id='input-container'>
            <div className='flex flex-col items-center gap-5'>
              <Input
                type={Type.PASSWORD}
                {...register('currentPassword')}
                errMessageProperty={errors.currentPassword?.message}
                required
                placeholder={Label.CURRENT_PASSWORD}
                label={Label.CURRENT_PASSWORD}
                labelStyle='font-semibold text-gray-500'
              />
            </div>
          </div>
          <div id='input-container'>
            <div className='flex flex-col items-center gap-5'>
              <Input
                type={Type.PASSWORD}
                {...register('password')}
                errMessageProperty={errors.password?.message}
                required
                placeholder={Label.PASSWORD}
                label={Label.PASSWORD}
                labelStyle='font-semibold text-gray-500'
              />
            </div>
          </div>
          <div id='input-container'>
            <div className='flex flex-col items-center gap-5'>
              <Input
                type={Type.PASSWORD}
                {...register('confirmPassword')}
                errMessageProperty={errors.confirmPassword?.message}
                required
                placeholder={Label.CONFIRM_PASSWORD}
                label={Label.CONFIRM_PASSWORD}
                labelStyle='font-semibold text-gray-500'
              />
            </div>
          </div>
          {isSuccess && <Success />}
          <Button type='submit' className='w-52 text-slate-100'>
            Submit
          </Button>
        </div>
      </div>
    </Form>
  )
}
