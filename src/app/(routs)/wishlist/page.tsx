
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
//     const [sanityData, setSanityData] = useState<Product[]>([]);
//     const [wishlist, setWishlist] = useState<string[]>([]);
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
  

// return (
//     // <div className="max-w-[1440px] mx-auto overflow-hidden">
//          <div className="w-full">
//            {/* Top Section */}
//          <section className="relative w-full h-[200px] sm:h-[316px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-10">
//              <div
//                  className="absolute inset-0 bg-cover bg-center opacity-40"
//                  style={{ backgroundImage: "url('/bg.jpg')" }}
//              ></div>
//              <div className="relative z-10">
//                  <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-4 ml-2" />
//                  <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">Cart</h1>
//              </div>
//              <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
//                  <Link href="/" className="hover:text-blue-500">
//                      Home
//                  </Link>
//                  <AiOutlineRight className="text-black" />
//                  <span>Cart</span>
//              </div>
//         </section>
      
// {/* Cart Table Section */}

// <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8 lg:mx-20">
//             {/* Cart Items */}
//             <div className="w-full lg:w-[900px] bg-white rounded-lg p-4 sm:p-6">
//                 <div className="w-full text-xs md:text-lg">
//                     <div className="bg-[#FFF9E5] text-gray-800 flex py-4">
                        
//                         <span className="flex-1 ml-24 md:ml-28 text-left">Product</span>
//                         <span className="flex-1 ml-4 md:ml-8 text-left">Price</span>
//                         <span className="flex-2 ml-6 md:ml-10 text-left">Quantity</span>
//                         <span className="flex-1 ml-6 md:ml-16 text-left">Subtotal</span>
//                         <span className="flex-1 text-left"></span>
                    
//                     </div>
       

//                 {cartItems.length > 0 ? (
                  
//                     cartItems.map(item => (
//                         <div key={item._id} className="py-4 flex items-center mt-3">
//                             <div className="flex items-center flex-2">

//                                 <div className="w-[80px] h-[80px] bg-[#FBEBB5] rounded-lg mt-1">
//                                 {item.images && (
//                                     <Image src={urlFor(item.images).url()} alt={item.title} width={90} height={50} className='rounded-lg object-scale-down w-full h-full'/>
//                                 )}
//                                 </div>
//                                 <span className="ml-8 text-gray-400 text-xs md:text-base">{item.title}</span>
//                             </div>
//                             <span className="lg:ml-12 flex- text-xs md:text-base text-gray-400">Rs. {item.price}</span>
                           
//                             <span>{item.quantity}</span>
//                             <button onClick={() => removeFromCart(item._id)}>
//                                 <AiFillDelete className="text-[#f8e29a] md:ml-11 cursor-pointer hover:text-red-600 scale-150" />
//                             </button>
//                         </div>
                        
//                     ))
//                 ) : (
//                     <h1 className="text-center mt-8 text-2xl">Your cart is empty</h1>
//                 )}
//             </div>
//             </div>

//             <div className="w-full h-[300] lg:w-[350px] lg:h-[400px] bg-[#FFF9E5] rounded-md p-10 mt-8 lg:mt-5 lg:mr-7 mb-14">
//       <h2 className="text-2xl font-bold mb-4 text-center">Cart Totals</h2>
//       <div className="w-full mt-14">
//         <div className="flex justify-between py-3">
//           <span className="text-left font-semibold">Subtotal</span>
//           <span className="text-right text-gray-400">Rs: {totalPrice}</span>
//         </div>
//         <div className="flex justify-between py-3">
//           <span className="text-left font-semibold">Total</span>
//           <span className="text-right text-lg font-semibold text-[#B88E2F]">
//             Rs: {totalPrice}
//           </span>
//         </div>
//         <div className="py-4 flex justify-center mt-4">
//         <Link href='/checkout'>
//           <button className="px-16 py-3 border border-black rounded-xl hover:bg-gray-700 hover:text-white">
//             Check Out
//           </button>
//           </Link>
//         </div>
           
            
//         </div>
        

        
        

       
//     </div>
    
//     </div>
//     <Feature />
//     </div>

// );
// }    



"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { AiOutlineRight } from "react-icons/ai";

interface Product {
  _id: string;
  title: string;
  price: number;
  images: { asset: { _ref: string } };
}




const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Fetch wishlist products from localStorage
  useEffect(() => {
    const fetchWishlist = async () => {
      const wishlistIds = JSON.parse(localStorage.getItem("wishlist") || "[]");
      if (wishlistIds.length > 0) {
        const query = `*[_type == "product" && _id in $ids]{
          _id,
          title,
          price,
          images
        }`;
        const products = await client.fetch(query, { ids: wishlistIds });
        setWishlist(products);
      }
    };
    fetchWishlist();
  }, []);

  // Remove product from wishlist
  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((product) => product._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist.map((product) => product._id))
    );
  };

  return (
    <div className="w-full">
               {/* Top Section */}
             <section className="relative w-full h-[200px] sm:h-[316px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-10">
                 <div
                     className="absolute inset-0 bg-cover bg-center opacity-40"
                     style={{ backgroundImage: "url('/bg.jpg')" }}
                 ></div>
                 <div className="relative z-10">
                     <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-4 ml-2" />
                     <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">Wishlist</h1>
                 </div>
                 <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
                     <Link href="/" className="hover:text-blue-500">
                         Home
                     </Link>
                     <AiOutlineRight className="text-black" />
                     <span>Wishlist</span>
                 </div>
            </section>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your wishlist is empty.</p>
          <Link
            href="/shop"
            className="text-amber-400 hover:underline mt-4 block"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg flex items-center p-2 shadow-sm hover:shadow-md transition-shadow"
            >
                 {/* Product Image */}
              <div className="w-1/2 md:w-1/2">
              <Image
                src={urlFor(product.images).url()}
                alt={product.title}
                height={200}
                width={200}
                className="rounded-lg "
              />
              </div>
                 {/* Product Details */}
                 <div className="flex-1 ml-4">
                 <div className="flex items-center text-lg font-medium md:space-x-52">
              <h2 className="text-lg font-medium ">{product.title}</h2>
            
              <p className="text-gray-600">Rs. {product.price}.00</p>
              </div>
              <button
                onClick={() => removeFromWishlist(product._id)}
                className="mt-4 flex items-center text-red-500 hover:underline"
              >
                <BsTrash className="mr-2" />
                
              </button>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default WishlistPage;
