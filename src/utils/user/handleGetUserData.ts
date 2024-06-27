import axios from '@/libs/axios'

const handleGetUserData = async (token: string) => {
  const response = await axios.get(`/Account/GetProfile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}

export default handleGetUserData
