import React, {FunctionComponent, useEffect} from 'react'
import {Button, Form, Input} from '@/components'
import {Label, Section, Type} from '@/constants'
import {SubmitHandler, UseFormReturn} from 'react-hook-form'
import {UpdateProfileSchema} from '@/libs/zod'
import {useEditProfile} from '@/hooks/user/useEditProfile'
import {useRouter} from 'next/router'
import {useUser, useUserToken} from '@/store/user'
import {Success} from '../Success'

interface EditProfleProps {
  children?: React.ReactNode
  updateProfileForm: UseFormReturn<UpdateProfileSchema>
}

export const EditProfile: FunctionComponent<EditProfleProps> = ({
  children,
  updateProfileForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue: setFormValue,
  } = updateProfileForm
  const {mutate, isSuccess} = useEditProfile()
  const [token] = useUserToken()
  const confirmationToken = token[0]
  const [user] = useUser()
  const handleFinalSubmit: SubmitHandler<UpdateProfileSchema> = data => {
    const {firstName, lastName} = data
    mutate({confirmationToken, lastName, firstName})
  }
  useEffect(() => {
    setFormValue('firstName', user.firstName as string)
    setFormValue('lastName', user.lastName as string)
  }, [setFormValue, user.lastName, user.firstName])

  return (
    <Form
      onSubmit={handleSubmit(handleFinalSubmit)}
      className='select-none items-center gap-4 text-slate-100 md:w-[52rem] md:items-stretch'>
      <div className='text-black '>
        <div>
          <h2 className='font-bold uppercase text-blue-600'>
            {Section.EDIT_PROFILE}
          </h2>
        </div>
        <div className='flex flex-col items-center gap-5 [&>button]:font-semibold'>
          <div id='input-container'>
            <div className='flex flex-col items-center gap-5'>
              <Input
                type={Type.TEXT}
                {...register('firstName')}
                errMessageProperty={errors.firstName?.message}
                required
                placeholder={Label.FIRST_NAME}
                label={Label.FIRST_NAME}
                labelStyle='font-semibold text-gray-500'
              />
            </div>
          </div>
          <div id='input-container'>
            <div className='flex flex-col items-center gap-5'>
              <Input
                type={Type.TEXT}
                {...register('lastName')}
                errMessageProperty={errors.lastName?.message}
                required
                placeholder={Label.LAST_NAME}
                label={Label.LAST_NAME}
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
