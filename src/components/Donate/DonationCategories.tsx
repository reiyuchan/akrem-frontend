import {
  GripHorizontal,
  Layers2,
  Milk,
  PillBottle,
  Siren,
  Syringe,
} from 'lucide-react'
import React, {FunctionComponent, useEffect, useState} from 'react'
import {DonationCategory} from '@/components'
import {DonationCategory as DonationCategoryType} from '@/types'
import {useDonationCategory, useDonationItem} from '@/store/donation'
export const DonationCategories: FunctionComponent = () => {
  const categoryList = [
    {
      id: 0,
      name: 'Tablet',
      icon: PillBottle,
    },
    {
      id: 1,
      name: 'Syrup',
      icon: Milk,
    },
    {
      id: 2,
      name: 'Injection',
      icon: Syringe,
    },
    {
      id: 3,
      name: 'Patches',
      icon: Layers2,
    },
    {
      id: 4,
      name: 'Device',
      icon: Siren,
    },
    {
      id: 5,
      name: 'Other',
      icon: GripHorizontal,
    },
  ]
  const [categories] = useState<DonationCategoryType[]>(categoryList || [])
  const [donationCategory, setDonationCategory] = useDonationCategory()
  const [donationItem, setDonationItem] = useDonationItem()

  const handleGetCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    // send the e.currentTarget.value to API
    // console.log(e.currentTarget.value)
    setDonationCategory(Number(e.target.value))
    setDonationItem({...donationItem, medicineForm: Number(e.target.value)})
  }

  useEffect(() => {
    setDonationItem({...donationItem, medicineForm: donationCategory})
  }, [setDonationItem])

  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 text-center [&>label]:flex [&>label]:items-center [&>label]:flex-col'>
      {categories.map(category => {
        return (
          <DonationCategory
            onChange={handleGetCategory}
            key={category.id}
            Icon={category.icon}
            name={category.name}
            defaultChecked={category.id === 0}
            value={category.id.toString()}
          />
        )
      })}
    </div>
  )
}
