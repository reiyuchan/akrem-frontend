import {useMutation} from '@tanstack/react-query'
import handleConfirmResetPassword from '@/utils/user/handleConfirmResetPassword'

export const useConfirmResetPassword = () =>
  useMutation({
    mutationKey: ['confirmResetPass'],
    mutationFn: handleConfirmResetPassword,
  })
