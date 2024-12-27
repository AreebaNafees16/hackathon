import Feature from "@/app/components/feature";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { BiCabinet } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { LuSofa } from "react-icons/lu";
import { PiChairBold } from "react-icons/pi";
import { TbArmchair2 } from "react-icons/tb";

export default function About() {
    return (
        <div className="w-full">
            {/* Top Section */}
            <section className="relative w-full h-[200px] sm:h-[316px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-10">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('/bg.jpg')" }}
                ></div>
                <div className="relative z-10">
                    <Image src="/logo.png" alt="Logo"
                    width={200}
                    height={200}
                     className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 md:ml-7 ml-4" />
                    <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">About</h1>
                </div>
                <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
                    <Link href="/" className="hover:text-blue-500">
                        Home
                    </Link>
                    <AiOutlineRight className="text-black" />
                    <span>About</span>
                </div>
            </section>
       
{/* 
    <div className="md:w-[1340px] py-10 px-4 md:px-8"> */}
    <div className="w-full max-w-[1440px] mx-auto bg-[#FFFFFF] px-4 sm:px-8 md:px-12 py-6">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-black mb-6"> Crafting Timeless Comfort</h1>
        
        <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to <span className="font-semibold text-[#B88E2F]">Ashley</span>, your ultimate destination for premium furniture. We specialize in creating spaces that combine elegance, comfort, and functionality. Discover how we transform houses into homes with our curated collections.
        </p>
        <div className="mt-6 flex justify-center">
          <Image
            src="/furniture collection.jpg"
            alt="Showcase of our furniture collection"
            width={1000}
            height={1000}
            className="rounded-lg shadow-lg mx-auto w-[1040px] md:h-[500px]"
          />
        </div>
      </section>

      <section className="mt-12">
        <div className="p-6 text-center">
          {/* <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Furniture Categories</h2> */}
          <div className="mt-6 flex justify-center md:gap-48 gap-11">
            <div className="flex flex-col items-center">
              <TbArmchair2 className="w-12 h-12 text-[#B88E2F]" />
              <span className="md:text-4xl text-xl font-bold mt-3">860+</span>
              <p className="text-sm mt-2 text-[#B88E2F]">Armchairs</p>
            </div>
           
            <div className="flex flex-col items-center">
              <BiCabinet className="w-12 h-12  text-[#B88E2F]" />
              <span className="md:text-4xl text-xl font-bold mt-3">1800</span>
              <p className="text-smmt-2 text-[#B88E2F]">Cabinets</p>
            </div>
            <div className="flex flex-col items-center">
              <LuSofa className="w-12 h-12 text-[#B88E2F]" />
              <span className="md:text-4xl text-xl font-bold mt-3">2k+</span>
              <p className="text-sm mt-2 text-[#B88E2F]">Sofas</p>
            </div>
            <div className="flex flex-col items-center">
              <PiChairBold className="w-12 h-12 text-[#B88E2F]" />
              <span className="md:text-4xl text-xl font-bold mt-3">2500</span>
              <p className="text-sm mt-2 text-[#B88E2F]">Armchairs</p>
            </div>
          </div>
        </div>
      </section>

      

 <div className="md:w-[900px] md:h-[1000px] h-[900px] mx-auto p-6 flex flex-col gap-10 mt-8">
      {/* Design 1 */}
      <div className="flex items-center gap-6">
        {/* Image on Left */}
        <div className="md:w-[400px] md:h-[500px] w-[400px] h-[300px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/modrenfurniture.webp"
            alt="Design 1 Image"
            width={700}
            height={700}
            className="w-full h-full"
          />
        </div>
        {/* Text on Right */}
        <div className="md:w-[400px] md:h-[400px] w-[400px] h-[400px] bg-[#F6F4F2] rounded-lg p-4 flex flex-col justify-center mb-24">
          <h1 className="md:text-2xl text-xs font-bold mb-6 uppercase">Modern Furniture Collection</h1>
          <p className="md:text-base text-xs text-gray-700">
          Elevate your living spaces with our sleek and contemporary modern furniture. Designed for both style and comfort this collection features clean lines premium materials and versatile designs to complement any home decor. Whether your furnishing a cozy apartment or a spacious home our modern furniture combines elegance with functionality perfect for the modern lifestyle.
          </p>
        </div>
      </div>

      {/* Design 2 */}
      <div className="flex items-center gap-6">
        {/* Text on Left */}
        <div className="md:w-[400px] md:h-[400px] w-[400px] h-[400px] bg-[#F6F4F2] rounded-lg p-4 flex flex-col justify-center md:-mt-6 -mt-28">
          <h1 className="md:text-2xl text-xs font-bold mb-6 uppercase">Kids/Baby Furniture Collection</h1>
          <p className="md:text-base text-xs text-gray-700">
          Create a playful and safe haven for your little ones with our charming kids furniture collection. From colorful and imaginative designs to durable and child-friendly materials, we offer everything you need to set up a delightful and functional space for your kids. Discover beds, storage solutions, and seating tailored to inspire creativity and comfort.
          </p>
        </div>
        {/* Image on Right */}
        <div className="md:w-[400px] md:h-[500px] w-[400px] h-[300px] bg-gray-200 rounded-lg overflow-hidden md:-mt-32 -mt-52">
          <Image
            src="/kidsroom.jpg"
            alt="Design 2 Image"
            width={700}
            height={700}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>



      <section className="mt-12 md:ml-20 mb-24">
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-black mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><span className="font-semibold">Premium Craftsmanship</span>: Designed and built with the finest materials to ensure durability and timeless appeal.</li>
            <li><span className="font-semibold">Eco-Friendly Approach</span>: We prioritize sustainability in every step, from material sourcing to production.</li>
            <li><span className="font-semibold">Seamless Customization</span>: Tailor your furniture to reflect your style and functional needs.</li>
            <li><span className="font-semibold">Unmatched Customer Support</span>: Enjoy a smooth shopping experience with our dedicated support team.</li>
          </ul>
          <div className="md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/happy.jpeg"
              alt="Happy customers enjoying our furniture"
              width={800}
              height={800}
              className="rounded-lg shadow-lg w-[500px]"
            />
            <Image
              src="/making.webp"
              alt="Eco-friendly practices in furniture making"
              width={800}
              height={800}
              className="rounded-lg shadow-lg w-[500px]"
            />
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-black mb-4">Join Our Community</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
          Be part of the <span className="font-semibold text-[#B88E2F]">Ashley</span> family. Follow us on social media  subscribe to our newsletter, and explore our blog for exclusive updates, styling tips, and home inspiration.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a href="#" className="text-blue-600 hover:underline"><FaFacebookSquare /></a>
          <a href="#" className="text-blue-400 hover:underline"><FaTwitter /></a>
          <a href="#" className="text-orange-600 hover:underline"><FaInstagramSquare /></a>
          <a href="#" className="text-green-500 hover:underline"><BsWhatsapp /></a>
        </div>
        <p className="text-lg font-semibold text-gray-800 mt-6">Let’s craft something extraordinary together!</p>
      </section>
    </div>
            {/* Features Section */}
       <Feature />
        </div>
    );
}


