import {useQuery} from '@tanstack/react-query'
import handleResendConfirmation from '@/utils/user/handleResendConfirmation'

export const useResendConfirmation = (email: string) =>
  useQuery({
    queryKey: ['resenConfirmation', email],
    queryFn: () => handleResendConfirmation(email),
    enabled: false,
  })
