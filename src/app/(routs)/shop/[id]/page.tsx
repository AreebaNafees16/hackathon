"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { BsBagX, BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaStar, FaStarHalf } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import { AiFillTwitterCircle } from "react-icons/ai";
import { RxCrossCircled, RxHeart } from 'react-icons/rx';
import { MdCancel } from 'react-icons/md';
import Feature from '@/app/components/feature';
import { notFound } from 'next/navigation';
import Related from '@/app/components/related';
import { CiStar } from 'react-icons/ci';

function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex space-x-2">
      {/* Full Stars */}
      {Array(fullStars).fill(null).map((_, index) => (
        <span key={`full-${index}`} className="text-yellow-300 text-lg"><FaStar /></span>
      ))}

      {/* Half Star */}
      {halfStar && <span className="text-yellow-300 text-lg"><FaStarHalf /></span>}

      {/* Empty Stars */}
      {Array(emptyStars).fill(null).map((_, index) => (
        <span
          key={`empty-${index}`}
          className="text-gray-400 text-lg"
          style={{ WebkitTextStroke: '1px gray', color: 'transparent' }}
        >
          <CiStar />
        </span>
      ))}
    </div>
  );
}

const products = [
  {
    id: "1",
    name: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    image: "/item1.png",
    rating: 4.5,
    description: "A stylish and comfortable modular sofa, perfect for any living room."
  },
  {
    id: "2",
    name: (
      <>
        Granite dining table with <br /> dining chair
      </>
    ),
    price: "Rs. 25,000.00",
    image: "/item2.png",
    rating: 4.7,
    description: "Elegant granite dining set to enhance your dining experience."
  },
  {
    id: "3",
    name: (
      <>
        Outdoor bar table and <br /> stool
      </>
    ),
    price: "Rs. 25,000.00",
    image: "/item3.png",
    rating: 4.3,
    description: "Perfect outdoor bar setup with a durable table and matching stool."
  },
  {
    id: "4",
    name: (
      <>
        Plain console with teak <br /> mirror <br />
      </>
    ),
    price: "Rs. 25,000.00",
    image: "/item4.png",
    rating: 4.6,
    description: "Minimalist plain console paired with a beautifully crafted teak mirror."
  },
  {
    id: "5",
    name: "Grain coffee table",
    price: "Rs. 15,000.00",
    image: "/item5.png",
    rating: 4.8,
    description: "A compact and versatile coffee table with a sleek grain design."
  },
  {
    id: "6",
    name: "Kent coffee table",
    price: "Rs. 225,000.00",
    image: "/item6.png",
    rating: 4.2,
    description: "Premium Kent coffee table crafted with the finest materials."
  },
  {
    id: "7",
    name: (
      <>
        Round coffee table_color <br /> 2 <br />
      </>
    ),
    price: "Rs. 251,000.00",
    image: "/item7.png",
    rating: 4.4,
    description: "Stylish round coffee table available in various colors."
  },
  {
    id: "8",
    name: (
      <>
        Reclaimed teak coffee <br /> table <br />
      </>
    ),
    price: "Rs. 25,200.00",
    image: "/item8.png",
    rating: 4.9,
    description: "Eco-friendly reclaimed teak coffee table with a rustic charm."
  },
  {
    id: "9",
    name: "Plain console_",
    price: "Rs. 258,200.00",
    image: "/item9.png",
    rating: 4.1,
    description: "Simple yet elegant console table to complement your decor."
  },
  {
    id: "10",
    name: "Reclaimed teak Sideboard",
    price: "Rs. 200,000.00",
    image: "/item10.png",
    rating: 4.6,
    description: "Spacious sideboard crafted from reclaimed teak wood."
  },
  {
    id: "11",
    name: "SJP_0825",
    price: "Rs. 20,000.00",
    image: "/item11.png",
    rating: 4.0,
    description: "Compact and versatile piece for your modern living space."
  },
  {
    id: "12",
    name: "Bella chair and table",
    price: "Rs. 10,000.00",
    image: "/item12.png",
    rating: 4.7,
    description: "Comfortable Bella chair paired with a functional table."
  },
  {
    id: "13",
    name: "Granite square side table",
    price: "Rs. 258,800.00",
    image: "/item13.png",
    rating: 4.3,
    description: "Elegant granite square side table for a modern look."
  },
  {
    id: "14",
    name: "Asgaard_sofa",
    price: "Rs. 250,000.00",
    image: "/item14.png",
    rating: 4.5,
    description: "Luxurious Asgaard sofa with superior comfort and design."
  },
  {
    id: "15",
    name: "Maya sofa three seater",
    price: "Rs. 115,000.00",
    image: "/item15.png",
    rating: 4.6,
    description: "Spacious three-seater Maya sofa for a cozy setting."
  },
  {
    id: "16",
    name: "Outdoor sofa set",
    price: "Rs. 244,000.00",
    image: "/item16.png",
    rating: 4.8,
    description: "Durable outdoor sofa set for enjoying the open air in style."
  },
];



