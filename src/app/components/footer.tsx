export default function Footer() {
    return (
      <footer className="w-full h-auto bg-[#FFFFFF] mt-20">
        <div className="container mx-auto max-w-[1440px] h-full py-8 px-6 sm:px-8 md:px-12">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Address Column */}
            <div>
              <p className="text-md mb-6 mt-6 text-[#9F9F9F]">
                400 University Drive Suite 200 <br />
                Coral Gables, FL 33134 <br />
                USA
              </p>
            </div>
  
            {/* Links Column */}
            <div>
              <h2 className="font-bold mb-6 text-[#9F9F9F]">Links</h2>
              <ul className="text-[#000000]">
                <li className="mb-4">
                  <a href="#" className="hover:text-blue-400">Home</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-blue-400">Shop</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-blue-400">About</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-blue-400">Contact</a>
                </li>
              </ul>
            </div>
  
            {/* Help Column */}
            <div>
              <h2 className="font-bold mb-6 text-[#9F9F9F]">Help</h2>
              <ul className="text-[#000000]">
                <li className="mb-4">
                  <a href="#" className="hover:text-blue-400">Payment Options</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-blue-400">Returns</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-blue-400">Privacy Policies</a>
                </li>
              </ul>
            </div>
  
            {/* Newsletter Column */}
            <div>
              <h2 className="font-bold mb-6 text-[#9F9F9F]">Newsletter</h2>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="border-b-2 border-black w-full sm:w-auto pb-1"
                />
                <button className="bg-transparent text-black">
                  <span className="border-b-2 border-black inline pb-1">SUBSCRIBE</span>
                </button>
              </div>
            </div>
          </div>
  
          {/* Divider */}
          <div className="w-full border-t-2 border-[#D9D9D9] my-8"></div>
  
          {/* Bottom Text */}
          <div className="text-center text-sm text-[#000000]">
            <p>2022 Meubel House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  