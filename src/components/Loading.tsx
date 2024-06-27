import {useRouter} from 'next/router'
import {useState, useEffect, FunctionComponent} from 'react'

export const Loading: FunctionComponent = () => {
  const [btn, setBtn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => setBtn(true), 8000)
    return () => {
      setBtn(false)
    }
  }, [])

  return (
    <>
      <div className='fixed top-0 z-30 flex flex-col bg-gradient-to-br from-sky-300 via-blue-500 to-blue-700 w-screen h-screen items-center justify-center'>
        {/* <main classNa me='flex bg-blue-500 w-screen h-screen items-center justify-center'> */}
        <div className='animate-pulse text-5xl md:text-9xl text-center text-blue-300'>
          Akrem
        </div>
        <div className='w-12 h-12 md:w-24 md:h-24 my-5 text-center rounded-full border-blue-300 border-4 border-t-0 border-r-0 animate-spin '></div>
        {btn && (
          <div
            onClick={() => router.reload()}
            className='text-2xl md:text-5xl text-center text-blue-300 hover:underline hover:cursor-pointer'>
            Taking too long? click here!
          </div>
        )}
      </div>
    </>
  )
}
