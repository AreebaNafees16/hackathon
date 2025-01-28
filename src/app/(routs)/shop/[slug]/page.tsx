"use client"
import Link from 'next/link';
import React, { useState, useEffect, Suspense, } from 'react';
import Image from 'next/image';
import { BsBagX, BsFacebook } from 'react-icons/bs';
import { FaHeart, FaLinkedin, FaRegHeart, FaStar, FaStarHalf } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import { AiFillTwitterCircle } from "react-icons/ai";
import { RxHeart, RxHeartFilled } from 'react-icons/rx';

import Feature from '@/app/components/feature';


import {client} from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image';
import product from '@/sanity/schemaTypes/product';
import { CiHeart } from 'react-icons/ci';
import QuantitySelector from '@/app/components/counter';
import Related from '@/app/components/related';




interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  image: { asset: { _ref: string } };
}

interface PageProps {
  params: {
      slug: string; // Specify the type of slug
  };
}


export default function productPage({ params }: PageProps) {
  
// export default async function productPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState<number>(1);
  // const [quantity, setQuantity] = useState<number>(1);
const [productData, setProductData] = useState<Product | null>(null);
const [wishlist, setWishlist] = useState<string[]>([]);

useEffect(() => {
    const fetchProduct = async () => {
        const query = `*[_type == "product" && slug.current == $slug]{
        
    _id,
    name,
    description,
    price,
    discountPercentage,
    category,
    image,
    slug
  }`;

  // const product = await client.fetch(query, { slug: params.id });
        const product = await client.fetch(query, { slug: params.slug });
        setProductData(product[0]);
    };

    fetchProduct();
}, [params.slug]);

const [cartCount, setCartCount] = useState(0);
const [showPopup, setShowPopup] = useState(false);


useEffect(() => {
  // Initialize cart count from localStorage
  const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
  setCartCount(savedCart.length);
}, []);



const addToCart = (id: string) => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    const updatedCart = [...savedCart, id];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    

    setCartCount(updatedCart.length);
    
    // Update the cart count
    setShowPopup(true); 
    
    // Show the popup
    // alert('Product added to cart!');
     // Hide the popup after 3 seconds


     setTimeout(() => {
      setShowPopup(false);
    }, 3000);
};


  // Initialize wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  // Add/remove product from wishlist
  const toggleWishlist = (id: string) => {
    let updatedWishlist;
    if (wishlist.includes(id)) {
      updatedWishlist = wishlist.filter((itemId) => itemId !== id);
    } else {
      updatedWishlist = [...wishlist, id];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };


if (!productData) {
    return <div className="text-center py-20">Product not found</div>;
}


  // Define quantity state
  

  // // Increase Quantity
  // const incrementQuantity = () => {
  //   setQuantity((prev) => prev + 1);
  // };

  // // Decrease Quantity (Ensure it doesn't go below 1)
  // const decrementQuantity = () => {
  //   setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  // };


  //   const product = products.find((p) => p.id === params.id);

  // if (!product) {
  //   notFound(); // Handle 404
  // }

//   const { slug } = params;

//   const product = products.find((p) => p.slug === slug);
// // Handle 404 if product not found

//   if (!product) {
//     notFound(); // Handle 404
//   }

// const router = useRouter();
//   const [product, setProduct] = useState<any | null>(null);

//   // Find product by slug from local array
//   useEffect(() => {
//     const foundProduct = products.find((p) => p.slug === params.slug);
//     if (foundProduct) {
//       setProduct(foundProduct);
//     } else {
//       router.push("/404"); // Redirect to 404 if not found
//     }
//   }, [params.slug, router]);

//   if (!product) {
//     return <div className="text-center py-20">Loading...</div>;
//   }
  


  // const [quantity, setQuantity] = useState<number>(0);

  const increment = () => setQuantity((prev) => prev + 1); // Increase the value
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1)); // Decrease the value, prevent going below 1

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setQuantity(value >= 1 ? value : 1); // Ensure value is at least 1
  };

