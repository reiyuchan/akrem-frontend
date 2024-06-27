import axios from '@/libs/axios'
import {User} from '@/types'

const handleEditEmail = async ({
  confirmationToken,
  email,
}: Pick<User, 'confirmationToken' | 'email'>) => {
  const response = await axios.get(`/Account/ChangeEmail`, {
    headers: {
      Authorization: `Bearer ${confirmationToken}`,
    },
    params: {
      Email: email,
    },
  })
  return response
}

export default handleEditEmail
