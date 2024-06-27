import {useQuery} from '@tanstack/react-query'
import handleConfirmEmail from '@/utils/user/handleConfirmEmail'
import {UpdatedUser} from '@/types'

export const useConfirmUser = ({
  userId,
  confirmationToken,
  newEmail,
}: Pick<UpdatedUser, 'userId' | 'confirmationToken' | 'newEmail'>) =>
  useQuery({
    queryKey: ['confirmUser', userId, confirmationToken, newEmail],
    queryFn: () => handleConfirmEmail({userId, confirmationToken, newEmail}),
    enabled: false,
  })