// Handler for quantity change
const handleQuantityChange = (newQuantity: number) => {
  setQuantity(newQuantity);
};

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
          <span className="font-md text-black">{productData.name}</span>
        </div>
        
      </div>
      
      
      <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
        
     
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Left Column */}
          <div className="flex flex-col md:flex-row gap-4 md:pl-8 pl-0">
            {/* Small Images Column */}
          


             <div className="flex md:flex-col gap-4 md:gap-6 md:p-4 p-0">
            
    <div
      
      className="flex justify-center md:w-[56px] md:h-[68px] w-[60px] h-[60px]"
    >
      <Image
        src={urlFor(productData.image).url()}
        alt="p"
        height={300}
        width={500}
        className="rounded-lg"
      />
      
    </div>
    <div
      
      className="flex justify-center md:w-[56px] md:h-[68px] w-[60px] h-[60px]"
    >
      <Image
        src={urlFor(productData.image).url()}
        alt="p"
        height={300}
        width={500}
        className="rounded-lg"
      />
      
    </div>
    <div
    
      className="flex justify-center md:w-[56px] md:h-[68px] w-[60px] h-[60px]"
    >
      <Image
        src={urlFor(productData.image).url()}
        alt="p"
        height={300}
        width={500}
        className="rounded-lg"
      />
      
    </div>
    <div
      
      className="flex justify-center md:w-[56px] md:h-[68px] w-[60px] h-[60px]"
    >
      <Image
        src={urlFor(productData.image).url()}
        alt="p"
        height={300}
        width={500}
        className="rounded-lg"
      />
      
    </div>
  
            </div> 

            {/* Medium Image */}
            <div className="rounded-lg flex justify-center items-center md:w-[350px] md:h-[390px] w-[300px] h-[350px] bg-[#FFF9E5] md:mt-3 pr-">
            <img
            src={urlFor(productData.image).url()}
            alt="product"
            className="w-full h-full rounded-lg"
          />
             
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-3xl mb-4 font-medium">{productData.name}</h3>
            <div className="flex gap-3">
                                            <h1 className="text-2xl text-gray-500">
                                                Rs. {productData.price}
                                            </h1>
                                            <h1 className="font-[400] text-[18px]  text-gray-500">
                                               -{productData.discountPercentage}%
                                            </h1>
                                        </div>
            {/* <p className="text-2xl text-gray-500">Rs. {productData.price}.00</p> */}
            <div className="flex items-center space-x-2 mt-2">
            <div className="flex items-center space-x-2">
            <div className="flex justify-center items-center gap-[20px] mt-2">  
                                     <div className="flex justify-center items-center gap-1">
                             <FaStar className='scale-[1] text-[#FFC700]' />
                            <FaStar className='scale-[1] text-[#FFC700]' />
                            <FaStar className='scale-[1] text-[#FFC700]' />
                             <FaStar className='scale-[1] text-[#FFC700]' />
                            <FaStarHalf className='scale-[1] text-[#FFC700]' />
                        </div>
                        </div>
            {/* <span className="text-lg">
            {renderStars(product.rating)}
            </span> */}
          </div>
          
              <span className="text-[#9F9F9F] text-2xl">|</span>
              <span className="text-[#9F9F9F] pl-4">5 Customer Reviews</span>
            </div>
            <p className="mt-4 text-gray-700 md:text-base text-xs">
          {productData.description}
             
              
            </p>

            
            {/* <ProductOptionsSelector product={product} /> */}
            

            <div className="flex items-center gap-4 mt-6 mb-5">
           
              <div className="flex items-center">
              {/* <button
                  onClick={decrementQuantity}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-12 text-center"
                />
                <button
                  onClick={incrementQuantity}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  +
                </button> */}

                {/* <button
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
                </button> */}
                 <QuantitySelector
                  initialQuantity={quantity}
                  onQuantityChange={handleQuantityChange}
                />


              </div>
              
              <button
                onClick={() => addToCart(productData._id)}
                className="bg-primary text-black border rounded-md md:px-8 md:py-3  transition-all duration-300 hover:outline hover:outline-2 hover:outline-black">
                Add To Cart
              </button>
              <button
                onClick={() => toggleWishlist(productData._id)}
                className="flex items-center justify-cente border rounded-md px-3 py-3 bg-primmary text-red-500"
              >
                {wishlist.includes(productData._id) ? (
                  <FaHeart size={20} />
                ) : (
                  <CiHeart size={25} />
                )}
              </button>
              <span>
                {wishlist.includes(productData._id)
                  ? "Added to Wishlist"
                  : "Add to Wishlist"}
              </span>

              {/* Popup Message */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-amber-400 text-black px-4 py-2 rounded shadow-lg animate-slide-in">
          Product added to cart!
        </div>
      )}
            </div>
            
         
            
            {/* Divider */}
            <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>

            <div className="flex justify mb-2 text-[#9F9F9F]">
              <span>SKU</span>
              <span className='ml-11'>:</span>
              <span className='ml-2'>ADF566</span>
            </div>
            <div className="flex justify mb-2 text-[#9F9F9F]">
              <span>Category</span>
              <span className='ml-2'>:</span>
              <span className='ml-2'>{productData.category}</span>
            </div>
            <div className="flex justify mb-2 text-[#9F9F9F]">
              <span>Tags</span>
              <span className='ml-10'>:</span>
              <span className='ml-2'>Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex justify mb-2 text-[#9F9F9F]">
              <span>Share</span>
              <span className='ml-8'>:</span>
              <span className="flex space-x-3 ml-2">
                <BsFacebook className="text-black cursor-pointer" />
                <FaLinkedin className="text-black cursor-pointer" />
                <AiFillTwitterCircle size={19} className="text-black cursor-pointer" />
                <span className="flex items-center gap-4">
              {/* Wishlist Button */}
              {/* <button
                onClick={() => toggleWishlist(productData._id)}
                className="flex items-center justify-center text-red-500 scale-110 md:ml-40"
              >
                {wishlist.includes(productData._id) ? (
                  <RxHeartFilled />
                ) : (
                  <RxHeart />
                )}
              </button>
              <span>
                {wishlist.includes(productData._id)
                  ? "Added to Wishlist"
                  : "Add to Wishlist"}
              </span> */}
            </span>
               
              </span>
            </div>

          </div>
        </div>
        {/* Divider */}
        <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>
        {/* <ProductDetails product={product} /> */}
        
        {/* <ProductDetails product={productData} /> */}
        <div className="flex flex-col lg:flex-row lg:gap-8 text-center items-center mt-[40px] lg:mt-[60px] lg:ml-[30%]">
  <h1 className="text-[18px] lg:text-[22px] font-semibold">Description</h1>
  <h1 className="opacity-[0.5] text-[18px] lg:text-[22px] font-semibold mt-2 lg:mt-0">Additional Information</h1>
  <h1 className="opacity-[0.5] text-[18px] lg:text-[22px] font-semibold mt-2 lg:mt-0">Reviews [5]</h1>
</div>

<div className="w-[90%] lg:w-[67%] mx-auto lg:ml-[15%] my-[20px] lg:my-[30px] opacity-[0.6] text-justify">
  <p>
    Embodying the raw, wayward spirit of rock and roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
  </p>
  <br />
  <p>
    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
  </p>
</div>


{/* 
        <div className="lg:flex flex-col justify-center items-center gap-[37px] mx-[100px] ">
        <div className="flex justify-center items-center gap-[52px]">
                    <h1 className="font-[500] text-[24px] leading-[36px] text-[#000000]">Description</h1>
                    <h1 className="font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">Additional Information</h1>
                    <h1 className="font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">Reviews [5]</h1>

                </div>
                <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] w-[1026px]">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</h1>
                <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] w-[1026px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</h1>

        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 rounded-lg md:ml-52 ml-0">
  <Image
    src={urlFor(productData.image).url()}
    alt="Furniture Image 1"
    height={400}
    width={400}
    className="rounded-lg md:w-[405px] md:h-[448px]"
  />
  <Image
    src={urlFor(productData.image).url()}
    alt="Furniture Image 2"
    height={400}
    width={400}
    className="rounded-lg md:w-[405px] md:h-[448px]"
  />
</div>

        {/* Divider */}
        <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>
{/* related product */}
<Related />


      </div>
      
      {/* Features Section */}
    
      <Feature />
      
       
    </div>
  );
}


