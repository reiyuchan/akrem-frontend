// import Image, {ImageProps} from 'next/image'
// import {Button} from '@/components'
// import {FunctionComponent} from 'react'
// import {Card as CardType} from '@/types'

// interface CardProps extends CardType {
//   children?: React.ReactNode
//   imageClassName?: string | undefined
//   onAddToCart?: React.MouseEventHandler<HTMLButtonElement>
//   disabled?: boolean
// }

// export const Card: FunctionComponent<
//   CardProps & (ImageProps & React.HTMLAttributes<HTMLDivElement>)
// > = ({
//   src,
//   alt,
//   width,
//   height,
//   loading,
//   className,
//   imageClassName,
//   id,
//   onClick,
//   children,
//   card,
//   onAddToCart,
//   disabled,
// }) => {
//   return (
//     <div
//       id={id}
//       className={`card card-side bg-slate-200 text-blue-600 ${className || ''}`}
//       onClick={onClick}>
//       {src && (
//         <figure className='p-3 w-56'>
//           <Image
//             src={src}
//             alt={alt}
//             width={width}
//             height={height}
//             loading={loading}
//             className={`rounded-xl ${imageClassName || ''}`}
//           />
//         </figure>
//       )}
//       <div
//         className={`card-body items-center mt-4 ${
//           !card.description && 'gap-10'
//         }`}>
//         <span className='card-title'>{card.name || ''}</span>
//         {card.description && (
//           <p className='font-semibold text-base w-52 break-words'>
//             {card.description || ''}
//           </p>
//         )}
//         <span>{'$' + card.price}</span>
//         <div className='card-actions text-slate-100'>
//           <Button
//             disabled={disabled}
//             className='disabled:opacity-50 disabled:pointer-events-none'
//             onClick={onAddToCart}>
//             {'Add to Cart'}
//           </Button>
//         </div>
//       </div>
//       {children}
//     </div>
//   )
// }
