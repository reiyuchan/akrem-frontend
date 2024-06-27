import axios from '@/libs/axios'

const handleResendConfirmation = async (email: string) => {
  const response = await axios.get(
    `/Authentication/ResendConfirmationToken/${email}`,
  )
  return response
}

export default handleResendConfirmation
