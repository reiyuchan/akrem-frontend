import {useCallback, useEffect, useState} from 'react'
import {useRouter} from 'next/router'

export const useValideRoute = (
  item?: string,
  query?: string | string[],
  separator?: string | RegExp,
  index?: number,
) => {
  const [isValid, setIsValid] = useState<boolean>(false)
  const router = useRouter()
  const handleInvalidRoute = useCallback(() => {
    const splittedItem = item && item.split(separator || '')[index || 0]
    if (query && item) {
      if (query !== (splittedItem || item)) {
        router.push('/404')
        setIsValid(false)
      } else setIsValid(true)
    }
  }, [router, query, item, separator, index])

  useEffect(() => {
    handleInvalidRoute()
  }, [handleInvalidRoute])
  return [isValid]
}
