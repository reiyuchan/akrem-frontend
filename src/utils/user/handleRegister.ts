import axios from '@/libs/axios'
import {Credentials} from '@/types'

const handleRegister = async (
  userObject: Omit<Credentials, 'phoneNumber' | 'address' | 'hasWhatsApp'>,
) => {
  const response = await axios.post(`/Authentication/Registeration`, userObject)
  return response
}

export default handleRegister
