import React, {FunctionComponent, useEffect} from 'react'
import {Button, Checkbox, Form, Input} from '@/components'
import {Label, Section, Type} from '@/constants'
import {SubmitHandler, UseFormReturn} from 'react-hook-form'
import {UpdatePhoneSchema, VerifyPhoneSchema} from '@/libs/zod'
import ignoreNaN from '@/utils/ignoreNaN'
import {useEditPhone} from '@/hooks/user/useEditPhone'
import {useUser, useUserOtp, useUserToken, useUserWhatsApp} from '@/store/user'
import {useVerifyPhone} from '@/hooks/user/useVerifyPhone'
import {Success} from '../Success'

interface EditEmailProps {
  children?: React.ReactNode
  updatePhoneForm: UseFormReturn<UpdatePhoneSchema>
  verifyPhoneForm: UseFormReturn<VerifyPhoneSchema>
}

export const EditPhone: FunctionComponent<EditEmailProps> = ({
  children,
  updatePhoneForm,
  verifyPhoneForm,
}) => {
  const {
    register: phoneRegister,
    handleSubmit: handlePhoneSubmit,
    formState: {errors: phoneErrors},
    setValue: setFormValue,
    getValues: getPhoneValues,
  } = updatePhoneForm
  const {
    register: otpRegister,
    handleSubmit: handleOtpSubmit,
    formState: {errors: otpErrors},
  } = verifyPhoneForm
  const {mutate: mutatePhone, isSuccess: isPhoneSuccess} = useEditPhone()
  const {mutate: mutateOtp, isSuccess: isOtpSuccess} = useVerifyPhone()
  const [token] = useUserToken()
  const confirmationToken = token[0]
  const [user] = useUser()
  const [hasWhatsApp, setHasWhatsApp] = useUserWhatsApp()
  const [isOtpOn, setIsOtpOn] = useUserOtp()
  const handleFinalPhoneSubmit: SubmitHandler<UpdatePhoneSchema> = data => {
    const {phoneNumber} = data
    mutatePhone({confirmationToken, phoneNumber, hasWhatsApp})
  }
  const handleFinalOtpSubmit: SubmitHandler<VerifyPhoneSchema> = data => {
    const {otp} = data
    const {phoneNumber} = getPhoneValues()
    mutateOtp({confirmationToken, hasWhatsApp, phoneNumber, otp})
  }
  useEffect(() => {
    setFormValue('phoneNumber', user.phoneNumber ?? '')
  }, [setFormValue, user.phoneNumber])
  useEffect(() => {
    if (isPhoneSuccess) {
      setIsOtpOn(true)
    }
  }, [isOtpOn, isPhoneSuccess, setIsOtpOn])
  useEffect(() => {
    if (isOtpSuccess) {
      setIsOtpOn(false)
    }
  }, [isOtpOn, isOtpSuccess, setIsOtpOn])

  return (
    <div className='select-none form-control p-5 items-center text-slate-100 md:w-[52rem] md:items-stretch'>
      <div className='text-black '>
        <div>
          <h2 className='font-bold uppercase text-blue-600'>
            {Section.EDIT_PHONE_NUMBER}
          </h2>
        </div>
        <div className='flex flex-col items-center'>
          <Form
            onSubmit={handlePhoneSubmit(handleFinalPhoneSubmit)}
            className='items-center gap-4 !p-0 shadow-none bg-transparent [&>button]:font-semibold text-slate-100'>
            <div id='input-container'>
              <div className='flex flex-col items-center gap-5'>
                <Input
                  type={Type.TEXT}
                  {...phoneRegister('phoneNumber', {onChange: ignoreNaN})}
                  errMessageProperty={phoneErrors.phoneNumber?.message}
                  required
                  maxLength={11}
                  placeholder={Label.PHONE_NUMBER}
                  label={Label.PHONE_NUMBER}
                  labelStyle='font-semibold text-gray-500'
                />
              </div>
            </div>
            <Checkbox
              checked={hasWhatsApp}
              onChange={e => setHasWhatsApp(!hasWhatsApp)}
              textStyle='text-blue-600 text-md relative top-0.5 ml-5'
              text='Whats App?'
              textPosition='right'
            />
            <Button type='submit' className='w-52'>
              Submit
            </Button>
          </Form>
          {isOtpOn && (
            <Form
              onSubmit={handleOtpSubmit(handleFinalOtpSubmit)}
              className='items-center gap-4 !p-0 shadow-none bg-transparent [&>button]:font-semibold text-slate-100'>
              <div id='input-container'>
                <div className='flex flex-col items-center gap-5 '>
                  <Input
                    type={Type.TEXT}
                    {...otpRegister('otp', {onChange: ignoreNaN})}
                    errMessageProperty={otpErrors.otp?.message}
                    required
                    maxLength={11}
                    placeholder={'OTP'}
                    label={'OTP'}
                    labelStyle='font-semibold text-gray-500'
                  />
                </div>
              </div>
              {isOtpSuccess && <Success />}
              <Button type='submit' className='w-52'>
                Verify
              </Button>
            </Form>
          )}
        </div>
      </div>
    </div>
  )
}
