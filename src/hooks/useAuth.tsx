import {useCallback, useEffect, useMemo} from 'react'
import {useRouter} from 'next/router'
import {useLocalStorage} from '@/hooks/useLocalStorage'

/** @param interval ms */
export const useAuth = (interval?: number) => {
  const router = useRouter()
  const localStorage = useLocalStorage()

  const evaluateExpiration = useMemo(() => {
    return () => {
      const token = window.localStorage.getItem('token')
      const expireDate = token && JSON.parse(token)[1]
      if (!expireDate) return
      if (Date.now() > expireDate) {
        return true
      }
      return false
    }
  }, [])

  const autoLogout = useCallback(() => {
    const expired = evaluateExpiration()
    const autoCheck = setInterval(() => {
      if (!expired) return
      localStorage.clear()
      router.push('/member')
    }, interval)
    return () => clearInterval(autoCheck)
  }, [evaluateExpiration, localStorage, router, interval])

  useEffect(() => {
    autoLogout()
  }, [autoLogout])
}
