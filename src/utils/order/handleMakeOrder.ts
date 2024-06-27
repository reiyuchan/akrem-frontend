import axios from '@/libs/axios'

type DonationOrder = {marketMedicineId: number; confirmationToken: string}

const handleMakeOrder = async ({
  marketMedicineId,
  confirmationToken,
}: DonationOrder) => {
  const response = await axios.post(
    `/Cart/AddProductToShoppingCart`,
    marketMedicineId,
    {
      headers: {
        Authorization: `Bearer ${confirmationToken}`,
      },
    },
  )
  return response
}

export default handleMakeOrder
