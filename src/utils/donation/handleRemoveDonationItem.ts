import axios from '@/libs/axios'

export type RemoveDonationItem = {
  confirmationToken: string
  donationCartItemId: number
}

const handleRemoveDonationItem = async ({
  confirmationToken,
  donationCartItemId,
}: RemoveDonationItem) => {
  const response = await axios.get(`/Cart/RemoveDonationCartItem`, {
    headers: {
      Authorization: `Bearer ${confirmationToken}`,
    },
    params: {
      donationCartItemId,
    },
  })
  return response
}

export default handleRemoveDonationItem
