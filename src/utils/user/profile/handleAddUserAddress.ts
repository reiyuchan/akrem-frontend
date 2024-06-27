import axios from '@/libs/axios'
import {User} from '@/types'

const handleAddUserAddress = async ({confirmationToken, address}: User) => {
  const response = await axios.post(
    `/Account/AddClientAddresses`,
    {address},
    {
      headers: {
        Authorization: `Bearer ${confirmationToken}`,
      },
    },
  )
  return response
}

export default handleAddUserAddress
