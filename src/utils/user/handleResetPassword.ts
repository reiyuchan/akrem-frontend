import axios from '@/libs/axios'

const handleResetPassword = async (userEmail: string) => {
  const response = await axios.get(
    `/Authentication/ForgotPassword/${userEmail}`,
  )
  return response
}

export default handleResetPassword
