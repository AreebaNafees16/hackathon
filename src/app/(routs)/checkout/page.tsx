"use client"
import Feature from "@/app/components/feature";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
 import { client } from '@/sanity/lib/client';
 import React, { useState, useEffect } from "react";
 import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Product {
    title: string;
    _id: string; // Adjust the type as per your database
    name: string;
    description: string;
    price: number;
    
    image: string;
    alt: string;
    slug: string;
    quantity: number;
}

export default function CheackOut() {


    const [sanityData, setSanityData] = useState<Product[]>([]);
    const [cart, setCart] = useState<string[]>([]);
    const [cartItems, setCartItems] = useState<Product[]>([]);
   

    // Fetch data from Sanity
    useEffect(() => {
        const fetchData = async () => {
            const query = `*[_type == "product"]{
                _id,
                name,
                description,
                price,
              
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



    // Load cart items from localStorage
    // useEffect(() => {
    //     const savedCart = JSON.parse(localStorage.getItem("cart") || "[]") as string[]; // Assuming _id is string
    //     const items = savedCart.map((id) => sanityData.find((p) => p._id === id)).filter(Boolean) as Product[];
    //     setCartItems(items);
    // }, [sanityData]);



    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cart");
        alert("Your order has been placed!");
    };


  return (
    <div className="w-full">
      <section className="relative w-full h-[200px] sm:h-[316px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>
        <div className="relative z-10">
          <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-16 ml-10" />
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">Checkout</h1>
        </div>
        <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <AiOutlineRight className="text-black" />
          <span>Checkout</span>
        </div>
      </section>

      {/* Billing Section */}
      <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8 mb-24">
        <div className="w-full lg:w-1/2 md:mx-20">
          <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-6">
              <div className="mr-2">
                <label htmlFor="firstName" className="block mb-2">First Name</label>
                <input type="text" id="firstName" className="w-full h-[60px] sm:w-[180px] border border-gray-500 rounded-lg p-3" />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2">Last Name</label>
                <input type="text" id="lastName" className="w-full h-[60px] sm:w-[180px] border border-gray-500 rounded-lg p-3" />
              </div>
            </div>

          </div>

          <div className="mt-4 relative">
            <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
            <input type="text" id="companyName" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
          </div>
          <div className="mt-4">
            <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>

            <select

              id="country"

              className="w-full h-[60px] sm:w-[390px] text-gray-400 border-gray-600 rounded-lg border p-3 bg-white appearance-none active pr-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundPosition: 'right 1rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "20px 20px"
              }}

            >

              <option value="LK" disabled selected>
                Select a Country
              </option>
              <option value="LK">Sri Lanka</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>

            </select>
          </div>


          <div className="mt-4">
            <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
            <input type="text" id="address" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
          </div>

          <div className="gap-4 mt-4">
            <div>
              <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
              <input type="text" id="town" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
            </div>
            <div className="mt-4">
              <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>

              <select

                id="country"

                className="w-full h-[60px] sm:w-[390px] text-gray-600 border-gray-500 rounded-lg border p-3 bg-white appearance-none active pr-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundPosition: 'right 1rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "20px 20px"
                }}

              >
                <option value="LK" disabled selected>
                  Select a Province
                </option>
                <option value="Western">Western Province</option>
                <option value="Central">Central</option>
                <option value="Southern">Southern</option>
                <option value="Northern">Northern</option>
                <option value="Eastern">Eastern</option>
                <option value="North Western">North Western</option>
                <option value="North Central">North Central</option>

              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="zip" className="block my-4 mt-6">ZIP Code</label>
            <input type="text" id="zip" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
          </div>

          <div className="mt-4">
            <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
            <input type="text" id="phone" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
            <input type="text" id="email" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
          </div>

          <div className="mt-4">
            <input type="text" id="additionalInfo" placeholder="Additional Information" className="w-full h-[60px] sm:w-[390px] border-gray-500 my-4 mt-6 rounded-lg border p-3" />
          </div>
        </div>



        {/* Order Summary */}
        <div className="w-full lg:w-1/2 md:mx-20 mt-4 lg:mt-12">
          <div className="mt-4">
            {/* Header */}
            <div className="flex justify-between py-2">
              <span className="text-xl font-bold">Product</span>
              <span className="text-xl font-bold">Subtotal</span>
            </div>


            </div>
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <div key={item._id}>

                                <div className="w-full lg:w-[533px] flex justify-between items-center">
                                    <div className="flex justify-center items-center gap-2">
                                        <div className="flex justify-center items-center size-[80px] rounded-[10px] mb-4">
                                            {item.image && (
                                                    <Image
                                                      src={urlFor(item.image).url()}
                                                      alt={item.title}
                                                      width={300}
                                                      height={300}
                                                      className="rounded-lg w-full h-full"
                                                    />
                                                  )}
                                 </div>
                                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">{item.name}</h1>

                                    </div>
                                    <h1 className="font-[400] text-[16px] leading-[24px] text-black">Rs. {item.price}</h1>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Your cart is empty</p>
                    )}

                    <div className="w-full lg:w-[533px] flex justify-between items-center">
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[black]">Total</h1>
                        <h1 className="font-[700] text-[24px] leading-[38px] text-[#B88E2F]">Rs. {totalPrice}</h1>
                    </div>


            {/* Product Rows */}
            


          {/* Payment Method */}
          <div className="flex items-center mt-5">
            <input
              type="radio"
              id="bankTransfer"
              name="payment"
              className="peer hidden"
            />
            <label
              htmlFor="bankTransfer"
              className="w-3 h-3 border-2 border-black rounded-full flex items-center justify-center cursor-pointer peer-checked:bg-black peer-checked:border-black bg-black"
            >
              <span className="w-3 h-3 bg-black rounded-full peer-checked:block hidden"></span>
            </label>
            <span className="ml-2">Direct Bank Transfer</span>
          </div>
          <p className="text-sm font-light text-[#9F9F9F] mt-2 tracking-wider">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

          <div className="flex items-center mt-4 text-[#9F9F9F]">
            <input type="radio" id="cod" name="payment" className="mr-2" />
            <label htmlFor="cod" className="text-md">Direct Bank Transfer</label>
          </div>

          <div className="flex items-center mt-3 text-[#9F9F9F]">
            <input type="radio" id="cod" name="payment" className="mr-2" />
            <label htmlFor="cod" className="text-md">Cash On Delivery</label>
          </div>
          <p className="text-sm font-light text-black mt-6 tracking-wider">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold text-black">privacy policy. </span></p>
          <div className="flex justify-center">
            <Link href='/shipment'>
            <button className="mt-6 border border-black py-3 px-14 rounded-xl text-cente hover:bg-gray-700 hover:text-white transition-colors duration-300">
              Place Order
            </button>
            </Link>
          </div>
        </div>
      </div>
        {/* Features Section */}
      <Feature />
    </div>

  )
}













// "use client"
// import Image from 'next/image'
// import { SlArrowRight } from "react-icons/sl";
// import { GoDotFill } from "react-icons/go";
// import { FaRegCircle } from "react-icons/fa";
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';
// import React, { useState, useEffect } from "react";

// interface Product {
//     _id: string; // Adjust the type as per your database
//     name: string;
//     description: string;
//     price: number;
    
//     images: string;
//     alt: string;
//     slug: string;
//     quantity: number;
// }

// const Page = () => {
//     const [sanityData, setSanityData] = useState<Product[]>([]);
//     const [cartItems, setCartItems] = useState<Product[]>([]);

//     // Fetch data from Sanity
//     useEffect(() => {
//         const fetchData = async () => {
//             const query = `*[_type == "product"]{
//                 _id,
//                 name,
//                 description,
//                 price,
//                 originalPrice,
//                 discount,
//                 "images": images.asset->url,
//                 alt,
//                 slug
//             }`;

//             const data: Product[] = await client.fetch(query);
//             setSanityData(data);
//         };

//         fetchData();
//     }, []);

//     // Load cart items from localStorage

//     useEffect(() => {
//         const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//         const items = savedCart
//             .map((id) => sanityData.find((p) => p._id === id))
//             .filter((item): item is Product => Boolean(item));
//             // .filter((p): p is Product => !!p); 
//         setCartItems(items);
//     }, [sanityData]);
    

//     useEffect(() => {
//         console.log("Sanity Data:", sanityData);
//         console.log("Cart Items:", cartItems);
//     }, [sanityData, cartItems]);
    
//     // useEffect(() => {
//     //     const savedCart = JSON.parse(localStorage.getItem("cart") || "[]") as string[]; // Assuming _id is string
//     //     const items = savedCart.map((id) => sanityData.find((p) => p._id === id)).filter(Boolean) as Product[];
//     //     setCartItems(items);
//     // }, [sanityData]);

//     const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

//     const clearCart = () => {
//         setCartItems([]);
//         localStorage.removeItem("cart");
//         alert("Your order has been placed!");
//     };
//     return (
//         <div className='max-w-[1440px] mx-auto overflow-hidden'>

//             <div className="flex flex-col justify-center items-center bg-[url('/image5.png')] w-full custom:w-[1440px] h-[316px] mb-[56.6px]">
//                 <Image src="/logo.png" alt="logo" width={77} height={77} />
//                 <h1 className="font-[500] text-[48px] leading-[72px] text-black text-center">Checkout</h1>
//                 <div className="flex justify-center items-center gap-1 text-center">
//                     <Link href="/" className='font-[500] text-[16px] leading-6 text-black hover:underline underline-offset-4'>Home</Link>
//                     <h1 className="flex justify-center items-center">
//                         <SlArrowRight className="scale-90" />
//                     </h1>
//                     <h1 className="font-[300] text-[16px] leading-6 text-black">Checkout</h1>
//                 </div>
//             </div>

//             <div className="flex flex-col xl:flex-row justify-between items-start mx-[20px] md:mx-[100px]">


//                 <div className="flex flex-col justify-start items-center md:items-start gap-[20px] w-full lg:w-auto mb-[100px]">
//                     <h1 className="font-[600] text-[36px] leading-[54px] text-black">Billing details</h1>

//                     <div className="flex justify-center items-center gap-[24px]">
//                         <div className="flex flex-col justify-center items-start gap-[10px]">
//                             <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] capitalize">First name</h1>
//                             <input type="text" placeholder="" className="w-full lg:w-[211px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
//                         </div>
//                         <div className="flex flex-col justify-center items-start gap-[10px]">
//                             <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] capitalize">last name</h1>
//                             <input type="text" placeholder="" className="w-full lg:w-[211px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
//                         </div>
//                     </div>

//                     <div className="flex flex-col justify-center items-start gap-[10px]">
//                         <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Company Name / Optional</h1>
//                         <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
//                     </div>

//                     <div className="flex flex-col justify-center items-start gap-[10px]">
//                         <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Country / Region</h1>
//                         <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
//                     </div>

//                     <div className="flex flex-col justify-center items-start gap-[10px]">
//                         <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Street address</h1>
//                         <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
//                     </div>

//                     <div className="flex flex-col justify-center items-start gap-[10px]">
//                         <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Town / City</h1>
//                         <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
//                     </div>

//                     <div className="flex flex-col justify-center items-start gap-[10px]">
//                         <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Province</h1>
//                         <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
//                     </div>

//                     <div className="flex flex-col justify-center items-start gap-[10px]">
//                         <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">ZIP code</h1>
//                         <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
//                     </div>

//                     <div className="flex flex-col justify-center items-start gap-[10px]">
//                         <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Phone</h1>
//                         <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
//                     </div>

//                     <div className="flex flex-col justify-center items-start gap-[10px]">
//                         <h1 className="font-[500] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Email address</h1>
//                         <input type="text" placeholder="" className="w-full md:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
//                     </div>

//                     <div className="flex flex-col justify-center items-start gap-[10px]">
//                         <input type="text" placeholder="Additional information" className="w-full lg:w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] px-[20px]" />
//                     </div>


//                 </div>

//                 <div className="w-full xl:w-[533px] h-full lg:h-[616px] flex flex-col justify-start items-start gap-6 lg:mt-[60px] mt-0">
//                     <div className="w-full lg:w-[533px] flex justify-between items-center">
//                         <h1 className="font-[500] text-[24px] leading-[36px] text-black">Product</h1>
//                         <h1 className="font-[500] text-[24px] leading-[36px] text-black">Subtotal</h1>

//                     </div>
//                     {cartItems.length > 0 ? (
//                         cartItems.map(item => (
//                             <div key={item._id}>

//                                 <div className="w-full lg:w-[533px] flex justify-between items-center">
//                                     <div className="flex justify-center items-center gap-2">
//                                         <div className="flex justify-center items-center bg-[#F9F1E7] size-[80px] rounded-[10px]">
//                                         {item.images ? (
//     <Image
//         src={item.images}
//         alt={item.name || "Product images"}
//         width={90}
//         height={50}
//         className="rounded-lg object-scale-down w-full h-full"
//     />
// ) : (
//     <div className="w-[90px] h-[50px] bg-gray-200 rounded-lg flex items-center justify-center">
//         <span className="text-sm text-gray-500">No Image</span>
//     </div>
// )}

//                                             {/* <Image src={item.images} alt={item.name} width={90} height={50} className='rounded-lg object-scale-down w-full h-full' /> */}
//                                         </div>
//                                         <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">{item.name}</h1>

//                                     </div>
//                                     <h1 className="font-[400] text-[16px] leading-[24px] text-black">Rs. {item.price}</h1>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-center">Your cart is empty</p>
//                     )}

//                     <div className="w-full lg:w-[533px] flex justify-between items-center">
//                         <h1 className="font-[400] text-[16px] leading-[24px] text-[black]">Total</h1>
//                         <h1 className="font-[700] text-[24px] leading-[38px] text-[#B88E2F]">Rs. {totalPrice}</h1>
//                     </div>

//                     <hr className='w-full lg:w-[533px]' />

//                     <div className="flex flex-col justify-start items-start gap-[20px]">
//                         <h1 className="font-[400] text-[16px] leading-6 text-black flex justify-center items-center gap-4"><span><GoDotFill className='scale-[2]' /></span>Direct Bank Transfer</h1>

//                         <h1 className="font-[300] text-[16px] leading-6 text-[#9F9F9F] text-justify">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</h1>

//                         <div className="flex flex-col justify-start items-start gap-[10px]">
//                             <h1 className="font-[400] text-[16px] leading-6 text-[#9F9F9F] flex justify-center items-center gap-4"><span><FaRegCircle className='scale-[1]' /></span>Direct Bank Transfer</h1>

//                             <h1 className="font-[400] text-[16px] leading-6 text-[#9F9F9F] flex justify-center items-center gap-4"><span><FaRegCircle className='scale-[1]' /></span>Cash On Delivery</h1>
//                         </div>

//                         <h1 className="font-[300] text-[16px] leading-6 text-[#000000] text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy.</span></h1>

//                         <div className="flex justify-center items-center w-full lg:w-[533px] mb-5 lg:mb-0 mt-[19px]">
//                             <button onClick={clearCart} className="w-full lg:w-[318px] h-[64px] rounded-[15px] border-[1px] border-black font-[400] text-[20px] leading-[30px] hover:text-white hover:bg-black duration-300 ease-in-out">Place order</button>
//                         </div>
//                     </div>



//                 </div>

//             </div>



//         </div>
//     )
// }

// export default Page