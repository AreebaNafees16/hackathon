"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { BsBagX, BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaStar, FaStarHalf } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import { AiFillTwitterCircle } from "react-icons/ai";
import { RxCrossCircled, RxHeart } from 'react-icons/rx';
import Navbar from '@/app/components/navbar';
import { MdCancel } from 'react-icons/md';
import Feature from '@/app/components/feature';


export default function AsgaardSofa() {
  const [quantity, setQuantity] = useState<number>(1);

  const increment = () => setQuantity((prev) => prev + 1); // Increase the value
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1)); // Decrease the value, prevent going below 1

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setQuantity(value >= 1 ? value : 1); // Ensure value is at least 1
  };


  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Asgaard Sofa',
      price: 'Rs. 250,000.00',
      image: '/item14.png',
      quantity: 1,
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
  const products = [
    { id: 1, name: "Trenton modular sofa_3", price: "25,000.00", image: "/item1.png" },
    {
      id: 2,
      name: (
        <>
          Granite dining table with <br /> dining chair
        </>
      ),
      price: "25,000.00",
      image: "/item2.png",
    },
    {
      id: 3,
      name: (
        <>
          Outdoor bar table and <br /> stool
        </>
      ),
      price: "25,000.00",
      image: "/item3.png",
    },
    {
      id: 4,
      name: (
        <>
          Plain console with teak <br /> mirror <br />
        </>
      ),
      price: "25,000.00",
      image: "/item4.png",
    },
  ];

  const sizes = ["L", "XL", "XS"];
  const colors = ["bg-[#816DFA]", "bg-black", "bg-[#CDBA7B]"]; // Add color classes here


  return (

    <div className="w-full md:ml-7">
      
      {/* Header Section */}

      <div className="relative z-10 w-[1440px] sm:h-[100px] h-[100px] mx-auto flex items-center justify-start bg-white px-6 lg:px-20">

        {/* Breadcrumb Navigation */}
        <div className="relative z-10 flex items-center space-x-2 text-black text-sm">

          <Link href="/" className="hover:text-blue-500 md:-ml-12">
            Home
          </Link>
          <AiOutlineRight />
          <Link href="/shop" className="hover:text-blue-500">
            Shop
          </Link>
          <span>|</span>
          {/* <AiOutlineRight /> */}
          <span className="font-md text-black"> AsgaardSofa</span>
        </div>
      </div>
      <div className="max-w-screen-2xl container mx-auto pb-8 px-4">

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Left Column */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Small Images Column */}
            <div className="flex md:flex-col gap-4 md:gap-6 p-4">
              <div className="flex justify-center items-center w-[76px] h-[78px] bg-[#FFF9E5] rounded-lg">
                <Image
                  src="/sm1.png"
                  alt="Sofa Image"
                  height={300}
                  width={500}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center items-center w-[76px] h-[78px] bg-[#FFF9E5] rounded-lg">
                <Image
                  src="/sm2.png"
                  alt="Sofa Image"
                  height={100}
                  width={600}
                  className="mb-5 object-contain"
                />
              </div>
              <div className="flex justify-center items-center w-[76px] h-[78px] bg-[#FFF9E5] rounded-lg">
                <Image
                  src="/sm3.png"
                  alt="Sofa Image"
                  height={100}
                  width={500}
                  className="mb-14 object-contain"
                />
              </div>
              <div className="flex justify-center items-center w-[76px] h-[78px] bg-[#FFF9E5] rounded-lg">
                <Image
                  src="/sm4.png"
                  alt="Sofa Image"
                  height={100}
                  width={500}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Medium Image */}
            <div className="rounded-lg flex justify-center items-center w-[400px] h-[450px] bg-[#FFF9E5] md:mt-3">
              <Image
                src="/product.png"
                alt="Main Sofa Image"
                height={200}
                width={2000}
                className="rounded-lg w-full md:w-auto"
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-medium">Asgaard Sofa</h3>
            <p className="text-xl text-gray-500">Rs: 250,000.00</p>
            <div className="flex items-center space-x-2 mt-2">
              <FaStar size={20} className="text-[#FFDA5B]" />
              <FaStar size={20} className="text-[#FFDA5B]" />
              <FaStar size={20} className="text-[#FFDA5B]" />
              <FaStar size={20} className="text-[#FFDA5B]" />
              <FaStarHalf size={20} className="text-[#FFDA5B]" />
              <span className="text-[#9F9F9F] text-2xl">|</span>
              <span className="text-[#9F9F9F]">(5 Customer Reviews)</span>
            </div>
            <p className="mt-4 text-gray-700">
              Setting the bar as one of the loudest speakers in its class, the Kilburn <br /> is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended highs for a <br /> sound.

              .
            </p>

            <div className="mt-4">
              <h4 className="font-semibold text-[#9F9F9F]">Size</h4>
              <div className="flex gap-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="border rounded-md w-10 h-10 bg-[#FAF4F4] hover:bg-[#FBEBB5]"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-[#9F9F9F]">Color</h4>
              <div className="flex gap-2 mt-2 space-x-3">
                {colors.map((color, idx) => (
                  <div key={idx} className={`rounded-full h-8 w-8 ${color}`}></div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6 mb-5">
              <div className="flex items-center border  h-12 p-2 gap-4 rounded-lg  transition-all duration-300 hover:outline hover:outline-2 hover:outline-black">
                <button
                  onClick={decrement}

                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleChange}
                  className="w-11 h-9 text-center border-transparent rounded-lg appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  onClick={increment}

                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-primary text-black border rounded-md px-8 py-3 transition-all duration-300 hover:outline hover:outline-2 hover:outline-black">
                Add To Cart
              </button>
            </div>
            {/* Cart Sidebar */}

            {isCartOpen && (

              <div className="fixed top-0 right-0 w-96 h-full bg-white p-6 shadow-lg" style={{ zIndex: 9999 }}>
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
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg bg-[#FBEBB5] mt-2"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
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
                        {/* &times; */}
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
            {/* Divider */}
            <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>

            <div className="flex justify mb-2 text-[#9F9F9F]">
              <span>SKU</span>
              <span className='ml-11'>:</span>
              <span className='ml-2'>SS001</span>
            </div>
            <div className="flex justify mb-2 text-[#9F9F9F]">
              <span>Category</span>
              <span className='ml-2'>:</span>
              <span className='ml-2'>Sofas</span>
            </div>
            <div className="flex justify mb-2 text-[#9F9F9F]">
              <span>Tags</span>
              <span className='ml-10'>:</span>
              <span className='ml-2'>Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex justify items-center text-[#9F9F9F]">
              <span>Share</span>
              <span className='ml-8'>:</span>
              <div className="flex space-x-3 ml-2">
                <BsFacebook className="text-black cursor-pointer" />
                <FaLinkedin className="text-black cursor-pointer" />
                <AiFillTwitterCircle size={19} className="text-black cursor-pointer" />
                <div>
                  <RxHeart size={25} className="text-red-400 ml-40" />
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Divider */}
        <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>
        <div className="w-full mt-8">
          {/* Top Navigation */}
          <div className="flex items-center justify-center gap-8  border-gray-300 pb-2 mb-6 md:text-xl text-base">
            <button className="text-black font-medium hover:text-black">Description</button>
            <button className="text-[#9F9F9F] font-medium hover:text-black">
              Additional Information
            </button>
            <button className="text-[#9F9F9F] font-medium hover:text-black">
              Reviews <span className="text-yellow-500">[5]</span>
            </button>
          </div>

          {/* Description Paragraph */}
          <p className="text-[#9F9F9F] mb-8 md:mx-36">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] mb-8 md:mx-36">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>

          {/* Two Images with Yellow Background */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg md:ml-24 md:mr-20">
            <Image
              src="/p1.png"
              alt="Furniture Image 1"
              height={400}
              width={400}
              className="rounded-lg w-[605px] h-[348px] bg-[#FFF9E5]"
            />
            <Image
              src="/p2.png"
              alt="Furniture Image 2"
              height={400}
              width={400}
              className="rounded-lg w-[605px] h-[348px] bg-[#FFF9E5]"
            />
          </div>

        </div>
        {/* Divider */}
        <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000000] mb-4 text-center mt-20">
          Related Products
        </h1>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1440px] px-10 sm:px-8 lg:px-0">
          {products.map((product) => (
            <div key={product.id} className="text-left">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt="product"
                  className="w-[90%] sm:w-[250px] h-auto sm:h-[250px] mx-auto transition-transform duration-300 hover:scale-105 mb-6 lg:mb-10"
                />
              </div>
              {/* Product Details */}
              <h3 className="text-md sm:text-lg font-normal text-[#000000] mt-2 sm:mt-4 ml-6">
                {product.name}
              </h3>
              <p className="text-md sm:text-lg font-bold text-[#000000] mt-2 sm:mt-4 ml-6">
                Rs. {product.price}
              </p>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div className="mt-6 lg:mt-8 text-center">
          <button className="text-lg font-medium text-black hover:text-blue-700 relative mt-20">
            View More
            <span className="block w-full h-[2px] bg-black mt-1"></span>
          </button>
        </div>
      </div>
      
      {/* Features Section */}
      <Feature />
    </div>

  );
}



