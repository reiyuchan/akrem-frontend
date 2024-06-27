import {useMutation} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import handleMakeOrder from '@/utils/order/handleMakeOrder'

export const useMakeOrder = () => {
  return useMutation({
    mutationKey: ['userOrder'],
    mutationFn: handleMakeOrder,
    onError: (error: AxiosError) => error,
  })
}
