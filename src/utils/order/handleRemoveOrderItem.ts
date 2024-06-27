import axios from '@/libs/axios'

export type RemveOrderItem = {
  confirmationToken: string
  shoppingCartItemId: number
}

const handleRemoveOrderItem = async ({
  confirmationToken,
  shoppingCartItemId,
}: RemveOrderItem) => {
  const response = await axios.get(`/Cart/RemoveShoppingCartItem`, {
    headers: {
      Authorization: `Bearer ${confirmationToken}`,
    },
    params: {
      shoppingCartItemId,
    },
  })
  return response
}

export default handleRemoveOrderItem
