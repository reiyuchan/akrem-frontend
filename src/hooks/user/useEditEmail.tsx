import {useQuery} from '@tanstack/react-query'
import {User} from '@/types'
import handleEditEmail from '@/utils/user/profile/handleEditEmail'

export const useEditEmail = ({
  confirmationToken,
  email,
}: Pick<User, 'confirmationToken' | 'email'>) =>
  useQuery({
    queryKey: ['editEmail', confirmationToken, email],
    queryFn: () => handleEditEmail({confirmationToken, email}),
    enabled: false,
  })
