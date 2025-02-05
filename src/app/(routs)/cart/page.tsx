
// "use client";
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { SlArrowRight } from 'react-icons/sl';
// import { RiDeleteBinLine } from 'react-icons/ri';
// import { GrTrophy } from 'react-icons/gr';
// import { GoVerified } from 'react-icons/go';
// import { FaShippingFast } from 'react-icons/fa';
// import { RiCustomerService2Fill } from 'react-icons/ri';
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import { AiFillDelete, AiOutlineRight } from 'react-icons/ai';
// import Feature from '@/app/components/feature';

// interface Product {
//     _id: string;
//     title: string;
//     description: string;
//     price: number;
//     images: any;
//     slug: { current: string };
//     quantity: number;
//   }

//   export default function CartPage() {
//       const [quantity, setQuantity] = useState<number>(0);
//     const [sanityData, setSanityData] = useState<Product[]>([]);
//     const [cart, setCart] = useState<string[]>([]);
//     const [cartItems, setCartItems] = useState<Product[]>([]);


//     useEffect(() => {
//       const fetchData = async () => {
//         const query = `*[_type == "product"]{
//           _id,
//           title,
//           description,
//           price,
//           images,
//           slug

//         }`;

//         const data: Product[] = await client.fetch(query);
//         setSanityData(data);
//       };

//       fetchData();
//     }, []);

//     useEffect(() => {
//       const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//       setCart(savedCart);





//       const items = savedCart
//         .map((id) => sanityData.find((p) => p._id === id))
//         .filter((item): item is Product => Boolean(item));
//       setCartItems(items);
//     }, [sanityData]);

//     const removeFromCart = (id: string) => {
//       const updatedCart = cart.filter((productId) => productId !== id);
//       setCart(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));



//       const updatedItems = updatedCart
//         .map((id) => sanityData.find((p) => p._id === id))
//         .filter((item): item is Product => Boolean(item));
//       setCartItems(updatedItems);
//     };

//     const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);



//   const increment = () => setQuantity((prev) => prev + 1); // Increase the value
//   const decrement = () => setQuantity((prev) => Math.max(0, prev - 1)); // Decrease the value, prevent going below 1

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Number(event.target.value);
//     setQuantity(value >= 1 ? value : 1); // Ensure value is at least 1
//   };



// return (
//         // <div className="max-w-[1440px] mx-auto overflow-hidden">
//              <div className="w-full">
//                {/* Top Section */}
//              <section className="relative w-full h-[200px] sm:h-[316px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-10">
//                  <div
//                      className="absolute inset-0 bg-cover bg-center opacity-40"
//                      style={{ backgroundImage: "url('/bg.jpg')" }}
//                  ></div>
//                  <div className="relative z-10">
//                      <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-4 ml-2" />
//                      <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">Cart</h1>
//                  </div>
//                  <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
//                      <Link href="/" className="hover:text-blue-500">
//                          Home
//                      </Link>
//                      <AiOutlineRight className="text-black" />
//                      <span>Cart</span>
//                  </div>
//             </section>

//  {/* Cart Table Section */}

//  <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8 lg:mx-20">
//                 {/* Cart Items */}
//                 <div className="w-full lg:w-[900px] bg-white rounded-lg p-4 sm:p-6">
//                     <div className="w-full text-xs md:text-lg">
//                         {/* <div className="bg-[#FFF9E5] text-gray-800 flex py-4">

//                             <span className="flex-1 ml-24 md:ml-28 text-left">Product</span>
//                             <span className="flex-1 ml-4 md:ml-8 text-left">Price</span>
//                             <span className="flex-2 ml-6 md:ml-10 text-left">Quantity</span>
//                             <span className="flex-1 ml-6 md:ml-16 text-left">Subtotal</span>
//                             <span className="flex-1 text-left"></span>

//                         </div>
//             */}

//                     {cartItems.length > 0 ? (

//                         cartItems.map(item => (
//                           <div
//   key={item._id}
//   className="py-4 flex flex-wrap items-center justify-between gap-2 border-b border-gray-200"
// >
//   {/* Product Image and Title */}
//   <div className="flex items-center flex-2 min-w-[200px] space-x-8">
//     <div className="w-[80px] h-[80px] bg-[#FBEBB5] rounded-lg flex-shrink-0">
//       {item.images && (
//         <Image
//           src={urlFor(item.images).url()}
//           alt={item.title}
//           width={90}
//           height={50}
//           className="rounded-lg object-scale-down w-full h-full"
//         />
//       )}
//     </div>

//     <span className=" text-gray-600 text-sm md:text-base">{item.title}</span>
//     </div>
//   {/* <button
//     onClick={() => removeFromCart(item._id)}
//     className="text-[#f8e29a] hover:text-red-600 scale-150"
//   >
//     <AiFillDelete />
//   </button> */}



//   {/* Price */}
//   {/* <span className="text-gray-600 text-sm md:text-base min-w-[100px] text-center">

//     Rs. {item.price}
//   </span> */}

//   {/* Quantity */}
//   <span className="text-gray-600 text-sm md:text-base text-center min-w-[50px]">
//     {item.quantity}
//   </span>

//   <div className='flex-auto items-center'>
//     <span className=" text-gray-600 text-sm md:text-base min-w-[10] text-center">
//     Rs. {item.price}
//   </span>
//   </div>

//   <div className="flex items-center border  h-10 p-1 gap-4 rounded-lg  transition-all duration-300 hover:outline hover:outline-2 hover:outline-black">
//   <button
//                   onClick={decrement}

//                 >
//                   −
//                 </button>
//                 <input
//                   type="number"
//                   value={quantity}
//                   onChange={handleChange}
//                   className="w-11 h-9 text-center border-transparent rounded-lg appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//                 />
//                 <button
//                   onClick={increment}

//                 >
//                   +
//                 </button>
//                 </div>
//   {/* Delete Button */}
//   <button
//     onClick={() => removeFromCart(item._id)}
//     className="text-[#f8e29a] hover:text-red-600 scale-150"
//   >
//     <AiFillDelete />
//   </button>
// </div>


//                             // <div key={item._id} className="py-4 flex items-center mt-3">
//                             //     <div className="flex items-center flex-2">

//                             //         <div className="w-[80px] h-[80px] bg-[#FBEBB5] rounded-lg mt-1">
//                             //         {item.images && (
//                             //             <Image src={urlFor(item.images).url()} alt={item.title} width={90} height={50} className='rounded-lg object-scale-down w-full h-full'/>
//                             //         )}
//                             //         </div>
//                             //         <span className="md:ml-8 text-gray-400 text-xs md:text-base">{item.title}</span>
//                             //     </div>
//                             //     <span className="md:ml-12 flex- text-xs md:text-base text-gray-400">Rs. {item.price}</span>

//                             //     <span>{item.quantity}</span>
//                             //     <button onClick={() => removeFromCart(item._id)}>
//                             //         <AiFillDelete className="text-[#f8e29a] md:ml-11 cursor-pointer hover:text-red-600 scale-150" />
//                             //     </button>
//                             // </div>

//                         ))
//                     ) : (
//                         <h1 className="text-center mt-8 text-2xl">Your cart is empty</h1>
//                     )}
//                 </div>
//                 </div>

//                 <div className="w-full h-[300] lg:w-[350px] lg:h-[400px] bg-[#FFF9E5] rounded-md p-10 mt-8 lg:mt-5 lg:mr-7 mb-14">
//           <h2 className="text-2xl font-bold mb-4 text-center">Cart Totals</h2>
//           <div className="w-full mt-14">
//             <div className="flex justify-between py-3">
//               <span className="text-left font-semibold">Subtotal</span>
//               <span className="text-right text-gray-400">Rs: {totalPrice}</span>
//             </div>
//             <div className="flex justify-between py-3">
//               <span className="text-left font-semibold">Total</span>
//               <span className="text-right text-lg font-semibold text-[#B88E2F]">
//                 Rs: {totalPrice}
//               </span>
//             </div>
//             <div className="py-4 flex justify-center mt-4">
//             <Link href='/checkout'>
//               <button className="px-16 py-3 border border-black rounded-xl hover:bg-gray-700 hover:text-white">
//                 Check Out
//               </button>
//               </Link>
//             </div>


//             </div>

//         </div>

//         </div>
//         <Feature />
//         </div>

//     );
//     }    



//copyy








"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { AiFillDelete, AiOutlineRight } from 'react-icons/ai';
import Feature from '@/app/components/feature';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  stockLevel: number;
  image: string;
  slug: { current: string };
  quantity: number;
}

export default function CartPage() {
  const [quantity, setQuantity] = useState<number>(0);
  const [sanityData, setSanityData] = useState<Product[]>([]);
  const [cart, setCart] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product"]{
          _id,
          name,
          description,
          price,
          stockLevel,
          discountPercentage,
          "image": image.asset->url,
          slug
          
        }`;

      const data: Product[] = await client.fetch(query);
      setSanityData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);





    const items = savedCart
      .map((id: string) => sanityData.find((p) => p._id === id))
      .filter((item: any): item is Product => Boolean(item));
    setCartItems(items);
  }, [sanityData]);

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((productId) => productId !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));



    const updatedItems = updatedCart
      .map((id) => sanityData.find((p) => p._id === id))
      .filter((item): item is Product => Boolean(item));
    setCartItems(updatedItems);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);



  const increment = () => setQuantity((prev) => prev + 1); // Increase the value
  const decrement = () => setQuantity((prev) => Math.max(0, prev - 1)); // Decrease the value, prevent going below 1

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setQuantity(value >= 1 ? value : 1); // Ensure value is at least 1
  };


  // Update item quantity
  // const handleUpdateQuantity = (productId: string, newQuantity: number) => {
  //   const updatedCart = cartItems.map(item =>
  //     item._id === productId ? { ...item, quantity: newQuantity } : item
  //   );
  //   setCartItems(updatedCart);
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  // };

  // // Calculate total price
  // const totalPrice = cartItems.reduce((total, item) => {
  //   return total + item.price * item.quantity;
  // }, 0);






  return (
    // <div className="max-w-[1440px] mx-auto overflow-hidden">
    <div className="w-full">
      {/* Top Section */}
      <section className="relative w-full h-[200px] sm:h-[316px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>
        <div className="relative z-10">
          <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-4 ml-2" />
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">Cart</h1>
        </div>
        <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <AiOutlineRight className="text-black" />
          <span>Cart</span>
        </div>
      </section>

      {/* Cart Table Section */}

      <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8 lg:mx-20">

        {/* Cart Items */}
        <div className="w-full lg:w-[900px] bg-white rounded-lg p-4 sm:p-6">
          <div className="w-full text-xs md:text-lg">
            {/* <div className="bg-[#FFF9E5] text-gray-800 flex py-4">
                            
                            <span className="flex-1 ml-24 md:ml-28 text-left">Product</span>
                            <span className="flex-1 ml-4 md:ml-8 text-left">Price</span>
                            <span className="flex-2 ml-6 md:ml-10 text-left">Quantity</span>
                            <span className="flex-1 ml-6 md:ml-16 text-left">Subtotal</span>
                            <span className="flex-1 text-left"></span>
                        
                        </div> */}


            {cartItems.length > 0 ? (

              cartItems.map(item => (
                <div
                  key={item._id}
                  className="py-4 flex flex-wrap items-center justify-between gap-2 border-b border-gray-200"
                >
                  {/* Product Image and Title */}
                  <div className="flex items-center flex-1 space-x-5">
                    <div className="w-[100px] h-[80px] rounded-lg">
                      {item.image && (
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name}
                          width={300}
                          height={300}
                          className="rounded-lg w-full h-full"
                        />
                      )}
                    </div>

                    <span className=" text-gray-600 text-sm md:text-base">{item.name}</span>
                  </div>
                  {/* <button
    onClick={() => removeFromCart(item._id)}
    className="text-[#f8e29a] hover:text-red-600 scale-150"
  >
    <AiFillDelete />
  </button> */}



                  {/* Price */}
                  {/* <span className="text-gray-600 text-sm md:text-base min-w-[100px] text-center">
    
    Rs. {item.price}
  </span> */}

                  {/* Quantity */}
                  <span className="text-gray-600 text-sm md:text-base text-center min-w-[50px]">
                    {item.quantity}
                  </span>
                  <div className="gap-3 flex-1">
                    <h1 className="font-[600] md:text-[22px] text-base leading-[30px] text-amber-400">
                      Rs. {item.price}
                    </h1>
                    <h1 className="font-[400] text-[18px]  text-gray-500">
                      -{item.discountPercentage}%
                    </h1>
                  </div>

                  {/* <div className='flex-1 items-center'>
     <span className=" text-gray-600 text-sm md:text-base min-w-[10] text-center">
   Rs. {item.quantity}
   </span>
  </div> */}
                  <div className='flex-1'>
                    <div className="flex items-center  h-10 p-1 rounded-lg  transition-all duration-300 ">
                      <div className="flex items-center gap-4 mt-2">
                        {/* <button
                        onClick={() => handleUpdateQuantity(item._id, Math.max(item.quantity - 1, 1))}
                        className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item._id, Math.min(item.quantity + 1, item.stockLevel))}
                        className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button> */}
                      </div>


                      {/* <button
                  onClick={decrement}

                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleChange}
                  className="w-11 h-9 text-center rounded-lg appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  onClick={increment}

                >
                  +
                </button> */}

                    </div>
                  </div>
                  {/* Delete Button */}
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-[#f8e29a] hover:text-red-600 scale-150"
                  >
                    <AiFillDelete />
                  </button>
                </div>



                // <div key={item._id} className="py-4 flex items-center mt-3">
                //     <div className="flex items-center flex-2">

                //         <div className="w-[80px] h-[80px] bg-[#FBEBB5] rounded-lg mt-1">
                //         {item.images && (
                //             <Image src={urlFor(item.images).url()} alt={item.title} width={90} height={50} className='rounded-lg object-scale-down w-full h-full'/>
                //         )}
                //         </div>
                //         <span className="md:ml-8 text-gray-400 text-xs md:text-base">{item.title}</span>
                //     </div>
                //     <span className="md:ml-12 flex- text-xs md:text-base text-gray-400">Rs. {item.price}</span>

                //     <span>{item.quantity}</span>
                //     <button onClick={() => removeFromCart(item._id)}>
                //         <AiFillDelete className="text-[#f8e29a] md:ml-11 cursor-pointer hover:text-red-600 scale-150" />
                //     </button>
                // </div>

              ))
            ) : (
              <h1 className="text-center mt-8 text-2xl">Your cart is empty</h1>
            )}
          </div>
        </div>

        <div className="w-full h-[300] lg:w-[350px] lg:h-[400px] bg-[#FFF9E5] rounded-md p-10 mt-8 lg:mt-5 lg:mr-7 mb-14">
          <h2 className="text-2xl font-bold mb-4 text-center">Cart Totals</h2>
          <div className="w-full mt-14">
            <div className="flex justify-between py-3">
              <span className="text-left font-semibold">Subtotal</span>
              <span className="text-right text-gray-400">Rs: {totalPrice}</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-left font-semibold">Total</span>
              <span className="text-right text-lg font-semibold text-[#B88E2F]">
                Rs: {totalPrice}
              </span>
            </div>
            <div className="py-4 flex justify-center mt-4">
              <Link href='/checkout'>
                <button className="px-16 py-3 border border-black rounded-xl hover:bg-gray-700 hover:text-white">
                  Check Out
                </button>
              </Link>
            </div>


          </div>

        </div>

      </div>
      <Feature />
    </div>

  );
}








