import axios from '@/libs/axios'
import {User} from '@/types'

const handleConfirmResetPassword = async ({
  userId,
  confirmationToken,
  password,
  confirmPassword,
}: Pick<
  User,
  'password' | 'confirmPassword' | 'confirmationToken' | 'userId'
>) => {
  const response = await axios.post(`Authentication/ConfirmForgotPassword`, {
    userId,
    confirmationToken,
    password,
    confirmPassword,
  })
  return response
}

export default handleConfirmResetPassword