// "use client";
// import React, { useState, useEffect } from 'react';
// import { SlArrowRight } from "react-icons/sl";
// import { FaStarHalf } from "react-icons/fa6";
// import { FaStar } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link';
// import Image from 'next/image';
// import { AiOutlineRight } from 'react-icons/ai';

// interface Product {
//     _id: string;
//     title: string;
//     description: string;
//     price: number;


//     images: { asset: { _ref: string } };
//     slug: { current: string };
// }


// interface PageProps {
//     params: {
//         slug: string; // Specify the type of slug
//     };
// }

// const Page = ({ params }: PageProps) => {
//     const [productData, setProductData] = useState<Product | null>(null);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             const query = `*[_type == "product" && slug.current == $slug]{
//         _id,
//         title,
//         description,
//         price,
//         images,
//         slug
//       }`;

//             const product = await client.fetch(query, { slug: params.slug });
//             setProductData(product[0]);
//         };

//         fetchProduct();
//     }, [params.slug]);

//     const addToCart = (id: string) => {
//         const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//         const updatedCart = [...savedCart, id];
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//         alert('Product added to cart!');
//     };

//     if (!productData) {
//         return <div className="text-center py-20">Product not found</div>;
//     }


//     return (
//         <div className='max-w-[1440px] mx-auto overflow-hidden'>