export default function productPage({ params }: { params: { id: string } }) {

    const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound(); // Handle 404
  }

  const [quantity, setQuantity] = useState<number>(0);

  const increment = () => setQuantity((prev) => prev + 1); // Increase the value
  const decrement = () => setQuantity((prev) => Math.max(0, prev - 1)); // Decrease the value, prevent going below 1

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


  
  // const handleAddToCart = () => {
  //   const existingItem = cartItems.find((item) => item.id === product.id);
  //   if (existingItem) {
  //     setCartItems((prev) =>
  //       prev.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + quantity }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity }]);
  //   }
  // };


 
 
  const sizes = ["L", "XL", "XS"];
  const colors = ["bg-[#816DFA]", "bg-black", "bg-[#CDBA7B]"]; // Add color classes here


  return (

    <div className="w-full">
      
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
          <span className="font-md text-black">{product.name}</span>
        </div>
      </div>
      
      <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
        
     
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Left Column */}
          <div className="flex flex-col md:flex-row gap-4 md:pl-8 pl-0">
            {/* Small Images Column */}
            <div className="flex md:flex-col gap-4 md:gap-6 md:p-4 p-0">
              <div className="flex justify-center items-center md:w-[76px] md:h-[78px] w-[60px] h-[60px] bg-[#FFF9E5] rounded-lg">
                <Image
                  src="/sm1.png"
                  alt="Sofa Image"
                  height={300}
                  width={500}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center items-center md:w-[76px] md:h-[78px] w-[60px] h-[60px] bg-[#FFF9E5] rounded-lg">
                <Image
                  src="/sm2.png"
                  alt="Sofa Image"
                  height={100}
                  width={600}
                  className="mb-5 object-contain"
                />
              </div>
              <div className="flex justify-center items-center md:w-[76px] md:h-[78px] w-[60px] h-[60px] bg-[#FFF9E5] rounded-lg">
                <Image
                  src="/sm3.png"
                  alt="Sofa Image"
                  height={100}
                  width={500}
                  className="mb-14 object-contain"
                />
              </div>
              <div className="flex justify-center items-center md:w-[76px] md:h-[78px] w-[60px] h-[60px] bg-[#FFF9E5] rounded-lg">
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
            <div className="rounded-lg flex justify-center items-center md:w-[400px] md:h-[450px] w-[300px] h-[350px] bg-[#FFF9E5] md:mt-3 pr-">
            <img
            src={product.image}
            alt="product"
            className="w-full h-auto rounded-lg"
          />
             
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-3xl mb-4 font-medium">{product.name}</h3>
            <p className="text-2xl text-gray-500">{product.price}</p>
            <div className="flex items-center space-x-2 mt-2">
            <div className="flex items-center space-x-2">
            <p className="text-lg "></p>
            {renderStars(product.rating)}
          </div>
              {/* <FaStar size={20} className="text-[#FFDA5B]" />
              <FaStar size={20} className="text-[#FFDA5B]" />
              <FaStar size={20} className="text-[#FFDA5B]" />
              <FaStar size={20} className="text-[#FFDA5B]" />
              <FaStarHalf size={20} className="text-[#FFDA5B]" /> */}
              <span className="text-[#9F9F9F] text-2xl">|</span>
              <span className="text-[#9F9F9F] pl-4">5 Customer Reviews</span>
            </div>
            <p className="mt-4 text-gray-700 md:text-base text-sm">
          {product.description}
              {/* Setting the bar as one of the loudest speakers in its class, the Kilburn <br /> is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended highs for a <br /> sound. */}

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
                  <RxHeart size={25} className="text-red-400 md:ml-40 ml-10" />
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Divider */}
        <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>
        <div className="w-full mt-8 md:pr-20 pr-0">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg md:ml-24 ml-0">
            <Image
              src="/p1.png"
              alt="Furniture Image 1"
              height={400}
              width={400}
              className="rounded-lg md:w-[605px] md:h-[348px] bg-[#FFF9E5]"
            />
            <Image
              src="/p2.png"
              alt="Furniture Image 2"
              height={400}
              width={400}
              className="rounded-lg md:w-[605px] md:h-[348px] bg-[#FFF9E5]"
            />
          </div>

        </div>
        {/* Divider */}
        <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>

