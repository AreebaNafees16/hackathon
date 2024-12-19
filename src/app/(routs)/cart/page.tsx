"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import { AiFillDelete, AiOutlineRight } from 'react-icons/ai'
import Feature from '@/app/components/feature'


export default function Cart() {

    return (
        <div className="w-full">
            {/* Top Section */}
            <section className="relative w-full h-[200px] sm:h-[316px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-10">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('/bg.jpg')" }}
                ></div>
                <div className="relative z-10">
                    <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-4 ml-2" />
                    <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">Cart</h1>
                </div>
                <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
                    <Link href="/" className="hover:text-blue-500">
                        Home
                    </Link>
                    <AiOutlineRight className="text-black" />
                    <span>Cart</span>
                </div>
            </section>
            {/* Cart Table Section */}
            <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8 lg:mx-20">
                {/* Cart Items */}
                <div className="w-full lg:w-[900px] bg-white rounded-lg p-4 sm:p-6">
                    <div className="w-full text-xs md:text-lg">
                        <div className="bg-[#FFF9E5] text-gray-800 flex py-4">
                            {/* <div> */}
                            <span className="flex-1 ml-24 md:ml-28 text-left">Product</span>
                            <span className="flex-1 ml-4 md:ml-8 text-left">Price</span>
                            <span className="flex-2 ml-6 md:ml-10 text-left">Quantity</span>
                            <span className="flex-1 ml-6 md:ml-16 text-left">Subtotal</span>
                            <span className="flex-1 text-left"></span>
                            {/* </div> */}
                        </div>
                        <div className="py-4 flex items-center mt-3">
                            <div className="flex items-center flex-2">
                                <div className="w-[80px] h-[80px] bg-[#FBEBB5] rounded-lg mt-6">
                                    <Image
                                        src="/product.png"
                                        height={120}
                                        width={120}
                                        alt="Asgaard Sofa"
                                        className="mt-2"
                                    />
                                </div>
                                <span className="ml-8 text-gray-400 text-xs md:text-base mt-4">Asgaard Sofa</span>
                            </div>
                            <span className="lg:ml-12 flex- text-xs md:text-base text-gray-400 mt-4">Rs: 250,000.00</span>
                            <div className="flex-1 ml-3 md:ml-14">
                                <span className="w-10 h-10 flex justify-center items-center text-xs md:text-base text-center border md:p-2 rounded-md mt-4" >
                                    1
                                </span>
                            </div>
                            <span className="flex- text-left ml-5 mr-8 text-black text-xs md:text-base sm:text-base mt-4">Rs: 250,000.00</span>
                            <span className="flex-1 text-center">
                                <AiFillDelete className=" text-[#f8e29a] md:ml-11 cursor-pointer hover:text-red-600 mt-4" size={25} />
                                {/* <i className="hidden lg:inline-block text-red-600 ml-4 cursor-pointer hover:text-red-800" style={{ fontSize: 20 }}>&#128465;</i> */}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Cart Totals Section */}
                <div className="w-full h-[300] lg:w-[350px] lg:h-[400px] bg-[#FFF9E5] rounded-md p-10 mt-8 lg:mt-5 lg:mr-7 mb-14">
                    <h2 className="text-2xl font-bold mb-4 text-center">Cart Totals</h2>
                    <div className="w-full mt-14">
                        <div className="flex justify-between py-3">
                            <span className="text-left font-semibold">Subtotal</span>
                            <span className="text-right text-gray-400">Rs: 250,000.00</span>
                        </div>
                        <div className="flex justify-between py-3">
                            <span className="text-left font-semibold">Total</span>
                            <span className="text-right text-lg font-semibold text-[#B88E2F]">Rs: 250,000.00</span>
                        </div>
                        <div className="py-4 flex justify-center mt-4">
                            <button className="px-16 py-3 border border-black rounded-xl hover:bg-gray-700 hover:text-white">
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
              {/* Features Section */}
            <Feature />
        </div>

    )
}

