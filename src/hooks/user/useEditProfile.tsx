import {useMutation} from '@tanstack/react-query'
import handleEditProfile from '@/utils/user/profile/handleEditProfile'

export const useEditProfile = () =>
  useMutation({
    mutationKey: ['editProfile'],
    mutationFn: handleEditProfile,
  })
