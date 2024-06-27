import {useQuery} from '@tanstack/react-query'
import handleRemoveOrderItem, {
  RemveOrderItem,
} from '@/utils/order/handleRemoveOrderItem'

export const useCancelOrder = ({
  confirmationToken,
  shoppingCartItemId,
}: RemveOrderItem) =>
  useQuery({
    queryKey: ['removeOrderItem', confirmationToken],
    queryFn: () =>
      handleRemoveOrderItem({confirmationToken, shoppingCartItemId}),
    enabled: false,
  })
