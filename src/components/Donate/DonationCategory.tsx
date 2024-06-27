import React, {FunctionComponent} from 'react'
import {LucideIcon} from 'lucide-react'

interface DonationCategoryProps {
  Icon: LucideIcon
  name: string
  value: string
}

export const DonationCategory: FunctionComponent<
  DonationCategoryProps &
    React.HTMLAttributes<HTMLInputElement | HTMLLabelElement>
> = ({Icon, name, value, onClick, ...props}) => {
  return (
    <>
      <label
        onClick={onClick}
        className='text-black p-0.5 active:text-white active:bg-black border-black border-2 rounded-2xl font-medium cursor-pointer'>
        <Icon size={70} className='p-1.5' />
        <span>{name}</span>
        <input
          type='radio'
          name='medicineForm'
          value={value}
          className='w-6 h-6 appearance-none rounded-full pointer-events-none shadow-slate-100 bg-slate-100 border-black border-2 checked:bg-blue-600'
          {...props}
        />
      </label>
    </>
  )
}
