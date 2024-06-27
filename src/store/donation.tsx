import {atom, useAtom} from 'jotai'
import {atomWithReset, atomWithStorage} from 'jotai/utils'
import {DonationItem, DonationErrors} from '@/types'
import {createLocalStorage} from '@/libs/jotai/storage'

const donationList = atomWithStorage<DonationItem[]>(
  'donation_list',
  [],
  createLocalStorage(),
)

const donationItem = atom<Partial<DonationItem>>({})
const donationCategory = atom<number>(0)
const image = atomWithReset<string>('')
const imageEmpty = atomWithReset<boolean>(false)
const formErrors = atomWithReset<Partial<DonationErrors>>({})

export const useDonationList = () => useAtom(donationList)
export const useDonationItem = () => useAtom(donationItem)
export const useDonationCategory = () => useAtom(donationCategory)
export const useDonationImage = () => useAtom(image)
export const useImageEmpty = () => useAtom(imageEmpty)
export const useFormErrors = () => useAtom(formErrors)
