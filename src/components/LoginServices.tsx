import {FunctionComponent} from 'react'

interface LoginServicesProps {
  children?: React.ReactNode
}

export const LoginServices: FunctionComponent<LoginServicesProps> = ({
  children,
}) => {
  return (
    <>
      <div className='flex gap-5'>
        <div className='bg-[url("/google.svg")] w-[48px] h-[48px] bg-center bg-no-repeat shadow-md shadow-gray-500 hover:border-4 hover:border-blue-300 active:border-transparent active:shadow-none rounded-full hover:cursor-pointer'></div>
        <div className='bg-[url("/facebook.svg")] w-[48px] h-[48px] bg-no-repeat shadow-md shadow-gray-500 rounded-full hover:bg-blue-300 active:bg-transparent active:shadow-none hover:cursor-pointer'></div>
      </div>
      {children}
    </>
  )
}
