import Link from "next/link";
import { AiOutlineRight, AiOutlinePicCenter } from "react-icons/ai";
import { RiApps2Fill } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

export default function ShopPage() {
  const products = [
    { id: "1", name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/item1.png" },
    {
            id: "2", name: (
              <>
                Granite dining table with <br /> dining chair
              </>
            ), price: "Rs. 25,000.00", image: "/item2.png"
          },
          {
            id: "3", name: (
              <>
                Outdoor bar table and <br /> stool
              </>
            ), price: "Rs. 25,000.00", image: "/item3.png"
          },
          {
            id: "4", name: (
              <>
                Plain console with teak <br /> mirror <br />
              </>
            ), price: "Rs. 25,000.00", image: "/item4.png"
          },
          { id: "5", name: "Grain coffee table", price: "Rs. 15,000.00", image: "/item5.png" },
          { id: "6", name: "Kent coffee table", price: "Rs. 225,000.00", image: "/item6.png" },
          {
            id: "7", name: (
              <>
                Round coffee table_color <br /> 2 <br />
              </>
            ), price: "Rs. 251,000.00", image: "/item7.png"
          },
          {
            id: "8", name: (
              <>
                Reclaimed teak coffee <br /> table <br />
              </>
            ), price: "Rs. 25,200.00", image: "/item8.png"
          },
          { id: "9", name: "Plain console_", price: "Rs. 258,200.00", image: "/item9.png" },
          { id: "10", name: "Reclaimed teak Sideboard", price: "Rs. 200,000.00", image: "/item10.png" },
          { id: "11", name: "SJP_0825", price: "Rs. 20,000.00", image: "/item11.png" },
          { id: "12", name: "Bella chair and table", price: "Rs. 10,000.00", image: "/item12.png" },
          { id: "13", name: "Granite square side table", price: "Rs. 258,800.00", image: "/item13.png" },
          { id: "14", name: "Asgaard_sofa", price: "Rs. 250,000.00", image: "/item14.png" },
          { id: "15", name: "Maya sofa three seater", price: "Rs. 115,000.00", image: "/item15.png" },
          { id: "16", name: "Outdoor sofa set", price: "Rs. 244,000.00", image: "/item16.png" },
     ];
  

  return (
    <div className="w-full">
      {/* Top Section */}
      <section className="relative w-full h-[300px] sm:h-[416px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>
        <div className="relative z-10">
          <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-4 ml-2" />
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">Shop</h1>
        </div>
        <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <AiOutlineRight className="text-black" />
          <span>Shop</span>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full h-auto sm:h-[100px] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-12 bg-[#FAF4F4] gap-4">
        <div className="flex items-center gap-2 sm:gap-4 mt-4">
          <HiOutlineAdjustmentsHorizontal className="text-lg sm:text-2xl" />
          <span className="text-black text-sm sm:text-md">Filter</span>
          <RiApps2Fill className="text-lg sm:text-2xl" />
          <AiOutlinePicCenter className="text-lg sm:text-2xl" />
          <span className="text-black text-sm sm:text-md ml-2 sm:ml-6">
            <span className="hidden sm:inline-block text-2xl text-[#9F9F9F] mr-4">|</span>
            Showing 1–16 of 32 results
          </span>
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-black text-sm sm:text-md">Show</span>
            <button className="bg-white px-2 sm:px-4 py-1 text-sm sm:text-md">16</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-black text-sm sm:text-md">Sort by</span>
            <button className="bg-white px-2 sm:px-4 py-1 text-sm sm:text-md">Default</button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 py-8 sm:py-12 sm:ml-4 ml-16">
        {products.map((product) => (
          <div key={product.id} className="lg:text-left rounded-lg p-4">
            <Link href={`/shop/${product.id}`} className="block">
              <div className="w-[300px] h-[180px] sm:h-[200px] mb-4 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={product.image}
                  alt="product"
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-lg sm:text-lg font-medium text-black hover:text-blue-500 ml-14">{product.name}</h2>
              <p className="text-black text-lg sm:text-md ml-14">{product.price}</p>
            </Link>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <div className="w-full max-w-[1440px] mx-auto flex justify-center gap-4 py-6 sm:py-8">
        <button className="w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5]">
          1
        </button>
        <button className="w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5]">
          2
        </button>
        <button className="w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5]">
          3
        </button>
        <button className="w-14 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5]">
          Next
        </button>
      </div>

      {/* Features Section */}
      <section className="w-full sm:h-[300px] h-[350px] bg-[#FAF4F4] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-16 py-12 text-left">
        <div>
          <h3 className="text-2xl sm:text-4xl text-black mb-2 md:mt-12">Free Delivery</h3>
          <p className="text-[#9F9F9F] text-sm sm:text-lg">
            For all orders over $50, consectetur <br /> adipiscing elit.
          </p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-4xl text-black mb-2 md:mt-12">90 Days Return</h3>
          <p className="text-[#9F9F9F] text-sm sm:text-lg">
            If goods have problems, consectetur <br /> adipiscing elit.
          </p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-4xl text-black mb-2 md:mt-12">Secure Payment</h3>
          <p className="text-[#9F9F9F] text-sm sm:text-lg">
            100% secure payment, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </section>
    </div>
  );
}
