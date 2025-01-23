import { useState } from 'react';
import Image from 'next/image';


interface Product {
    slug: string;
    name: string;
    price: string;
    images: string[];
    details: {
      description: string;
      additionalInfo: string;
      additionalInfo1: string;
    };
    reviews: {
      rating: number;
      text: string;
    }[];
    relatedProducts: {
      id: string;
      image: string;
    }[];
  }
  interface ProductDetailsProps {
    product: Product;
  }
function ProductDetails({ product } : ProductDetailsProps)  {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="w-full mt-8 md:pr-20 pr-0">
      {/* Top Navigation */}
      <div className="flex items-center justify-center gap-8  pb-2 mb-6 md:text-xl text-base">
        <button
          className={`font-medium ${activeTab === 'description' ? 'text-black' : 'text-[#9F9F9F]'}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`font-medium ${activeTab === 'additionalInfo' ? 'text-black' : 'text-[#9F9F9F]'}`}
          onClick={() => setActiveTab('additionalInfo')}
        >
          Additional Information
        </button>
        <button
          className={`font-medium ${activeTab === 'reviews' ? 'text-black' : 'text-[#9F9F9F]'}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews <span className="text-yellow-500">[{product.reviews.length}]</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="md:mx-36 text-[#9F9F9F]">
        {activeTab === 'description' && (
          <p className="mb-8">{product.details.description}</p>
        )}

        {activeTab === 'additionalInfo' && (
          <><p className="mb-8">{product.details.additionalInfo}</p><p className="mb-8">{product.details.additionalInfo1}</p></>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="p-4 border rounded-md">
                <p className="font-semibold">Rating: {review.rating}⭐</p>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      
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
  );
}

export default ProductDetails;
