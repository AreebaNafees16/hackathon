import Feature from "@/app/components/feature";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

export default function AboutSection() {
    return (
        <div className="w-full">
            {/* Top Section */}
            <section className="relative w-full h-[300px] sm:h-[416px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-12">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('/bg.jpg')" }}
                ></div>
                <div className="relative z-10">
                    <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-7 ml-4" />
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
            <section className="w-full bg-white py-16 px-6 lg:px-20">
                <div className="max-w-[1440px] mx-auto text-center">
                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-black mb-6">
                        Crafting Timeless Comfort
                    </h1>
                    {/* Intro Paragraph */}
                    <p className="text-[#9F9F9F]  max-w-3xl mx-auto sm:text-sm sm:mb-12 text-lg mb-12">
                        Welcome to <span className="font-semibold text-gray-800">Ashley</span>,
                        where innovation meets craftsmanship to create furniture that transforms houses
                        into homes. Every piece we design tells a story of elegance, comfort, and functionality.
                    </p>
                    {/* Mission Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
                        {/* Mission */}
                        <div className="bg-white shadow-md rounded-lg p-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Our Mission</h2>
                            <p className="text-gray-600">
                                To redefine modern living by offering furniture that blends aesthetic appeal with
                                lasting durability, inspiring everyone to create a space that feels uniquely theirs.
                            </p>
                        </div>
                        {/* Commitment */}
                        <div className="bg-white shadow-md rounded-lg p-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Our Commitment</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Unparalleled Quality:</strong> Premium materials and techniques to exceed expectations.</li>
                                <li><strong>Sustainable Choices:</strong> Environmentally conscious furniture that’s kind to the planet.</li>
                                <li><strong>Exceptional Value:</strong> Luxury and affordability combined.</li>
                            </ul>
                        </div>
                        {/* Why Choose Us */}
                        <div className="bg-white shadow-md rounded-lg p-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Why Choose Us?</h2>
                            <p className="text-gray-600">
                                We don’t just sell furniture — we curate experiences. From cozy sofas for relaxation
                                to dining sets for family gatherings, every product is designed with your needs in mind.
                            </p>
                        </div>
                    </div>
                    {/* Call to Action */}
                    <div className="mt-16">
                        <h2 className="text-3xl font-semibold text-black mb-4">
                            Join Our Community
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                            Be part of a community that values creativity and connection. Let us help you make
                            every space your own with our expert design tips and exclusive collections.
                        </p>
                        <button className="bg- text-black py-3 px-8 rounded-lg border  hover:text-white hover:bg-gray-700 transition">
                            Discover Our Collection
                        </button>
                    </div>
                </div>
            </section>
            {/* Features Section */}
       <Feature />
        </div>
    );
}