//      {/* Header Section */}
//       <div className="relative z-10 w-[1440px] sm:h-[100px] h-[100px] mx-auto flex items-center justify-start bg-white px-6 lg:px-20">

//        {/* Breadcrumb Navigation */}
//          <div className="relative z-10 flex items-center space-x-2 text-black text-sm">
//            <Link href="/" className="hover:text-blue-500 md:-ml-12">
//            Home
//           </Link>
//         <AiOutlineRight />
//          <Link href="/shop" className="hover:text-blue-500">
//              Shop
//            </Link>
//            <span>|</span>
//            {/* <AiOutlineRight /> */}
//           <span className="font-md text-black">{productData.title}</span>
//         </div>
//       </div>


//             {/* <div className="h-full md:h-[100px] bg-[#F9F1E7] flex justify-start items-center py-2 md:py-0 px-5 md:px-[100px] gap-[24px] mb-[56.6px]">
//                 <div className="flex justify-center items-center gap-[20px]">
//                     <Link href="/" className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] hover:underline underline-offset-4 hover:text-black duration-300 ease-in-out">Home</Link>
//                     <h1 className="flex justify-center items-center"><SlArrowRight className='scale-[1]' /></h1>
//                 </div>
//                 <div className="flex justify-center items-center gap-[20px]">
//                     <Link href="/shop" className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] hover:underline underline-offset-4 hover:text-black duration-300 ease-in-out">Shop</Link>
//                     <h1 className="flex justify-center items-center"><SlArrowRight className='scale-[1]' /></h1>
//                 </div>
//                 <div className="flex justify-center items-center text-[#9F9F9F] font-[400] ">|</div>
//                 <div className="font-[400] text-[16px] text-black leading-[24px]">{productData.title}</div>
//             </div> */}

