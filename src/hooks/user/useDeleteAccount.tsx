import {useQuery} from '@tanstack/react-query'
import {User} from '@/types'
import handleDeleteAccount from '@/utils/user/profile/handleDeleteAccount'

export const useDeleteAccount = ({
  confirmationToken,
}: Pick<User, 'confirmationToken'>) =>
  useQuery({
    queryKey: ['deleteUser', confirmationToken],
    queryFn: () => handleDeleteAccount({confirmationToken}),
    enabled: false,
  })
