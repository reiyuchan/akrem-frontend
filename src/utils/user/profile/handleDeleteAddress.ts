import axios from '@/libs/axios'
import {User} from '@/types'

const handleDeleteAccount = async ({confirmationToken, address}: User) => {
  const {areaID} = address
  const response = await axios.delete(`/Account/ConfirmationPhoneNumber`, {
    headers: {
      Authorization: `Bearer ${confirmationToken}`,
    },
    params: {
      addressId: areaID,
    },
  })
  return response
}

export default handleDeleteAccount
