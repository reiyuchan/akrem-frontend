import axios from '@/libs/axios'
import {User} from '@/types'

const handleGetClientAddress = async ({confirmationToken}: User) => {
  const response = await axios.get(`/Account/GetClientAddresses`, {
    headers: {
      Authorization: `Bearer ${confirmationToken}`,
    },
  })
  return response
}

export default handleGetClientAddress
