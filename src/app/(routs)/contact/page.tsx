import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import Feature from "@/app/components/feature";

export default function ContactPage() {
    return (
        <div className="w-full">
            {/* Top Section */}
            <section className="h-[200px] md:h-[316px] bg-cover bg-center relative flex flex-col justify-center items-center text-center mb-10">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('/bg.jpg')" }}
                >
                </div>
                <div className="relative z-10">
                    {/* Logo */}
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 -mb-3 md:ml-12 ml-8 mt-8"
                    />
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                        Contact
                    </h1>
                </div>

                {/* Breadcrumb */}
                <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
                    <Link href="/" className="hover:text-blue-500">
                        Home
                    </Link>
                    <AiOutlineRight className="text-black" />
                    <span>Contact</span>
                </div>
            </section>

            <div className="w-full max-w-[1440px] mx-auto bg-[#FFFFFF] px-4 sm:px-8 md:px-12 py-6">
                {/* Page Heading Section */}
                <div className="text-center mt-6 mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#000000]">
                        Get In Touch With Us
                    </h1>
                    <p className="text-sm sm:text-md text-[#9F9F9F] max-w-2xl mx-auto">
                        For more information about our product & services, please feel free
                        to drop us an email. Our staff is always there to help you out. Do
                        not hesitate!
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Section */}
                    <div className="w-full sm:w-[393px] bg-[#FFFFFF] p-6 md:ml-20 mt-5">
                        {/* Address Section */}
                        <div className="mb-6">
                            <div className="flex items-center space-x-4 mb-2">
                                <FaLocationDot className="text-2xl text-black" />
                                <h2 className="text-lg font-bold">Address</h2>
                            </div>
                            <p className="text-[#000000] ml-12">
                                236 5th SE Avenue, <br />
                                New York NY10000, United States
                            </p>
                        </div>

                        {/* Phone Section */}
                        <div className="mb-6">
                            <div className="flex items-center space-x-4 mb-2">
                                <FaPhoneAlt className="text-2xl text-black" />
                                <h2 className="text-lg font-bold">Phone</h2>
                            </div>
                            <p className="text-[#000000] ml-12">
                                Mobile: +(84) 546-6789 <br />
                                Hotline: +(84) 456-6789
                            </p>
                        </div>

                        {/* Working Time Section */}
                        <div>
                            <div className="flex items-center space-x-4 mb-2">
                                <IoTime className="text-2xl text-black" />
                                <h2 className="text-lg font-bold">Working Time</h2>
                            </div>
                            <p className="text-[#000000] ml-12">
                                Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00
                            </p>
                        </div>
                    </div>

                    {/* Right Section: Contact Form */}
                    <div className="w-full lg:w-[635px] bg-[#FFFFFF] p-8 md:ml-28">
                        <form className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-[#000000] mb-2"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-[#9F9F9F] rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Abc"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-[#000000] mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border border-[#9F9F9F] rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Abc@def.com"
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-[#000000] mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full border border-[#9F9F9F] rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                                    placeholder="This is optional"
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-[#000000] mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full border border-[#9F9F9F] rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                                    rows={6}
                                    placeholder="Hi! I’d like to ask about"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full sm:w-52 border border-[#000000] text-[#000000] py-2 rounded-xl hover:bg-gray-700 hover:text-white transition-all duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <Feature />
        </div>
    );
}
