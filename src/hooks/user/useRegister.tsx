import {useMutation} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import handleRegister from '@/utils/user/handleRegister'

export const useRegister = () =>
  useMutation({
    mutationKey: ['registerUser'],
    mutationFn: handleRegister,
    onError: (error: AxiosError) => error,
  })
