export const products = [
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
export default function Related() {
    
          
    return (
      <section className="bg-[#FFFFFF] w-full lg:h-[777px] flex flex-col items-center justify-center py-8 lg:py-0">
        {/* Title and Paragraph */}
        <div className="container mx-auto max-w-[1440px] text-center mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000000] mb-4">
          Related Products
          </h1>
         
        </div>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1440px] px-4 sm:px-8 lg:px-0">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt="product"
                  className="w-[90%] sm:w-[300px] h-auto sm:h-[300px] mx-auto transition-transform duration-300 hover:scale-105 mb-6 lg:mb-10"
                />
              </div>
              {/* Product Details */}
              <h3 className="text-md sm:text-lg font-normal text-[#000000] mt-2 sm:mt-4">
                {product.name}
              </h3>
              <p className="text-md sm:text-lg font-bold text-[#000000] mt-2 sm:mt-4">
                Rs. {product.price}
              </p>
            </div>
          ))}
        </div>
  
        {/* View More Button */}
        <div className="mt-6 lg:mt-8">
          <button className="text-lg font-medium text-black hover:text-blue-700 relative">
            View More
            <span className="block w-full h-[2px] bg-black mt-1"></span>
          </button>
        </div>
      </section>
    );
  }
  