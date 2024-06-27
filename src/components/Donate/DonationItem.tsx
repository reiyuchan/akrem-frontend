import {DonationItem as Item} from '@/types'
import Image from 'next/image'
import React, {FunctionComponent, useEffect} from 'react'

export const DonationItem: FunctionComponent<Partial<Item>> = ({
  itemName,
  medicineConcentration,
  quantity,
  image,
}) => {
  if (itemName && medicineConcentration && image)
    return (
      <div className='card card-side md:w-96 w-11/12 bg-blue-300 text-black shadow-xl'>
        <figure className='bg-white p-2'>
          <Image src={image} width={0} height={0} alt='Movie' />
        </figure>
        <div className='card-body  whitespace-nowrap'>
          <h2 className='card-title'>{itemName}</h2>
          <p className='self-center'>{medicineConcentration}</p>
          <p className='self-center border-2 border-slate-100 rounded-2xl w-fit p-1 text-center'>
            {quantity + 'x'}
          </p>
        </div>
      </div>
    )
}
