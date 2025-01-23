import Link from "next/link";
import { BsBagX } from "react-icons/bs";
import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([

    {
      id: 1,
      name: 'Asgaard Sofa',
      price: 'Rs. 250,000.00',
      image: '/item14.png',
      
    },
   
    
  ]);

  const handleAddToCart = () => {
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };





export default function slidBar() {
    return (
        <div>
<div>
<button
                onClick={handleAddToCart}
                className="bg-primary text-black border rounded-md px-8 py-3 transition-all duration-300 hover:outline hover:outline-2 hover:outline-black">
                Add To Cart
              </button>
              </div>
             {/* slid bar  */}
           {isCartOpen && (

<div className="fixed top-0 right-0 w-96 h-[1000px] bg-white p-6 shadow-lg" style={{ zIndex: 9999 }}>
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-xl font-semibold">Shopping Cart</h1>

    <button
      onClick={() => setIsCartOpen(false)}
      className="text-xl font-bold text-gray-400"
    >
      <BsBagX />
      {/* &times; */}
    </button>
  </div>
  <div className="w-10/12 border-t-2 border-[#D9D9D9] my-8"></div>

  <div className="space-y-4">
    {cartItems.map((product) => (
      <div key={product.id} className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-cover rounded-lg bg-[#FBEBB5] mt-2"
          />
          <div>
            <p className="font-medium">{product.name}</p>
            <div className="space-x-2">
              <span >1</span>
              <span> X </span>
              <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
          </div>
        </div>
        <span

          className="text-xl text-[#9F9F9F] "
        >
          <MdCancel />
        
        </span>
      </div>
    ))}
  </div>

  <div className="mt-40 pt-40">
    <div className="flex justify-between text-lg">
      <span>Subtotal</span>
      <span className="text-[#B88E2F] md:mr-4">
        Rs. 250,000.00

      </span>
    </div>
    <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>
    <div className="mt-4 flex gap-14">
      <Link href='/cart'>
        <button className="bg-white text-black px-7 py-2 border border-black rounded-full transition-all duration-300 hover:outline hover:outline-2 hover:outline-gray-300">
          View Cart
        </button>
      </Link>
      <Link href='/checkout'>
        <button className="bg-white text-black border border-black rounded-full px-7 py-2 transition-all duration-300 hover:outline hover:outline-2 hover:outline-gray-300">
          Checkout
        </button>
      </Link>
    </div>
  </div>
</div>
)}
{/* Overlay */}
{isCartOpen && (
<div
  onClick={toggleCart}
  className="fixed inset-0 bg-black bg-opacity-50 z-50" style={{ zIndex: 9998 }}
></div>
)}


        </div>
    )
}