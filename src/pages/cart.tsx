import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {Button} from '@/components'
import {useCart} from '@/store/cart'
import {Urls} from '@/constants'
import {RESET} from 'jotai/utils'
import Image from 'next/image'

const Cart = () => {
  const [cartList, setCartList] = useCart()
  const router = useRouter()
  const itemsCount = cartList.length
  const totalPrice = cartList.reduce((acc, item) => acc + item.price, 0)

  const handleConfirmOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!cartList.length) {
      return
    }
    router.push(Urls.ORDER_CONFIRM_PAGE)
    setCartList(RESET)
  }

  return (
    <div className='flex flex-col items-center p-5'>
      <h1 className='text-black text-4xl font-bold mb-8'>Your Shopping Cart</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {cartList.map(product => (
          <div key={product.id} className='bg-white rounded-lg shadow-md p-6'>
            <div className='relative w-full h-36 mb-4'>
              <Image
                src={product.imagePath}
                alt={product.name}
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
            </div>
            <h2 className='text-lg font-semibold mb-2'>{product.name}</h2>
            <p className='text-gray-600 mb-2'>{product.price}</p>
            <p className='text-gray-800 font-bold mb-2'>
              ${product.priceAfterDiscount}
            </p>
            <p className='text-gray-800 font-bold mb-2'>
              ${product.totalQuantity}
            </p>
          </div>
        ))}
      </div>
      <div className='mt-8'>
        <p className='mb-2 text-black font-bold text-lg'>
          {'quantity: ' + itemsCount}
        </p>
        <p className='mb-2 text-black font-bold text-lg'>
          {'total: ' + totalPrice}
        </p>
        <button
          onClick={() => setCartList(RESET)}
          className='bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-2xl mr-4'>
          Clear
        </button>
        <button
          onClick={() => handleConfirmOrder}
          className='bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-2xl'>
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
