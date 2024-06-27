import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {Product} from '@/types'
import {useCart} from '@/store/cart'
import {useGetMarket} from '@/hooks/order/useGetMarket'
import {Loading} from '@/components'
import {useRouter} from 'next/router'
import {Urls} from '@/constants'

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    priceAfterDiscount: 10,
    price: 19.99,
    imagePath: 's',
    totalQuantity: 0,
  },
  {
    id: 2,
    name: 'Product 2',
    priceAfterDiscount: 10,
    price: 19.99,
    imagePath: 's',
    totalQuantity: 0,
  },
  {
    id: 3,
    name: 'Product 3',
    priceAfterDiscount: 10,
    price: 19.99,
    imagePath: 's',
    totalQuantity: 0,
  },
]

const ShoppingPage: React.FC = () => {
  const [productsState, setProductsState] = useState<Product[]>(products || [])
  const [cart, setCart] = useCart()
  const {data, refetch, isPending, isSuccess} = useGetMarket({
    pageNumber: 1,
    pageSize: 50,
    search: '',
    sortOrderBy: 'Name',
    sortType: 'asc',
  })

  const addToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product])
  }
  // const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

  useEffect(() => {
    refetch()
    if (isSuccess) {
      setProductsState(data?.data.content)
    }
  }, [refetch, isSuccess, data?.data.content])

  return (
    <div className='flex flex-col items-center p-5'>
      <h1 className='text-black text-4xl font-bold mb-8'>
        Welcome to our Shop
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {productsState.map(product => (
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
            <button
              onClick={() => addToCart(product)}
              className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShoppingPage
