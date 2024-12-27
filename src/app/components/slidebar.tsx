// import Link from "next/link";
// import { BsBagX } from "react-icons/bs";
// import { RxCrossCircled } from "react-icons/rx";
// import Image from "next/image";
// import { MdCancel } from "react-icons/md";




// const SlideBar = ({ cartItems, isCartOpen, toggleCart, handleRemoveItem }) => {
//     return (
//       <div
//         className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
//           isCartOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         {/* Header */}
//         <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//           <h2 className="text-lg font-semibold flex items-center">
//             <BsBagX className="mr-2" />
//             Shopping Cart
//           </h2>
//           <button onClick={toggleCart}>
//             <RxCrossCircled size={24} />
//           </button>
//         </div>
  
//         {/* Cart Items */}
//         <div className="p-4 flex-1 overflow-y-auto">
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between mb-4 border-b pb-4"
//               >
//                 <div className="flex items-center">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={50}
//                     height={50}
//                     className="rounded-md"
//                   />
//                   <div className="ml-4">
//                     <h4 className="text-sm font-medium">{item.name}</h4>
//                     <p className="text-xs text-gray-500">
//                       {item.quantity} x {item.price}
//                     </p>
//                   </div>
//                 </div>
//                 <button onClick={() => handleRemoveItem(item.id)}>
//                   <MdCancel size={20} className="text-red-500" />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
//           )}
//         </div>
  
//         {/* Footer */}
//         <div className="p-4 border-t border-gray-200">
//           {/* Total Price */}
//           <div className="flex justify-between mb-4">
//             <span className="font-medium">Total:</span>
//             <span className="font-medium">
//               Rs.{' '}
//               {cartItems
//                 .reduce(
//                   (sum: number, item: { price: string; quantity: number; }) =>
//                     sum + parseInt(item.price.replace('Rs.', '').replace(',', '')) * item.quantity,
//                   0
//                 )
//                 .toLocaleString()}
//             </span>
//           </div>
  
//           {/* Action Buttons */}
//           <div className="flex justify-between">
//             <Link href="/cart" className="bg-gray-200 px-4 py-2 rounded-md">
//               View Cart
//             </Link>
//             <Link href="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//               Checkout
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   };
  