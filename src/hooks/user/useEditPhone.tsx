import handleEditPhone from '@/utils/user/profile/handleEditPhone'
import {useMutation} from '@tanstack/react-query'

export const useEditPhone = () =>
  useMutation({
    mutationKey: ['editPhone'],
    mutationFn: handleEditPhone,
  })