//             <div className="flex flex-col lg:flex-row justify-center items-center md:items-start gap-[105px] lg:gap-[10px] xl:gap-[105px] mx-5 md:mx-[100px] lg:mx-2 xl:mx-[100px] mb-[56.6px] lg:w-screen xl:w-full">
//                 <div className="flex flex-col lg:flex-row justify-center items-start gap-[32px]">
//                     <div className="grid grid-cols-1 grid-rows-4 justify-center items-center gap-[32px] lg:hidden xl:grid">
//                         <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
//                             <Image src={urlFor(productData.images).url()} alt={productData.alt} width={83} height={55} className='rounded-lg object-scale-down'></Image>
//                         </div>

//                         <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
//                             <Image src={urlFor(productData.images).url()} alt={productData.alt} width={83} height={55} className='rounded-lg object-scale-down'></Image>
//                         </div>
//                         <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
//                             <Image src={urlFor(productData.images).url()} alt={productData.alt} width={83} height={55} className='rounded-lg object-scale-down'></Image>
//                         </div>
//                         <div className="flex justify-center items-center bg-[#F9F1E7] w-[76px] h-[80px] rounded-[10px]">
//                             <Image src={urlFor(productData.images).url()} alt={productData.alt} width={83} height={55} className='rounded-lg object-scale-down'></Image>
//                         </div>
//                     </div>

//                     <div className="md:flex justify-center items-center bg-[#F9F1E7] h-[500px] w-[423px] rounded-[10px] hidden">
//                         <Image src={urlFor(productData.images).url()} 
//                         alt="productData" width={481} height={391} className='rounded-lg w-[481px] h-[500px] object-scale-down'></Image>
//                     </div>
//                 </div>

//                 <div className="flex flex-col justify-center items-center md:items-start gap-[18px]">
//                     <div className="">
//                         <h1 className="font-[400] text-[42px] leading-[63px]">{productData.title}</h1>
//                         <h1 className="font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">Rs. {productData.price}</h1>
//                     </div>
//                     <div className="flex justify-center items-center gap-[20px] mt-2">
//                         <div className="flex justify-center items-center gap-1">
//                             <FaStar className='scale-[1] text-[#FFC700]' />
//                             <FaStar className='scale-[1] text-[#FFC700]' />
//                             <FaStar className='scale-[1] text-[#FFC700]' />
//                             <FaStar className='scale-[1] text-[#FFC700]' />
//                             <FaStarHalf className='scale-[1] text-[#FFC700]' />
//                         </div>
//                         <div className="font-[400] text-xl text-[#9F9F9F]">|</div>
//                         <div className="font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F]">5 Customer Review</div>
//                     </div>
//                     <h1 className="font-[400] text-[13px] text-black text-center md:text-left w-screen md:w-full mx-5 md:mx-0 custom:w-[424px] mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas odio exercitationem, dolor alias laborum ad incidunt a rerum quod itaque. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur.</h1>

//                     <h1 className="font-[400] text-[14px] leading-[21px] text-[#9F9F9F]">Size</h1>
//                     <div className="flex justify-center items-center gap-[12px]">
//                         <div className="flex justify-center items-center size-[30px] rounded-[5px] bg-[#F9F1E7] text-black font-[400] text-[13px] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out">XL</div>
//                         <div className="flex justify-center items-center size-[30px] rounded-[5px] bg-[#F9F1E7] text-black font-[400] text-[13px] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out">L</div>
//                         <div className="flex justify-center items-center size-[30px] rounded-[5px] bg-[#F9F1E7] text-black font-[400] text-[13px] hover:bg-[#B88E2F] hover:text-white duration-300 ease-in-out">XS</div>
//                     </div>

