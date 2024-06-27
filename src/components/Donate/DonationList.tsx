import React, {FunctionComponent} from 'react'
import {useRouter} from 'next/router'
import {RESET} from 'jotai/utils'
import {useDonationList} from '@/store/donation'
import {Button, DonationItem} from '@/components'
import {Urls} from '@/constants'

export const DonationList: FunctionComponent = () => {
  // map through donation items and send donations to api
  const [donationList, setDonationList] = useDonationList()
  const router = useRouter()

  const handleConfirmDonation = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!donationList.length) {
      return
    }
    router.push(Urls.DONATE_CONFIRM_PAGE)
  }

  const handleClearList = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDonationList(RESET)
  }

  return (
    <>
      <div className='form-switch flex flex-col items-center p-5 gap-5'>
        {donationList.map((item, index) => (
          <DonationItem key={index} {...item} />
        ))}
        <Button
          onClick={handleClearList}
          className='text-slate-100 w-40 self-center bg-red-500 font-semibold hover:bg-red-600 active:bg-red-200 md:w-52'>
          Clear
        </Button>
        <Button
          onClick={handleConfirmDonation}
          className='text-slate-100 font-bold disabled:opacity-50 disabled:pointer-events-none'
          disabled={!donationList.length}>
          Confirm Donation
        </Button>
      </div>
    </>
  )
}
