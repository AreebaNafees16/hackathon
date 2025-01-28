// import React from 'react'
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link';
// import { Product } from '../productdata/products';

// const ProductListing = ({product}:{product:Product}) => {
 
//   return (
//     <div>
      
//         {/* Banner Section */}
//         {/* Product List */}
//             <div
//               className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <Link href={`/shop/${product.id}`}>
//               <Image
//                 src={urlFor(product.image).url()} // Convert ImageUrlBuilder to string URL
//                 alt={product.name}
//                 height={300} 
                
//                 width={300}
//                 className="h-[250px] w-full object-cover"
//               />
//               </Link>
//               {/* Product Details */}
//               <div className="p-4 text-center">
//                 {/* Product Name */}
//                 <p className="text-lg font-medium text-gray-800">{product.name}</p>
//                 {/* Product Price */}
//                 <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
//               </div>
//             </div>
          
//         </div>

      
//   )
// }

// export default ProductListing

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface Product {
  _id: string;
  name: string;
  description: string;
  discountPercentage: number;
  price: number;
  image: string;
  stockLevel: number;
  slug: { current: string };
}

export default function Product() {
  const [sanityData, setSanityData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = `*[_type == "product"]{
        _id,
        name,
        description,
        discountPercentage,
        price,
         "image": image.asset->url,
        stockLevel,
        slug
      }`;
      const data = await client.fetch(query);
      setSanityData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-4 py-8 sm:py-12 md:pl-20 pl-14">
      {sanityData.map((item) => (
        <div key={item._id} className="flex flex-col w-[250px] h-[440px] bg-white shadow-md transition-transform transform hover:scale-105">
          <Link href={`/shop/${item.slug?.current || ''}`}>
            <div className="w-[250px] h-[280px] sm:h-[290px] mb-4">
              {item.image ? (
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={800}
                  height={800}
                  className="w-full h-full "
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p>No Image</p>
                </div>
              )}
            </div>
            <h2 className="text-lg font-medium text-black hover:text-blue-500 pl-3">{item.name}</h2>
            <div className="flex gap-4 pl-3">
                                            <h1 className="font-[600] text-[22px] leading-[30px] text-amber-400">
                                                Rs. {item.price}
                                            </h1>
                                            <h1 className="font-[400] text-[18px]  text-gray-500">
                                               -{item.discountPercentage}%
                                            </h1>
                                        </div>

    {/* Stock Level */}
    {/* <div className="mt-4">
      <p className="text-sm text-gray-600 mb-1">
        Stock Level:{" "}
        {item.stockLevel > 0 ? (
          <span className="text-green-600 font-bold">{item.stockLevel}</span>
        ) : (
          <span className="text-red-600 font-bold">Out of Stock</span>
        )}
      </p> */}

      {/* Stock Level Line */}
      {/* <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${
            item.stockLevel > 0 ? "bg-green-500" : "bg-red-500"
          }`}
          style={{
            width: `${Math.min(item.stockLevel / 100, 1) * 100}%`, // Calculate width based on stock level
          }}
        ></div>
      </div>
    </div> */}




    {/* Stock Level Badge */}
    <div className="mt-4 ml-2">
      <span
        className={`text-sm px-2 py-1 rounded-full font-semibold ${
          item.stockLevel > 50
            ? "bg-green-200 text-green-800"
            : item.stockLevel > 0
            ? "bg-yellow-200 text-yellow-800"
            : "bg-red-200 text-red-800"
        }`}
      >
        {item.stockLevel > 50
          ? "In Stock"
          : item.stockLevel > 0
          ? "Limited Stock"
          : "Out of Stock"}
      </span>
    </div>

    {/* Stock Progress Bar with Labels */}
    {/* <div className="mt-3">
      <div className="flex justify-between text-sm mb-1">
        <span>Low</span>
        <span>High</span>
      </div>
      <div className="relative w-[50px] bg-gray-200 h-2 rounded-full">
        <div
          className={`h-2 rounded-full ${
            item.stockLevel > 50
              ? "bg-green-500"
              : item.stockLevel > 0
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
          style={{
            width: `${
              item.stockLevel > 100
                ? 100
                : Math.max(0, (item.stockLevel / 100) * 100)
            }%`,
          }}
        ></div>
      </div>
    </div> */}

            {/* <p className="text-black text-lg">Rs. {item.price}</p> */}
          </Link>
        </div>
      ))}
    </section>
  );
}







// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';



// interface Product {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   slug: {current: string};
// }
 


//  {/* Products Grid */}
//  export default function Product(){

//   const [sanityData, setSanityData] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//       const fetchData = async () => {
//           setLoading(true); // Set loading to true before fetching data
//           const query = `*[_type == "product"]{
//             _id
//               title,
//              description,
//               price,
//               image,
//               slug
//           }`;

//           const data = await client.fetch(query);
// console.log(data)
//           setSanityData(data);
//           setLoading(false); // Set loading to false after fetching data
//       };

//       fetchData();
//   }, []);

//   return (
 
//  <section className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-4 py-8 sm:py-12">
//  {sanityData.map((item) => (
//    <div key={item._id} className="flex flex-col items-center sm:items-start text-left rounded-lg md:pl-10">
//      <Link href={`/shop/${item.slug.current}`} className="">
//        {/* Image Container */}
//        <div className="w-[250px] h-[180px] sm:h-[200px] mb-4 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
       
//          <Image
//            src={urlFor(item.image).url()}
//            alt="product"
//            width={200}
//            height={200}
//            className="w-full h-full"
//          />
       
//        </div>
//        {/* Product Details */}
//        <h2 className="text-lg font-medium text-black hover:text-blue-500 text-left sm:text-left">{item.title}</h2>
      
//        <p className="text-black text-lg text-left sm:text-left">{item.price}</p>
//      </Link>
//    </div>
//  ))}
// </section>
//   )
// }















// const products = [
//   { id: "1", name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/item1.png" },
//   {
//     id: "2", name: (
//       <>
//         Granite dining table with <br /> dining chair
//       </>
//     ), price: "Rs. 25,000.00", image: "/item2.png"
//   },
//   {
//     id: "3", name: (
//       <>
//         Outdoor bar table and <br /> stool
//       </>
//     ), price: "Rs. 25,000.00", image: "/item3.png"
//   },
//   {
//     id: "4", name: (
//       <>
//         Plain console with teak <br /> mirror <br />
//       </>
//     ), price: "Rs. 25,000.00", image: "/item4.png"
//   },
//   { id: "5", name: "Grain coffee table", price: "Rs. 15,000.00", image: "/item5.png" },
//   { id: "6", name: "Kent coffee table", price: "Rs. 225,000.00", image: "/item6.png" },
//   {
//     id: "7", name: (
//       <>
//         Round coffee table_color <br /> 2 <br />
//       </>
//     ), price: "Rs. 251,000.00", image: "/item7.png"
//   },
//   {
//     id: "8", name: (
//       <>
//         Reclaimed teak coffee <br /> table <br />
//       </>
//     ), price: "Rs. 25,200.00", image: "/item8.png"
//   },
//   { id: "9", name: "Plain console_", price: "Rs. 258,200.00", image: "/item9.png" },
//   { id: "10", name: "Reclaimed teak Sideboard", price: "Rs. 200,000.00", image: "/item10.png" },
//   { id: "11", name: "SJP_0825", price: "Rs. 20,000.00", image: "/item11.png" },
//   { id: "12", name: "Bella chair and table", price: "Rs. 10,000.00", image: "/item12.png" },
//   { id: "13", name: "Granite square side table", price: "Rs. 258,800.00", image: "/item13.png" },
//   { id: "14", name: "Asgaard_sofa", price: "Rs. 250,000.00", image: "/item14.png" },
//   { id: "15", name: "Maya sofa three seater", price: "Rs. 115,000.00", image: "/item15.png" },
//   { id: "16", name: "Outdoor sofa set", price: "Rs. 244,000.00", image: "/item16.png" },
// ];


//   <section className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-4 py-8 sm:py-12">
//  {products.map((product) => (
//    <div key={product.id} className="flex flex-col items-center sm:items-start text-left rounded-lg md:pl-10">
//      <Link href={`/shop/${product.id}`} className="">
//        {/* Image Container */}
//        <div className="w-[250px] h-[180px] sm:h-[200px] mb-4 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
//          <img
//            src={product.image}
//            alt="product"
//            className="w-full h-full"
//          />
//        </div>
//        {/* Product Details */}
//        <h2 className="text-lg font-medium text-black hover:text-blue-500 text-left sm:text-left">{product.name}</h2>
//        <p className="text-black text-lg text-left sm:text-left">{product.price}</p>
//      </Link>
//    </div>
//  ))}
// </section>