export default function Hero() {
  return (
    <section className="bg-[#FBEBB5] w-full md:h-[600px] flex items-center justify-center pt-28">
      <div className="container mx-auto max-w-[1440px] flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 px-4 sm:px-8 md:px-12 lg:pl-[150px] text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 lg:mb-6 md:mt-0 mt-20">
            Rocket single
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            seater
          </h1>
          <button className="relative text-lg font-medium text-[#000000] hover:text-blue-700">
            Shop Now
            <span className="block w-full h-[2px] bg-black mt-1"></span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 px-4 sm:px-8 md:px-12">
          <img
            src="/sofa.png"
            alt="Hero Section"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
