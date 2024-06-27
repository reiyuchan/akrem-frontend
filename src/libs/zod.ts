import {ErrorMessage} from '@/constants'
import {z} from 'zod'

const SignUpSchema = z
  .object({
    firstName: z.string().min(3, {message: ErrorMessage.FIRST_NAME_CONSTRAINT}),
    lastName: z.string().min(3, {message: ErrorMessage.LAST_NAME_CONSTRAINT}),
    email: z.string().email({
      message: ErrorMessage.EMAIL_CONSTRAINT,
    }),
    password: z.string().min(8, {message: ErrorMessage.PASSWORD_CONSTRAINT}),
    confirmPassword: z.string(),
  })
  .refine(schema => schema.confirmPassword === schema.password, {
    message: ErrorMessage.CONFIRM_PASSWORD_CONSTRAINT,
    path: ['confirmPassword'],
  })
const LoginSchema = z.object({
  email: z.string().email({message: ErrorMessage.EMAIL_CONSTRAINT}),
  password: z.string().min(8, {message: ErrorMessage.PASSWORD_CONSTRAINT}),
})
const ForgetPassSchema = z.object({
  email: z.string().email({message: ErrorMessage.EMAIL_CONSTRAINT}),
})
const ResetPasswordSchema = z
  .object({
    password: z.string().min(8, {message: ErrorMessage.PASSWORD_CONSTRAINT}),
    confirmPassword: z.string(),
  })
  .refine(schema => schema.confirmPassword === schema.password, {
    message: ErrorMessage.CONFIRM_PASSWORD_CONSTRAINT,
    path: ['confirmPassword'],
  })
const UpdateProfileSchema = z.object({
  firstName: z.string().min(3, {message: ErrorMessage.FIRST_NAME_CONSTRAINT}),
  lastName: z.string().min(3, {message: ErrorMessage.LAST_NAME_CONSTRAINT}),
})
const UpdateEmailSchema = z.object({
  email: z.string().email({
    message: ErrorMessage.EMAIL_CONSTRAINT,
  }),
})
const UpdatePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(8, {message: ErrorMessage.PASSWORD_CONSTRAINT}),
    password: z.string().min(8, {message: ErrorMessage.PASSWORD_CONSTRAINT}),
    confirmPassword: z.string(),
  })
  .refine(schema => schema.confirmPassword === schema.password, {
    message: ErrorMessage.CONFIRM_PASSWORD_CONSTRAINT,
    path: ['confirmPassword'],
  })
const UpdatePhoneSchema = z.object({
  phoneNumber: z
    .string()
    .min(9, {message: ErrorMessage.PHONE_CONSTRAINT})
    .max(11, {message: ErrorMessage.PHONE_CONSTRAINT}),
})
const VerifyPhoneSchema = z.object({
  otp: z.string().min(1, {message: 'OTP is required..!'}),
})

export type SignUpSchema = z.infer<typeof SignUpSchema>
export type LoginSchema = z.infer<typeof LoginSchema>
export type ForgetPassSchema = z.infer<typeof ForgetPassSchema>
export type ResetPasswordSchema = z.infer<typeof ResetPasswordSchema>
export type UpdateProfileSchema = z.infer<typeof UpdateProfileSchema>
export type UpdateEmailSchema = z.infer<typeof UpdateEmailSchema>
export type UpdatePasswordSchema = z.infer<typeof UpdatePasswordSchema>
export type UpdatePhoneSchema = z.infer<typeof UpdatePhoneSchema>
export type VerifyPhoneSchema = z.infer<typeof VerifyPhoneSchema>

export {
  SignUpSchema,
  LoginSchema,
  ForgetPassSchema,
  ResetPasswordSchema,
  UpdateProfileSchema,
  UpdateEmailSchema,
  UpdatePasswordSchema,
  UpdatePhoneSchema,
  VerifyPhoneSchema,
}
