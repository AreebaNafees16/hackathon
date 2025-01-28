import Link from "next/link";
import Image from "next/image";
import Feature from "@/app/components/feature";
import { AiOutlineRight, AiOutlinePicCenter } from "react-icons/ai";
import { RiApps2Fill } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Filter from "@/app/components/filter";
import Product from "@/app/components/product";
import Button from "@/app/components/button";

export default function ShopPage() {
  return (
    <div className="w-full">
      {/* Top Section */}
      <section className="relative w-full h-[200px] sm:h-[316px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>
        <div className="relative z-10">
          <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 md:ml-4 ml-2" />
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
      <Filter />
      
      {/* Products Grid */}
    <Product />

    
      {/* Pagination */}
      <Button />

      {/* Features Section */}
      <Feature />
    
     
    </div>
  );
}

