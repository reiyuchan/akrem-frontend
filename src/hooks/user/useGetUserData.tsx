import {useQuery} from '@tanstack/react-query'
import handleGetUserData from '@/utils/user/handleGetUserData'

export const useGetUserData = (token: string) =>
  useQuery({
    queryKey: ['confirmResetPass', token],
    queryFn: () => handleGetUserData(token),
    enabled: false,
  })
