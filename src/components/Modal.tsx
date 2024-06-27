import {useState, useEffect, useRef, FunctionComponent} from 'react'
import Image from 'next/image'
import {Button, Form} from '@/components'
import {useSessionStorage} from '@/hooks/useSessionStorage'
import {useCounter} from '@/hooks/useCounter'
import {useResendConfirmation} from '@/hooks/user/useResendConfirmation'
import classnames from '@/libs/classnames'
import {Urls} from '@/constants/urls.enum'

interface ModalProps {
  children?: React.ReactNode
  userEmail?: string
  setIsNewUser?: React.Dispatch<React.SetStateAction<boolean>>
  formStyle?: string
}

export const Modal: FunctionComponent<
  ModalProps & React.DialogHTMLAttributes<HTMLDialogElement>
> = ({
  children,
  setIsNewUser,
  userEmail,
  className,
  formStyle,
  ...restProps
}) => {
  const [email] = useState<string | undefined>(userEmail)
  const btnRef = useRef<HTMLSpanElement | null>(null)
  const {refetch} = useResendConfirmation(email || '')
  const sessionStorage = useSessionStorage()
  const counter = useCounter()

  useEffect(() => {
    if (counter.counter === 0) {
      const disabled = btnRef.current?.hasAttribute('data-disabled')
      if (!disabled) return
      btnRef.current?.removeAttribute('data-disabled')
    }
  }, [counter.counter])
  const classname = classnames(
    'fixed top-0 z-30 backdrop-blur-sm p-3 h-full w-full bg-black bg-opacity-40 text-white',
    className,
  )
  const formStyles = classnames(
    'gap-10 items-center !w-fit mx-auto my-32 md:my-52',
    formStyle,
  )

  return (
    <dialog className={classname} {...restProps}>
      <Form method='dialog' className={formStyles}>
        {!children ? (
          <div className='flex flex-col gap-10 items-center justify-center'>
            <Image
              src={Urls.AKREM_LOGO_ICON}
              width={200}
              height={200}
              alt='AKREM Logo'
            />
            <span className='text-black font-medium text-lg'>
              Please, Confirm your E-mail!
            </span>
            <span
              ref={btnRef}
              onClick={() => {
                email ? refetch() : null
                btnRef.current?.setAttribute('data-disabled', '')
                counter.startCounter(10)
              }}
              className='cursor-pointer hover:underline data-[disabled]:pointer-events-none data-[disabled]:opacity-50 decoration-blue-600 underline-offset-3 text-indigo-600 text-center'>
              Resend verification e-mail
            </span>
            {counter.counter !== 0 && (
              <span className='  text-indigo-600 text-center'>
                {counter.counter}
              </span>
            )}
            <Button
              onClick={() => {
                if (setIsNewUser) {
                  setIsNewUser(false)
                  sessionStorage.setItem('isNotNew', 'true')
                }
              }}
              type='button'
              className='w-full justify-center !rounded-2xl'>
              Ok
            </Button>
          </div>
        ) : (
          children
        )}
      </Form>
    </dialog>
  )
}