<Related />

      </div>
      
      {/* Features Section */}
    <div className="scroll-pr-24">
      <Feature />
      </div>
       
    </div>
  );
}




// function setSuccessMessage(arg0: string) {
//   throw new Error('Function not implemented.');
// }

// function useCart(): { addToCart: any; } {
//   throw new Error('Function not implemented.');
// }
// {isCartOpen && (

//   <div className="fixed top-0 right-0 w-96 h-[1000px] bg-white p-6 shadow-lg" style={{ zIndex: 9999 }}>
//     <div className="flex justify-between items-center mb-6">
//       <h1 className="text-xl font-semibold">Shopping Cart</h1>

//       <button
//         onClick={() => setIsCartOpen(false)}
//         className="text-xl font-bold text-gray-400"
//       >
//         <BsBagX />
//         {/* &times; */}
//       </button>
//     </div>
//     <div className="w-10/12 border-t-2 border-[#D9D9D9] my-8"></div>

//     <div className="space-y-4">
//       {cartItems.map((product) => (
//         <div key={product.id} className="flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-20 h-20 object-cover rounded-lg bg-[#FBEBB5] mt-2"
//             />
//             <div>
//               <p className="font-medium">{product.name}</p>
//               <div className="space-x-2">
//                 <span >1</span>
//                 <span> X </span>
//                 <span className="text-[#B88E2F]">Rs. 250,000.00</span>
//               </div>
//             </div>
//           </div>
//           <span

//             className="text-xl text-[#9F9F9F] "
//           >
//             <MdCancel />
          
//           </span>
//         </div>
//       ))}
//     </div>

//     <div className="mt-40 pt-40">
//       <div className="flex justify-between text-lg">
//         <span>Subtotal</span>
//         <span className="text-[#B88E2F] md:mr-4">
//           Rs. 250,000.00

//         </span>
//       </div>
//       <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>
//       <div className="mt-4 flex gap-14">
//         <Link href='/cart'>
//           <button className="bg-white text-black px-7 py-2 border border-black rounded-full transition-all duration-300 hover:outline hover:outline-2 hover:outline-gray-300">
//             View Cart
//           </button>
//         </Link>
//         <Link href='/checkout'>
//           <button className="bg-white text-black border border-black rounded-full px-7 py-2 transition-all duration-300 hover:outline hover:outline-2 hover:outline-gray-300">
//             Checkout
//           </button>
//         </Link>
//       </div>
//     </div>
//   </div>
// )}
// {/* Overlay */}
// {isCartOpen && (
//   <div
//     onClick={toggleCart}
//     className="fixed inset-0 bg-black bg-opacity-50 z-50" style={{ zIndex: 9998 }}
//   ></div>
// )}