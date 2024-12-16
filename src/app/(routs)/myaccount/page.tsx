import Feature from "@/app/components/feature";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

export default function myAccount() {
    return (
        <div className="w-full">
            <section className="relative w-full h-[300px] sm:h-[416px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-12">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('/bg.jpg')" }}
                ></div>
                <div className="relative z-10">
                    <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-28 ml-2" />
                    <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">My Account</h1>
                </div>
                <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
                    <Link href="/" className="hover:text-blue-500">
                        Home
                    </Link>
                    <AiOutlineRight className="text-black" />
                    <span>My Account</span>
                </div>
            </section>

            <div className="mt-8 grid gap-8 mx-4 lg:mx-32 lg:grid-cols-2">
                {/* Login Section */}
                <div className="p-4 rounded">
                    <h2 className="text-3xl font-bold my-8">Log In</h2>
                    <div className='flex flex-col '>
                        <label className="my-2 text-black mb-2" htmlFor="username">
                            Username or email address
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full h-[60px] sm:w-[370px] my-2 border border-[#9F9F9F] rounded-lg p-2 mb-4"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className="my-2 text-black mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full h-[60px] sm:w-[370px] my-2 border border-[#9F9F9F] rounded-lg p-2 mb-4"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="remember" className="mr-2 scale-150 border border-[#9F9F9F]" />
                        <label htmlFor="remember" className="my-4">
                            Remember me
                        </label>
                    </div>
                    <div className="flex items-center">
                        <button className="border border-black font-medium text-black px-12 py-3 rounded-xl hover:text-white hover:bg-gray-700">
                            Log In
                        </button>
                        <p className="ml-6 text-black text-sm hover:underline cursor-pointer">
                            Lost Your Password?
                        </p>
                    </div>
                </div>

                {/* Register Section */}
                <div className="p-6 rounded md:ml-11">
                    <h2 className="text-3xl font-bold my-8">Register</h2>
                    <label className="block my-2 text-black mb-2" htmlFor="register-email">
                        Email address
                    </label>
                    <input
                        type="text"
                        id="register-email"
                        className="w-full h-[60px] sm:w-[370px] my-2 border border-[#9F9F9F] rounded-lg p-2 mb-4"
                    />
                    <p className="text-black font-light text-md my-4 tracking-wide text-justify">
                        A link to set a new password will be sent to your email <br /> address.
                    </p>
                    <p className="text-black font-light text-md mb-4 tracking-normal text-justify">
                        Your personal data will be used to support your experience <br /> throughout this
                        website, to manage access to your account, <br /> and for other purposes described
                        in our <span className="font-bold text-black">privacy policy</span>.
                    </p>
                    <button className="border my-10 border-black font-medium text-black px-12 py-3 rounded-xl hover:text-white hover:bg-gray-700">
                        Register
                    </button>
                </div>
            </div>
            {/* Features Section */}
            <Feature />

        </div>
    )
}