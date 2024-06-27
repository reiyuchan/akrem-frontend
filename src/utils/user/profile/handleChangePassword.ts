import axios from '@/libs/axios'
import {User} from '@/types'

const handleChangePassword = async ({
  confirmationToken,
  confirmPassword,
  password,
  currentPassword,
}: Pick<
  User,
  'confirmationToken' | 'confirmPassword' | 'password' | 'currentPassword'
>) => {
  const response = await axios.post(
    `/Account/ChangePassword`,
    {
      currentPassword,
      newPassword: password,
      confirmNewPassword: confirmPassword,
    },
    {
      headers: {
        Authorization: `Bearer ${confirmationToken}`,
      },
    },
  )
  return response
}

export default handleChangePassword
