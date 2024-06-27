import axios from '@/libs/axios'
import {User} from '@/types'

const handleDeleteAccount = async ({
  confirmationToken,
}: Pick<User, 'confirmationToken'>) => {
  const response = await axios.get(`/Account/DeleteAccount`, {
    headers: {
      Authorization: `Bearer ${confirmationToken}`,
    },
  })
  return response
}

export default handleDeleteAccount
