import {Label} from '@/constants'
import React, {FunctionComponent} from 'react'

interface TextAreaProps {
  label?: string
}

export const TextArea: FunctionComponent<
  React.HTMLAttributes<HTMLTextAreaElement> & TextAreaProps
> = ({label, placeholder, ...props}) => {
  return (
    <>
      <div className='label '>
        <label className='label-text text-gray-500 font-semibold'>
          {label}
        </label>
      </div>
      <textarea
        className='textarea border-blue-600 bg-transparent focus:border-none focus:outline-blue-600 resize-none text-black'
        placeholder={placeholder}
        rows={20}
        {...props}></textarea>
    </>
  )
}
