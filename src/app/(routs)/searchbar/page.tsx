// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   tags: string[];
//   images: { asset: { _ref: string } };
// }

// const ProductSearchPage = () => {
//   const [products, setProducts] = useState<Product[] | null>(null); // Initialize as null
//   const [searchTerm, setSearchTerm] = useState<string>("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "product"]{
//         _id,
//         title,
//         price,
//         tags,
//         images
//       }`;
//       try {
//         const productsData = await client.fetch(query);
//         console.log("Fetched Products Data:", productsData); // Log fetched data
//         setProducts(productsData || []); // Safeguard for null
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setProducts([]); // Handle errors gracefully
//       }
//     };
//     fetchProducts();
//   }, []);
  

//   // Filter products based on search term
//   const filteredProducts =
//     (products &&
//       products.filter((product) =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.tags.some((tag) =>
//           tag.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       )) ||
//     []; // Fallback to empty array

//   if (products === null) {
//     // Show a loading state if products are not yet fetched
//     return <p className="text-center">Loading...</p>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold mb-6">Search Products</h1>

//       {/* Search Input */}
//       <div className="mb-6">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search products by name or tags..."
//           className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Products List */}
//       {filteredProducts.length === 0 ? (
//         <p className="text-center text-gray-600">No products found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product._id}
//               className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
//             >
//               {/* Product Image */}
//               <div className="w-full h-48 mb-4">
//                 {product.images ? (
//                   <Image
//                     src={urlFor(product.images).url()}
//                     alt={product.title}
//                     height={192}
//                     width={192}
//                     className="object-cover w-full h-full rounded-lg"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 rounded-lg"></div>
//                 )}
//               </div>

//               {/* Product Details */}
//               <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//               <p className="text-gray-500">Rs. {product.price}.00</p>

//               {/* Tags */}
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {product.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="text-sm bg-gray-200 rounded-full px-2 py-1"
//                   >
//                     #{tag}
//                   </span>
//                 ))}
//               </div>

//               {/* View Product Link */}
//               <Link
//                 href={`/product/${product._id}`}
//                 className="text-blue-500 hover:underline mt-4 block"
//               >
//                 View Product
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductSearchPage;

"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
 // Update with your Sanity client import
 // Utility to get image URLs from Sanity

const SearchProducts = () => {
  const [products, setProducts] = useState<null | Array<any>>(null); // Products state
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        tags,
        images
      }`;
      try {
        const productsData = await client.fetch(query);
        console.log("Fetched Products Data:", productsData); // Debug log
        setProducts(productsData || []); // Safeguard for null
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // Handle errors gracefully
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on the search term
  const filteredProducts =
    products?.filter((product) => {
      const nameMatches = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const tagsMatch = product.tags?.some((tag: string) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return nameMatches || tagsMatch;
    }) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Search Products</h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products by name or tags..."
          className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Loading or No Products */}
      {products === null ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div className="w-full h-48 mb-4">
                {product.images ? (
                  <Image
                    src={urlFor(product.images).url()}
                    alt={product.title}
                    height={192}
                    width={192}
                    className="w-full h-full rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg"></div>
                )}
              </div>

              {/* Product Name and Price */}
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-500">Rs. {product.price}</p>

              {/* Product Tags */}
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags && product.tags.length > 0 ? (
                  product.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-200 rounded-full px-2 py-1"
                    >
                      #{tag}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-400">
                    No tags available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
