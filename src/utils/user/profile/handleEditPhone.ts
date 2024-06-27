import axios from '@/libs/axios'
import {User} from '@/types'

const handleEditPhone = async ({
  confirmationToken,
  phoneNumber,
  hasWhatsApp,
}: Pick<User, 'confirmationToken' | 'phoneNumber' | 'hasWhatsApp'>) => {
  const response = await axios.post(
    `/Account/AddNewPhoneNumber`,
    {phoneNumber, hasWhatsApp},
    {
      headers: {
        Authorization: `Bearer ${confirmationToken}`,
      },
    },
  )
  return response
}

export default handleEditPhone
