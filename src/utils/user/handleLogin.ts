import axios from '@/libs/axios'
import {Credentials} from '@/types'

const handleLogin = async (
  userObject: Pick<Credentials, 'email' | 'password'>,
) => {
  const response = await axios.post(`/Authentication/Login`, userObject)
  return response
}

export default handleLogin
