import React from 'react'
import {CheckCircle2} from 'lucide-react'

export const Success = () => {
  return (
    <div className='flex flex-row gap-3'>
      <CheckCircle2 color='green' />
      <p className='text-green-700 font-semibold'>Successfully updated.</p>
    </div>
  )
}
