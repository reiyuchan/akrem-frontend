import {useQuery} from '@tanstack/react-query'
import handleResetPassword from '@/utils/user/handleResetPassword'
import {Credentials} from '@/types'

export const useResetPassword = (userObject: Pick<Credentials, 'email'>) =>
  useQuery({
    queryKey: ['resetPass', userObject?.email],
    queryFn: () => handleResetPassword(userObject?.email || ''),
    enabled: false,
  })
