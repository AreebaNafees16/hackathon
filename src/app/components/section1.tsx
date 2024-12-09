export default function Section1() {
    return (
      <section className="bg-[#FAF4F4] w-full h-auto lg:h-[622px] flex items-center justify-center py-8 lg:py-0">
        <div className="container mx-auto max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-1 items-center">
          {/* Image 1 */}
          <div className="text-center px-4 sm:px-8 lg:px-0">
            <img
              src="/sidetable1.png"
              alt="Image 1"
              className="w-[90%] sm:w-[600px] h-auto sm:h-[500px] rounded-lg mx-auto lg:pl-28 mt-3 -ml-8 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-2xl sm:text-2xl lg:text-3xl font-semibold text-black lg:pl-[150px] text-center lg:text-justify  mb-7 lg:-mt-28">
              Side table
            </h3>
            <button className="relative text-lg font-medium text-black hover:text-blue-700 mr-3 lg:mr-80">
              View More
              <span className="block w-full h-[2px] bg-black mt-1"></span>
            </button>
          </div>
  
          {/* Image 2 */}
          <div className="text-center px-4 sm:px-8 lg:px-0">
            <img
              src="/sidetable2.png"
              alt="Image 2"
              className="w-[100%] sm:w-[600px] h-auto sm:h-[500px] rounded-lg mx-auto lg:ml-7 mt-3 -ml-20 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-2xl sm:text-2xl lg:text-3xl font-semibold text-black lg:pl-[170px] text-center lg:text-justify mb-5 lg:-mt-28">
              Side table
            </h3>
            <button className="relative text-lg font-medium text-black hover:text-blue-700 mt-2 mr-3 lg:mr-72">
              View More
              <span className="block w-full h-[2px] bg-black mt-1"></span>
            </button>
          </div>
        </div>
      </section>
    );
  }
  