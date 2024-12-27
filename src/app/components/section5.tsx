export default function Section5() {
  return (
    <section
      className="w-full h-[450px] flex flex-col justify-center items-center relative bg-white bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-opacity-90"></div>

      {/* Content */}
      <div className="relative text-center">
        {/* Main Heading */}
        <h1 className="md:text-5xl text-4xl font-extrabold text-[#000000] mb-4">Our Instagram</h1>

        {/* Small Heading */}
        <p className="md:text-base text-sm text-[#000000] mb-6">
          Follow our store on Instagram
        </p>

        {/* Follow Us Button */}
        <button
          className="bg-[#FAF4F4] text-[#000000] py-3 px-11 rounded-full shadow-lg shadow-gray-300 hover:shadow-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          Follow Us
        </button>
      </div>
    </section>
  );
}
