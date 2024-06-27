import {createLocalStorage} from '@/libs/jotai/storage'
import {atom, useAtom} from 'jotai'
import {} from 'jotai/utils'

const isLoading = atom<boolean>(false)

const useLoading = () => useAtom(isLoading)

export {useLoading}
