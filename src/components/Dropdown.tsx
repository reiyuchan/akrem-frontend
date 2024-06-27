// import {useHideDropdown} from '@/store/cart'
// import React, {FunctionComponent, useEffect} from 'react'

// interface DropdownProps {
//   btnText?: string
//   quantity?: number
//   handleSelectQuantity: React.MouseEventHandler<HTMLAnchorElement>
//   isItemsAboveTenLocal?: boolean
//   setIsItemsAboveTenLocal: (isItemsAboveTenLocal: boolean) => void
// }

// export const Dropdown: FunctionComponent<
//   DropdownProps & React.HTMLAttributes<HTMLDivElement>
// > = ({
//   btnText,
//   className,
//   onClick,
//   quantity,
//   handleSelectQuantity,
//   isItemsAboveTenLocal,
//   setIsItemsAboveTenLocal,
// }) => {
//   const [isHidden, setIsHidden] = useHideDropdown()

//   return (
//     <div className='dropdown text-blue-600'>
//       <div
//         tabIndex={0}
//         role='button'
//         onClick={() => setIsHidden(false)}
//         className='btn bg-gray-200 text-blue-600 hover:bg-blue-600 focus:bg-gray-200 focus:text-blue-600 hover:text-slate-100 w-10'>
//         {`${btnText || ''} ${quantity}`}
//       </div>
//       {!isHidden && (
//         <ul
//           tabIndex={0}
//           className='dropdown-content menu z-[1] p-2 shadow bg-gray-200 rounded-box '>
//           <li>
//             <a onClick={handleSelectQuantity}>1</a>
//           </li>
//           <li>
//             <a onClick={handleSelectQuantity}>2</a>
//           </li>
//           <li>
//             <a onClick={handleSelectQuantity}>3</a>
//           </li>
//           <li>
//             <a onClick={handleSelectQuantity}>4</a>
//           </li>
//           <li>
//             <a onClick={handleSelectQuantity}>5</a>
//           </li>
//           <li>
//             <a onClick={handleSelectQuantity}>6</a>
//           </li>
//           <li>
//             <a onClick={handleSelectQuantity}>7</a>
//           </li>
//           <li>
//             <a onClick={handleSelectQuantity}>8</a>
//           </li>
//           <li>
//             <a onClick={handleSelectQuantity}>9</a>
//           </li>
//           <li>
//             <a
//               onClick={() => {
//                 handleSelectQuantity
//                 setIsItemsAboveTenLocal(!isItemsAboveTenLocal)
//               }}>
//               10+
//             </a>
//           </li>
//         </ul>
//       )}
//     </div>
//   )
// }
