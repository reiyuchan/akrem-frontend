import handleChangePassword from '@/utils/user/profile/handleChangePassword'
import {useMutation} from '@tanstack/react-query'

export const useChangePassword = () =>
  useMutation({
    mutationKey: ['changePassword'],
    mutationFn: handleChangePassword,
  })
