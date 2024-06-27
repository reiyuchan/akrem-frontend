import {FunctionComponent, HTMLAttributes} from 'react'
import {ChangePassword, EditEmail, EditPhone, EditProfile} from '@/components'
import {useUser, useUserDelete} from '@/store/user'
import {Button} from '@/components'
import classnames from '@/libs/classnames'
import {useFormValidation} from '@/hooks/useFormValidation'

interface ProfileFormProps {
  deleteBtnStyle?: string
}

export const ProfileForm: FunctionComponent<
  ProfileFormProps & HTMLAttributes<HTMLDivElement>
> = ({deleteBtnStyle, className}) => {
  const [user] = useUser()
  const {
    updateProfileForm,
    updateEmailForm,
    updatePasswordForm,
    updatePhoneForm,
    verifyPhoneForm,
  } = useFormValidation()
  const [_, setIsDeleting] = useUserDelete()
  const deleteBtnStyles = classnames(
    'w-52 self-center md:ml-9 bg-red-500 font-semibold hover:bg-red-600 active:bg-red-200 md:w-52',
    deleteBtnStyle,
  )
  const classname = classnames(
    'select-none form-control bg-[url(/akrem_logo.png)] bg-[50%,50%] bg-center bg-no-repeat text-slate-100 md:w-[52rem] bg-slate-100 shadow-md shadow-zinc-800 w-full rounded-2xl ',
    className,
  )

  return (
    <div className={classname}>
      <div className='flex flex-col gap-4 bg-slate-100 bg-opacity-90 w-full p-5 rounded-2xl [&>form]:flex-none [&>form]:bg-transparent [&>form]:shadow-none'>
        <h2 className='self-start text-3xl font-bold text-black'>{`${
          !user.firstName && user.lastName
            ? 'Default'
            : 'Hello, ' + user.firstName?.concat(' ', user.lastName as string)
        }`}</h2>
        <EditProfile updateProfileForm={updateProfileForm} />
        <EditEmail updateEmailForm={updateEmailForm} />
        <ChangePassword updatePasswordForm={updatePasswordForm} />
        <EditPhone
          verifyPhoneForm={verifyPhoneForm}
          updatePhoneForm={updatePhoneForm}
        />
        <Button
          type='button'
          onClick={() => setIsDeleting(true)}
          form='profile-form'
          className={deleteBtnStyles}>
          Delete Account
        </Button>
      </div>
    </div>
  )
}
