// export default function Section3() {
//   return (
//     <section className="w-full lg:h-[650px] flex flex-col lg:flex-row items-center bg-[#FFF9E5] lg:py-0">
//       {/* Left Side Image */}
//       {/* <div className="container mx-auto max-w-[1440px] w-full lg:w-2/3 h-auto lg:h-full ml-0 lg:ml-10"> */}
//       <div className="container mx-auto mx-w-[1440px ] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[1440px] px-4 sm:px-8 lg:px-0">
//         <img
//           src="/Asgaardsofa1.png"
//           alt="Product Image"
//           className="w-full h-auto md:h-full"
//         />
//       </div>

//       {/* Right Side Content */}
//       <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-center items-center px-6 sm:px-12 text-center mt-6 lg:mt-0">
//         {/* Small Heading */}
//         <p className="text-xs sm:text-sm text-[#000000] uppercase mb-4">
//           New Arrivals
//         </p>

//         {/* Large Heading */}
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000000] leading-tight mb-6">
//           Asgaard sofa
//         </h1>

//         {/* Order Now Button */}
//         <button className="border-2 border-gray-800 text-[#000000] text-sm sm:text-lg px-6 sm:mb-6 mb-16 py-2 hover:bg-gray-700 hover:text-white transition-colors duration-300">
//           Order Now
//         </button>
//       </div>
//     </section>
//   );
// }

export default function Section3() {
  return (
    <section className="w-full lg:h-[600px] flex flex-col lg:flex-row items-center bg-[#FFF9E5]">
      {/* Container with max width */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-0 flex flex-col lg:flex-row items-center">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 h-auto lg:h-full lg:ml-14">
          <img
            src="/Asgaardsofa1.png"
            alt="Product Image"
            className="w-full h-auto md:h-full"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-center items-center px-6 sm:px-12 text-center mt-6 lg:mt-0">
          {/* Small Heading */}
          <p className="text-xs sm:text-sm text-[#000000] uppercase mb-4">
            New Arrivals
          </p>

          {/* Large Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000000] leading-tight mb-6">
            Asgaard sofa
          </h1>

          {/* Order Now Button */}
          <button className="border-2 border-gray-800 text-[#000000] text-sm sm:text-lg px-6 sm:mb-6 mb-16 py-2 hover:bg-gray-700 hover:text-white transition-colors duration-300">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
