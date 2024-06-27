import {useCallback} from 'react'

export const useSessionStorage = () => {
  const setItem = useCallback((key: string, value: string) => {
    window.sessionStorage.setItem(key, value)
  }, [])

  return {setItem}
}
