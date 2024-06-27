import {atom, useAtom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import {createLocalStorage} from '@/libs/jotai/storage'
import {Product} from '@/types'

const cart = atomWithStorage<Product[]>('cart', [], createLocalStorage())

const useCart = () => useAtom(cart)

export {useCart}
