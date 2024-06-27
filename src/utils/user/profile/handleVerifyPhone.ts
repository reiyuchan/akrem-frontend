import axios from '@/libs/axios'
import {User} from '@/types'

const handleVerifyPhone = async ({
  confirmationToken,
  phoneNumber,
  otp,
  hasWhatsApp,
}: Pick<User, 'confirmationToken' | 'phoneNumber' | 'otp' | 'hasWhatsApp'>) => {
  const response = await axios.post(
    `/Account/ConfirmationPhoneNumber`,
    {phoneNumber, otp, hasWhatsApp},
    {
      headers: {
        Authorization: `Bearer ${confirmationToken}`,
      },
    },
  )
  return response
}

export default handleVerifyPhone
