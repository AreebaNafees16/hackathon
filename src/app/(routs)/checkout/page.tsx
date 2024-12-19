import Feature from "@/app/components/feature";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";


export default function CheackOut() {
  return (
    <div className="w-full">
      <section className="relative w-full h-[200px] sm:h-[316px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>
        <div className="relative z-10">
          <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-16 ml-10" />
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">Checkout</h1>
        </div>
        <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <AiOutlineRight className="text-black" />
          <span>Checkout</span>
        </div>
      </section>

      {/* Billing Section */}
      <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8 mb-24">
        <div className="w-full lg:w-1/2 md:mx-20">
          <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-6">
              <div className="mr-2">
                <label htmlFor="firstName" className="block mb-2">First Name</label>
                <input type="text" id="firstName" className="w-full h-[60px] sm:w-[180px] border border-gray-500 rounded-lg p-3" />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2">Last Name</label>
                <input type="text" id="lastName" className="w-full h-[60px] sm:w-[180px] border border-gray-500 rounded-lg p-3" />
              </div>
            </div>

          </div>

          <div className="mt-4 relative">
            <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
            <input type="text" id="companyName" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
          </div>
          <div className="mt-4">
            <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>

            <select

              id="country"

              className="w-full h-[60px] sm:w-[390px] text-gray-400 border-gray-600 rounded-lg border p-3 bg-white appearance-none active pr-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundPosition: 'right 1rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "20px 20px"
              }}

            >

              <option value="LK" disabled selected>
                Select a Country
              </option>
              <option value="LK">Sri Lanka</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>

            </select>
          </div>


          <div className="mt-4">
            <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
            <input type="text" id="address" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
          </div>

          <div className="gap-4 mt-4">
            <div>
              <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
              <input type="text" id="town" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
            </div>
            <div className="mt-4">
              <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>

              <select

                id="country"

                className="w-full h-[60px] sm:w-[390px] text-gray-600 border-gray-500 rounded-lg border p-3 bg-white appearance-none active pr-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundPosition: 'right 1rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "20px 20px"
                }}

              >
                <option value="LK" disabled selected>
                  Select a Province
                </option>
                <option value="Western">Western Province</option>
                <option value="Central">Central</option>
                <option value="Southern">Southern</option>
                <option value="Northern">Northern</option>
                <option value="Eastern">Eastern</option>
                <option value="North Western">North Western</option>
                <option value="North Central">North Central</option>

              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="zip" className="block my-4 mt-6">ZIP Code</label>
            <input type="text" id="zip" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
          </div>

          <div className="mt-4">
            <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
            <input type="text" id="phone" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
            <input type="text" id="email" className="w-full h-[60px] sm:w-[390px] border-gray-500 rounded-lg border p-3" />
          </div>

          <div className="mt-4">
            <input type="text" id="additionalInfo" placeholder="Additional Information" className="w-full h-[60px] sm:w-[390px] border-gray-500 my-4 mt-6 rounded-lg border p-3" />
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/2 md:mx-20 mt-4 lg:mt-12">
          <div className="mt-4">
            {/* Header */}
            <div className="flex justify-between py-2">
              <span className="text-xl font-bold">Product</span>
              <span className="text-xl font-bold">Subtotal</span>
            </div>

            {/* Product Rows */}
            <div className="flex justify-between py">
              <div className="space-x-3">
                <span className="text-[#9F9F9F]">Asgaard Sofa</span>
                <span>x</span>
                <span>1</span>
              </div>
              <div className="flex gap-4">
                {/* <span>X</span>
        <span>1</span> */}
                <span className="text-right font-light">Rs: 250,000.00</span>
              </div>
            </div>

            {/* Subtotal Row */}
            <div className="flex justify-between py-2 font-semibold">
              <span>Subtotal</span>
              <span className="text-right font-light">Rs: 250,000.00</span>
            </div>

            {/* Total Row */}
            <div className="flex justify-between py-2 border-b font-semibold">
              <span>Total</span>
              <span className="text-[#B88E2F] text-right text-xl">Rs: 250,000.00</span>
            </div>
          </div>
          {/* Payment Method */}
          <div className="flex items-center mt-5">
            <input
              type="radio"
              id="bankTransfer"
              name="payment"
              className="peer hidden"
            />
            <label
              htmlFor="bankTransfer"
              className="w-3 h-3 border-2 border-black rounded-full flex items-center justify-center cursor-pointer peer-checked:bg-black peer-checked:border-black bg-black"
            >
              <span className="w-3 h-3 bg-black rounded-full peer-checked:block hidden"></span>
            </label>
            <span className="ml-2">Direct Bank Transfer</span>
          </div>
          <p className="text-sm font-light text-[#9F9F9F] mt-2 tracking-wider">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

          <div className="flex items-center mt-4 text-[#9F9F9F]">
            <input type="radio" id="cod" name="payment" className="mr-2" />
            <label htmlFor="cod" className="text-md">Direct Bank Transfer</label>
          </div>

          <div className="flex items-center mt-3 text-[#9F9F9F]">
            <input type="radio" id="cod" name="payment" className="mr-2" />
            <label htmlFor="cod" className="text-md">Cash On Delivery</label>
          </div>
          <p className="text-sm font-light text-black mt-6 tracking-wider">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold text-black">privacy policy. </span></p>
          <div className="flex justify-center">
            <button className="mt-6 border border-black py-3 px-14 rounded-xl text-cente hover:bg-gray-700 hover:text-white transition-colors duration-300">
              Place Order
            </button>
          </div>
        </div>
      </div>
        {/* Features Section */}
      <Feature />
    </div>

  )
}