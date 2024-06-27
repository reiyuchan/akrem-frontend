import {useCallback} from 'react'

export const useLocalStorage = () => {
  const setItem = useCallback((key: string, value: string) => {
    window.localStorage.setItem(key, value)
  }, [])

  const removeItem = useCallback((key: string) => {
    window.localStorage.removeItem(key)
  }, [])

  const clear = useCallback(() => {
    window.localStorage.clear()
  }, [])

  return {setItem, removeItem, clear}
}
