import {useEffect, useState} from 'react'

export const useCounter = () => {
  const [counter, setCounter] = useState<number>(0)

  /**
   * @param {number} number - number in seconds
   */
  const startCounter = (number: number) => {
    setCounter(number)
  }

  useEffect(() => {
    if (counter === 0) return

    const countDown = setInterval(() => setCounter(counter - 1), 1000)

    return () => clearInterval(countDown)
  }, [counter])

  return {counter, startCounter}
}
