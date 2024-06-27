// import {FunctionComponent, useEffect, useState} from 'react'
// import {Card} from '@/components'
// import {useCart} from '@/store/cart'
// import {Card as CardType} from '@/types'
// import classnames from '@/libs/classnames'

// interface CardListProps {
//   children?: React.ReactNode
//   cardClassName?: string | undefined
//   imageClassName?: string | undefined
//   w?: number
//   h?: number
//   ArrayList?: Array<CardType>
// }

// export const CardList: FunctionComponent<
//   CardListProps & React.HTMLAttributes<HTMLDivElement>
// > = ({
//   className,
//   onClick,
//   children,
//   ArrayList,
//   cardClassName,
//   imageClassName,
//   w,
//   h,
// }) => {
//   const [cards, setCards] = useState<CardType[]>(ArrayList || [])

//   const [_, __, handleAddToCart] = useCart()

//   useEffect(() => {
//     setCards(ArrayList || [])
//   }, [ArrayList])

//   const classname = classnames(
//     'flex flex-row p-4 justify-center items-center gap-10 flex-wrap lg:flex-nowrap ',
//     className,
//   )

//   return (
//     <div className={classname}>
//       {cards.map(item => {
//         item.card.thumbnail ? null : (item.card.thumbnail = '')
//         return (
//           <Card
//             src={item.card.thumbnail}
//             alt={item.card.alt}
//             width={w || 0}
//             height={h || 0}
//             card={item.card}
//             key={item.card.id}
//             className={cardClassName}
//             imageClassName={imageClassName}
//             onClick={onClick}
//             onAddToCart={() => handleAddToCart(item)}
//           />
//         )
//       })}
//       {children}
//     </div>
//   )
// }
