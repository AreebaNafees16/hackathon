import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import { IoIosArrowForward } from "react-icons/io";

function AsgaardSofa() {
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
    const images = ["/shop.jpeg", "/shop.jpeg", "/shop.jpeg"]; // Replace with correct image paths
    const sizes = ["L", "XL", "XS"];
    const colors = ["bg-purple-700", "bg-blue-500", "bg-green-400"]; // Add color classes here

    return (
      <div className="w-full">
      {/* Header Section */}
      <div className="relative z-10 w-[1440px] h-[100px] mx-auto flex items-center justify-start bg-white px-6 lg:px-20">
        {/* Breadcrumb Navigation */}
        <div className="relative z-10 flex items-center space-x-2 text-black text-sm mt-44 mb-16">
          <Link href="/" className="hover:text-blue-500 ml-4">
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
  <div className="flex md:flex-col gap-4 md:gap-6 p-4 rounded-lg">
    <Image
      src="/sm1.png"
      alt="Sofa Image"
      height={70}
      width={70}
      className="rounded-lg object-cover bg-[#FFF9E5]"
    />
    <Image
      src="/sm2.png"
      alt="Sofa Image"
      height={70}
      width={70}
      className="rounded-lg object-cover bg-[#FFF9E5]"
    />
    <Image
      src="/sm3.png"
      alt="Sofa Image"
      height={70}
      width={70}
      className="rounded-lg object-cover bg-[#FFF9E5]"
    />
    <Image
      src="/sm4.png"
      alt="Sofa Image"
      height={70}
      width={70}
      className="rounded-lg object-cover bg-[#FFF9E5]"
    />
  </div>

  {/* Medium Image */}
  <div className="flex-1 flex justify-center items-center">
    <Image
      src="/item14.png"
      alt="Main Sofa Image"
      height={200}
      width={400}
      className="rounded-lg bg-[#FFF9E5] w-full md:w-auto md:mb-52 md:mr-32"
    />
  </div>
</div>

  {/* Right Column */}
  <div>
    <h3 className="text-2xl font-medium">Asgaard Sofa</h3>
    <p className="text-xl text-gray-500">Rs: 250,000.00</p>
    <div className="flex items-center space-x-2 mt-2">
      <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
      <span className="text-gray-700">(5 Customer Reviews)</span>
    </div>
    <p className="mt-4 text-gray-700">
    Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

.
    </p>

    <div className="mt-4">
      <h4 className="font-semibold">Size</h4>
      <div className="flex gap-2 mt-2">
        {sizes.map((size) => (
          <button
            key={size}
            className="border rounded-md px-4 py-2 bg-[#FAF4F4] hover:bg-[#FBEBB5]"
          >
            {size}
          </button>
        ))}
      </div>
    </div>

    <div className="mt-4">
      <h4 className="font-semibold">Color</h4>
      <div className="flex gap-2 mt-2">
        {colors.map((color, idx) => (
          <div key={idx} className={`rounded-full h-5 w-5 ${color}`}></div>
        ))}
      </div>
    </div>

    <div className="flex items-center gap-4 mt-6">
      <div className="flex items-center border p-2 gap-4 rounded-md">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
      <button className="bg-primary text-black border rounded-md px-6 py-2 hover:bg-opacity-90">
        Add To Cart
      </button>
    </div>

    <hr className="my-6" />

    
      <div className="flex justify mb-2">
        <span>SKU</span>
        <span className='ml-11'>:</span>
        <span className='ml-2'>SS001</span>
      </div>
      <div className="flex justify mb-2">
        <span>Category</span>
        <span className='ml-2'>:</span>
        <span className='ml-2'>Sofas</span>
      </div>
      <div className="flex justify mb-2">
        <span>Tags</span>
        <span className='ml-10'>:</span>
        <span className='ml-2'>Sofa, Chair, Home, Shop</span>
      </div>
      <div className="flex justify items-center">
        <span>Share</span>
        <span className='ml-8'>:</span>
        <div className="flex space-x-2 ml-2">
          <BsFacebook className="text-black cursor-pointer" />
          <FaLinkedin className="text-black cursor-pointer" />
          <FaTwitter className="text-black cursor-pointer" />
        </div>
      </div>
  
  </div>
</div>
  {/* Divider */}
  <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>
  <div className="w-full mt-8">
  {/* Top Navigation */}
  <div className="flex items-center justify-center gap-8  border-gray-300 pb-2 mb-6">
    <button className="text-black font-medium hover:text-black">Description</button>
    <button className="text-[#9F9F9F] font-medium hover:text-black">
      Additional Information
    </button>
    <button className="text-[#9F9F9F] font-medium hover:text-black">
      Reviews <span className="text-yellow-500">[5]</span>
    </button>
  </div>

  {/* Description Paragraph */}
  <p className="text-[#9F9F9F] mb-8 md:mx-40">
  Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
  </p>
  <p className="text-[#9F9F9F] mb-8 md:mx-40">
  Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
  </p>

  {/* Two Images with Yellow Background */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg md:ml-40 md:mr-28">
  <Image
    src="/p1.png"
    alt="Furniture Image 1"
    height={400}
    width={400}
    className="rounded-lg bg-yellow-100 w-full"
  />
  <Image
    src="/p2.png"
    alt="Furniture Image 2"
    height={400}
    width={400}
    className="rounded-lg bg-yellow-100 w-full"
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
        </div>
    );
}

export default AsgaardSofa;