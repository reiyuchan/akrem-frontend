import axios from '@/libs/axios'
import {UpdatedUser} from '@/types'

const handleConfirmEmail = async ({
  userId,
  confirmationToken,
  newEmail,
}: Pick<UpdatedUser, 'userId' | 'confirmationToken' | 'newEmail'>) => {
  if (!newEmail) {
    const response = await axios.get(`/Authentication/ConfirmEmail`, {
      params: {
        userId,
        confirmationToken,
      },
    })
    return response
  } else {
    const response = await axios.get(`/Account/ConfirmChangeEmail`, {
      params: {
        userId,
        newEmail,
        confirmationToken,
      },
    })
    return response
  }
}

export default handleConfirmEmail
