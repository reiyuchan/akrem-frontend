import axios from '@/libs/axios'

const handleGetDonationList = async (token: string) => {
  const response = await axios.get(`/Cart/GetDonationCart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}

export default handleGetDonationList
