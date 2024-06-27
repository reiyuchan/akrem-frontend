import React, {FunctionComponent, useEffect} from 'react'
import {Button, Form, Input} from '@/components'
import {Label, Section, Type} from '@/constants'
import {SubmitHandler, UseFormReturn} from 'react-hook-form'
import {UpdateEmailSchema} from '@/libs/zod'
import {useEditEmail} from '@/hooks/user/useEditEmail'
import {useUser, useUserToken} from '@/store/user'
import {Success} from '../Success'

interface EditEmailProps {
  children?: React.ReactNode
  updateEmailForm: UseFormReturn<UpdateEmailSchema>
}

export const EditEmail: FunctionComponent<EditEmailProps> = ({
  children,
  updateEmailForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
    setValue: setFormValue,
  } = updateEmailForm
  const [token] = useUserToken()
  const confirmationToken = token[0]
  const [user] = useUser()
  const {email} = getValues()
  const {refetch, isSuccess} = useEditEmail({
    confirmationToken,
    email,
  })
  const handleFinalSubmit: SubmitHandler<UpdateEmailSchema> = data => {
    refetch()
    console.log(data)
  }
  useEffect(() => {
    setFormValue('email', user.email as string)
  }, [setFormValue, user.email])

  return (
    <Form
      onSubmit={handleSubmit(handleFinalSubmit)}
      className='select-none items-center gap-4 text-slate-100 md:w-[52rem] md:items-stretch'>
      <div className='text-black '>
        <div>
          <h2 className='font-bold uppercase text-blue-600'>
            {Section.CHANGE_EMAIL}
          </h2>
        </div>
        <div className='flex flex-col items-center gap-5 [&>button]:font-semibold'>
          <div id='input-container'>
            <div className='flex flex-col items-center gap-5'>
              <Input
                type={Type.EMAIL}
                {...register('email')}
                errMessageProperty={errors.email?.message}
                required
                placeholder={Label.EMAIL}
                label={Label.EMAIL}
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