//                     <h1 className="font-[400] text-[14px] leading-[21px] text-[#9F9F9F]">Color</h1>
//                     <div className="flex justify-center items-center gap-[12px]">
//                         <div className="flex justify-center items-center size-[30px] bg-[#816DFA] text-black font-[400] text-[13px] rounded-full hover:ring-1 ring-black duration-300 ease-in-out"></div>
//                         <div className="flex justify-center items-center size-[30px] bg-[#000000] text-black font-[400] text-[13px] rounded-full hover:ring-1 ring-black duration-300 ease-in-out"></div>
//                         <div className="flex justify-center items-center size-[30px] bg-[#B88E2F] text-black font-[400] text-[13px] rounded-full hover:ring-1 ring-black duration-300 ease-in-out"></div>


//                     </div>

//                     <div className="flex flex-col md:flex-row justify-center items-center gap-[12px]">

//                         <button onClick={() => addToCart(productData._id)} className="w-[215px] h-[64px] flex justify-center px-3 rounded-[10px] items-center gap-3 border border-[#9F9F9F] bg-white hover:bg-black/10 hover:shadow-lg shadow-black duration-300 ease-in-out">Add To Cart</button>

//                     </div>

//                     <div className="w-[605.1px] h-[1px] bg-[#D9D9D9] my-[40px]"></div>

//                     <div className="flex justify-center items-center gap-[12px]">
//                         <div className="flex flex-col justify-start items-start gap-2">
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">SKU</h1>
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Category</h1>
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Tags</h1>
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Share</h1>

//                         </div>
//                         <div className="flex flex-col justify-start items-start gap-2">
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">:</h1>
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">:</h1>
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">:</h1>
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">:</h1>
//                         </div>
//                         <div className="flex flex-col justify-start items-start gap-2">
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">SS001</h1>
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Sofas</h1>
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">Sofa, Chair, Home, Shop</h1>
//                             <h1 className="font-[400] text-[16px] leading-[24px] text-[#000000] flex justify-center items-center gap-[12px]">
//                                 <FaFacebook />
//                                 <FaLinkedin />
//                                 <FaTwitter />
//                             </h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <hr className='mb-[56.6px]' />
//             <div className="lg:flex flex-col justify-center items-center gap-[37px] mx-[100px] hidden ">
//                 <div className="flex justify-center items-center gap-[52px]">
//                     <h1 className="font-[500] text-[24px] leading-[36px] text-[#000000]">Description</h1>
//                     <h1 className="font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">Additional Information</h1>
//                     <h1 className="font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">Reviews [5]</h1>

//                 </div>
//                 <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] w-[1026px]">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</h1>
//                 <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F] w-[1026px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</h1>

//                 {/* <div className="flex justify-center gap-[37px] items-center">
//                     <div className="bg-[#f9f1e7] rounded-[10px] w-[605px]">
//                         <Image src={urlFor(productData.image).url()} alt={productData.alt} width={605} height={348} className='w-[605px] h-[348px] object-scale-down rounded-lg'></Image>
//                     </div>
//                     <div className="bg-[#f9f1e7] rounded-[10px] w-[605px]">
//                         <Image src={urlFor(productData.image).url()} alt={productData.alt} width={605} height={348} className='w-[605px] h-[348px] object-scale-down rounded-lg saturate-200'></Image>
//                     </div>
//                 </div> */}

//             </div>

//             <hr className='my-[56.6px]' />




//         </div>
//     )
// }

// export default Page

















  {/* slid bar  */}

function setQuantity(arg0: (prev: any) => number) {
  throw new Error('Function not implemented.');
}
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
  





// const [isCartOpen, setIsCartOpen] = useState(false);
// const [cartItems, setCartItems] = useState([

//   {
//     id: 1,
//     name: 'Asgaard Sofa',
//     price: 'Rs. 250,000.00',
//     image: '/item14.png',
    
//   },
 
  
// ]);

// const handleAddToCart = () => {
//   setIsCartOpen(true);
// };

// const handleRemoveItem = (id: number) => {
//   setCartItems(cartItems.filter(item => item.id !== id));
// };
// const toggleCart = () => {
//   setIsCartOpen(!isCartOpen);
// };















// huriya 

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