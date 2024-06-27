// import {FunctionComponent, useState} from 'react'
// import Image, {ImageProps} from 'next/image'
// import {Button, Dropdown, Input} from '@/components'
// import {Type} from '@/constants'
// import classnames from '@/libs/classnames'
// import {Card} from '@/types'

// interface CartItemProps extends Card {
//   children?: React.ReactNode
//   imageClassName?: string | undefined
//   handleSelectQuantity: React.MouseEventHandler<HTMLAnchorElement>
//   handleUpdateQuantityByInput: React.ChangeEventHandler<HTMLInputElement>
//   handleRemoveFromCart: React.MouseEventHandler<HTMLButtonElement>
//   disabled?: boolean
// }

// export const CartItem: FunctionComponent<
//   CartItemProps & (ImageProps & React.HTMLAttributes<HTMLDivElement>)
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
//   handleSelectQuantity,
//   handleUpdateQuantityByInput,
//   handleRemoveFromCart,
//   quantity,
//   disabled,
// }) => {
//   const [isItemsAboveTenLocal, setIsItemsAboveTenLocal] = useState<boolean>()
//   const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     e.persist()
//     if (e.key === 'Enter' || e.key === 'Escape')
//       setIsItemsAboveTenLocal(!isItemsAboveTenLocal)
//   }
//   const cardBodyStyle = classnames('card-body items-center mt-4', {
//     'gap-10': !card.description,
//   })
//   const classname = classnames(
//     'card card-side bg-slate-200 text-blue-600',
//     className,
//   )
//   const imgClassName = classnames('rounded-xl', imageClassName)
//   return (
//     <div id={id} className={classname} onClick={onClick}>
//       {src && (
//         <figure className='p-3 w-56'>
//           <Image
//             src={src}
//             alt={alt}
//             width={width}
//             height={height}
//             loading={loading}
//             className={imgClassName}
//           />
//         </figure>
//       )}
//       <div className={cardBodyStyle}>
//         <span className='card-title'>{card.name || ''}</span>
//         {card.description && (
//           <p className='font-semibold text-base w-52 break-words'>
//             {card.description || ''}
//           </p>
//         )}
//         <span className=''>{'$' + card.price}</span>
//         <div className='card-actions items-center flex-row flex-nowrap text-slate-100'>
//           {!isItemsAboveTenLocal && (
//             <Dropdown
//               quantity={quantity}
//               handleSelectQuantity={handleSelectQuantity}
//               isItemsAboveTenLocal={isItemsAboveTenLocal}
//               setIsItemsAboveTenLocal={setIsItemsAboveTenLocal}
//             />
//           )}
//           {isItemsAboveTenLocal && (
//             <Input
//               min={0}
//               maxLength={3}
//               name='number'
//               type={Type.TEXT}
//               containerStyle='w-10'
//               className='w-7 justify-center'
//               onChange={handleUpdateQuantityByInput}
//               onKeyDown={handleInputSubmit}
//             />
//           )}
//           <Button
//             disabled={disabled}
//             type={Type.BUTTON}
//             className='disabled:opacity-50 disabled:pointer-events-none'
//             onClick={handleRemoveFromCart}>
//             {'Remove'}
//           </Button>
//         </div>
//       </div>
//       {children}
//     </div>
//   )
// }
