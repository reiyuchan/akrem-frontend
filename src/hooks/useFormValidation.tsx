import {
  ForgetPassSchema,
  LoginSchema,
  ResetPasswordSchema,
  SignUpSchema,
  UpdateEmailSchema,
  UpdatePasswordSchema,
  UpdatePhoneSchema,
  UpdateProfileSchema,
  VerifyPhoneSchema,
} from '@/libs/zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'

export const useFormValidation = () => {
  const registerForm = useForm<SignUpSchema>({
    resolver: zodResolver(SignUpSchema),
    mode: 'onSubmit',
  })
  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(LoginSchema),
    mode: 'onSubmit',
  })
  const forgetPassForm = useForm<ForgetPassSchema>({
    resolver: zodResolver(ForgetPassSchema),
    mode: 'onSubmit',
  })

  const resetPasswordForm = useForm<ResetPasswordSchema>({
    resolver: zodResolver(ResetPasswordSchema),
    mode: 'onSubmit',
  })
  const updateProfileForm = useForm<UpdateProfileSchema>({
    resolver: zodResolver(UpdateProfileSchema),
    mode: 'onSubmit',
  })
  const updateEmailForm = useForm<UpdateEmailSchema>({
    resolver: zodResolver(UpdateEmailSchema),
    mode: 'onSubmit',
  })
  const updatePasswordForm = useForm<UpdatePasswordSchema>({
    resolver: zodResolver(UpdatePasswordSchema),
    mode: 'onSubmit',
  })
  const updatePhoneForm = useForm<UpdatePhoneSchema>({
    resolver: zodResolver(UpdatePhoneSchema),
    mode: 'onSubmit',
  })
  const verifyPhoneForm = useForm<VerifyPhoneSchema>({
    resolver: zodResolver(VerifyPhoneSchema),
    mode: 'onSubmit',
  })

  return {
    loginForm,
    registerForm,
    forgetPassForm,
    resetPasswordForm,
    updateProfileForm,
    updateEmailForm,
    updatePasswordForm,
    updatePhoneForm,
    verifyPhoneForm,
  } as const
}
