import {useMutation} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import handleDonation from '@/utils/donation/handleDonation'

export const useDonate = () => {
  return useMutation({
    mutationKey: ['userDonate'],
    mutationFn: handleDonation,
    onError: (error: AxiosError) => error,
  })
}
