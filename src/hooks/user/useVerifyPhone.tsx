import handleVerifyPhone from '@/utils/user/profile/handleVerifyPhone'
import {useMutation} from '@tanstack/react-query'

export const useVerifyPhone = () =>
  useMutation({
    mutationKey: ['verifyPhone'],
    mutationFn: handleVerifyPhone,
  })
