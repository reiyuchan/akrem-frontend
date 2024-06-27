// import {FunctionComponent, useEffect, useState} from 'react'
// import {CartItem} from '@/components'
// import {useCart} from '@/store/cart'
// import {Card} from '@/types'

// interface CartListProps {
//   children?: React.ReactNode
//   cardClassName?: string | undefined
//   imageClassName?: string | undefined
//   w?: number
//   h?: number
//   ArrayList?: Array<Card>
// }

// export const CartList: FunctionComponent<
//   CartListProps & React.HTMLAttributes<HTMLDivElement>
// > = ({
//   className,
//   id,
//   onClick,
//   children,
//   ArrayList,
//   cardClassName,
//   imageClassName,
//   w,
//   h,
// }) => {
//   const [cartItems, setCartItems] = useState<Card[]>(ArrayList || [])
//   const [
//     _,
//     __,
//     ___,
//     ____,
//     handleSelectQuantity,
//     handleUpdateQuantityByInput,
//     handleRemoveFromCart,
//   ] = useCart()
//   useEffect(() => {
//     setCartItems(ArrayList || [])
//   }, [ArrayList])

//   return (
//     <div
//       id={id}
//       className={`flex flex-row justify-center items-center gap-10 flex-wrap ${
//         className || ''
//       }`}>
//       {cartItems.map(item => {
//         item.card.thumbnail ? null : (item.card.thumbnail = '')
//         return (
//           <CartItem
//             src={item.card.thumbnail}
//             alt={item.card.alt}
//             width={w || 0}
//             height={h || 0}
//             card={item.card}
//             key={item.card.id}
//             className={cardClassName}
//             imageClassName={imageClassName}
//             onClick={onClick}
//             quantity={item.quantity || 0}
//             handleSelectQuantity={e => handleSelectQuantity(item, e)}
//             handleUpdateQuantityByInput={e =>
//               handleUpdateQuantityByInput(item, e)
//             }
//             handleRemoveFromCart={e => handleRemoveFromCart(item, e)}
//           />
//         )
//       })}
//       {children}
//     </div>
//   )
// }
