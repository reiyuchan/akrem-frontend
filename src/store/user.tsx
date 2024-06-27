import {atom, useAtom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import {createLocalStorage} from '@/libs/jotai/storage'
import {Credentials} from '@/types'

const userState = atomWithStorage<Partial<Credentials>>(
  'user',
  {},
  createLocalStorage(),
)
const userCachedEmailState = atomWithStorage<string>(
  '_cached_email',
  '',
  createLocalStorage(),
)
const userTokenState = atomWithStorage<[string, string]>(
  'token',
  ['', ''],
  createLocalStorage(),
)
const userDeleteState = atom<boolean>(false)
const userWhatsAppState = atom<boolean>(false)
const userOtpState = atom<boolean>(false)

const useUser = () => useAtom(userState)
const useUserCachedEmail = () => useAtom(userCachedEmailState)
const useUserToken = () => useAtom(userTokenState)
const useUserDelete = () => useAtom(userDeleteState)
const useUserWhatsApp = () => useAtom(userWhatsAppState)
const useUserOtp = () => useAtom(userOtpState)

export {
  useUser,
  useUserToken,
  useUserCachedEmail,
  useUserDelete,
  useUserWhatsApp,
  useUserOtp,
}
