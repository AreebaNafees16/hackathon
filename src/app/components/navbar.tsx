"use client";
import { usePathname } from "next/navigation";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsCart3, BsPerson } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set the background color based on the pathname
  const navbarBgColor = pathname === "/" ? "#FBEBB5" : "#FFFFFF";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50`}
      style={{ backgroundColor: navbarBgColor }}
    >
      <div className="container mx-auto max-w-[1440px] h-[100px] flex items-center justify-between px-4">
        {/* Hamburger Icon (Mobile Only) */}
        <div className="flex items-center sm:hidden">
          <button onClick={toggleMenu} className="text-3xl text-black">
            <AiOutlineMenu />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center absolute left-12 sm:relative sm:left-0">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden sm:flex space-x-10 text-lg font-medium">
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
        <div className="flex 1 lg:gap-4 space-x-7 text-2xl text-black lg:mr-10">
          <BsPerson className="hover:text-blue-500 cursor-pointer" />
          <IoSearchOutline className="hover:text-blue-500 cursor-pointer" />
          <AiOutlineHeart className="hover:text-blue-500 cursor-pointer" />
          <BsCart3 className="hover:text-blue-500 cursor-pointer" />
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
