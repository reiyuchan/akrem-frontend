import {useMutation} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import handleLogin from '@/utils/user/handleLogin'
import {NextRouter} from 'next/router'
import {useUserToken} from '@/store/user'

export const useLogin = (router: NextRouter) => {
  const [_, setUserState] = useUserToken()

  return useMutation({
    mutationKey: ['userLogin'],
    mutationFn: handleLogin,
    onError: (error: AxiosError) => error,
    onSuccess: response => {
      setUserState([
        response?.data.content.token,
        response?.data.content.expireOn,
      ])
      router.push('/')
    },
  })
}
