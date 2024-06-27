import {ShoppingCart} from 'lucide-react'
import {useRouter} from 'next/router'
import {FunctionComponent} from 'react'

export const CartIcon: FunctionComponent = () => {
  const router = useRouter()

  return (
    <ShoppingCart
      onClick={() => router.push('/cart')}
      color='rgb(37 99 235)'
      size={30}
    />
  )
}
