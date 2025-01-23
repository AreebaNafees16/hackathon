"use client";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PiAppStoreLogo } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline, IoHeartOutline, IoSearchOutline } from "react-icons/io5";


export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set the background color based on the pathname
  const navbarBgColor = pathname === "/" ? "#FBEBB5" : "#FFFFFF";

  // Function to fetch and update cart count
  const fetchCartCount = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(savedCart.length);
  };

// Update cart count on mount
useEffect(() => {
  fetchCartCount();
}, []);

// // Add item to cart and update state and localStorage
// const addItemToCart = (item) => {
//   const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
//   const updatedCart = [...currentCart, item];
//   localStorage.setItem('cart', JSON.stringify(updatedCart));
//   setCartCount(updatedCart.length); // Update state immediately
// };




  // // Initialize cart count on component mount
  // useEffect(() => {
  //   updateCartCount();
    
  //   // Listen for changes in localStorage
  //   const handleStorageChange = (event:any) => {
  //     if (event.key === 'cart') {
  //       updateCartCount();
  //     }
  //   };

  //   window.addEventListener('storage', handleStorageChange);

  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []);

  

  return (
    <nav
      className={`w-full z-50`}
      style={{ backgroundColor: navbarBgColor }}
    >
      <div className="container mx-auto max-w-[1440px] h-[80px] flex items-center justify-between px-4">
        {/* Hamburger Icon (Mobile Only) */}
        <div className="flex items-center sm:hidden">
          <button onClick={toggleMenu} className="text-2xl text-black">
            <AiOutlineMenu size={25}/>
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center absolute left-12 sm:relative sm:left-0 md:ml-10">
          <PiAppStoreLogo className="text-[#B88E2F] font-bold text-3xl" />
          <span className="text-2xl  font-light">SHLEY</span>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden sm:flex space-x-10 text-xl font-medium">
          <li>
            <Link href="/" className="hover:text-blue-500 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-blue-500 cursor-pointer">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex 1 lg:gap-4 md:space-x-5 space-x-1 text-2xl text-black lg:mr-10">
        <Link href='/myaccount'>
          <BsPerson size={30} className="hover:text-blue-500 cursor-pointer font-bold" />
          </Link>
          <Link href='/searchbar'>
          <IoSearchOutline size={30} className="hover:text-blue-500 cursor-pointer" />
          </Link>
          <Link href='/wishlist'>
          <IoHeartOutline size={30} className="hover:text-blue-500 cursor-pointer" />
          </Link>
          
          <Link href='/cart'>
          <IoCartOutline size={30} className="hover:text-blue-500 cursor-pointer" />
          
          <span
          className={`absolute top-9 right- inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-amber-400 rounded-full ${
            cartCount === 0 ? '0' : ''
          }`}
        >
          {cartCount}
         
          </span>
          </Link>
          
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full z-40 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-[300px]`}
        style={{ backgroundColor: navbarBgColor }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-3xl text-black">
            <AiOutlineClose />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <ul className="space-y-6 text-lg font-medium p-6">
          <li>
            <Link href="/" className="hover:text-blue-500 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-blue-500 cursor-pointer">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
