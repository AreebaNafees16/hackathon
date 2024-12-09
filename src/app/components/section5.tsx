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
        <h1 className="text-5xl font-bold text-[#000000] mb-4">Our Instagram</h1>

        {/* Small Heading */}
        <p className="text-md text-[#000000] mb-6">
          Follow our store on Instagram
        </p>

        {/* Follow Us Button */}
        <button
          className="bg-[#FAF4F4] text-[#000000] py-3 px-11 rounded-full shadow-md hover:shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          Follow Us
        </button>
      </div>
    </section>
  );
}
