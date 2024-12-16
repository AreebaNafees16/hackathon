import { MdAccessTime } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import Link from "next/link";

export default function Section4() {
  const items = [
    {
      id: 1,
      name: "Going all-in with millennial design",
      image: "/blog1.png",
      date: "12th Oct 2022",
      time: "5 min",
    },
    {
      id: 2,
      name: "Going all-in with millennial design",
      image: "/blog2.png",
      date: "12th Oct 2022",
      time: "5 min",
    },
    {
      id: 3,
      name: "Going all-in with millennial design",
      image: "/blog3.png",
      date: "12th Oct 2022",
      time: "5 min",
    },
  ];

  return (
    <section className="w-full h-auto lg:h-[900px] flex flex-col items-center bg-gray-100 px-6 lg:px-10">
      {/* Heading */}
      <h1 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-5 mt-12 lg:mt-20">
        Our Blogs
      </h1>
      <p className="text-sm lg:text-md text-[#9F9F9F] text-center max-w-[800px] mb-10 lg:mb-14">
        Find a bright ideal to suit your taste with our great selection
      </p>

      {/* Images and Details */}
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1440px] gap-10 lg:gap-4 px-2 lg:px-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-full lg:w-1/3 text-center"
          >
            {/* Image */}
            <div className="w-full lg:w-[393px] h-auto lg:h-[393px] overflow-hidden rounded-lg mb-5 lg:mb-7 hover:scale-105 transition-transform duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="text-lg lg:text-1xl font-semibold text-[#000000] mb-2">
              {item.name}
            </h2>

            {/* Read More */}
            <button className="text-[#000000] text-sm lg:text-lg font-medium hover:underline mb-2">
              Read More
            </button>

            {/* Date and Time */}
            <div className="flex justify-center items-center text-xs lg:text-sm text-[#000000]">
              <MdAccessTime size={20} className="mr-2 text-base lg:text-xl" />
              <span className="mr-4">{item.time} </span>
              <FiCalendar className="mr-2 text-base lg:text-xl" />
              <span>12th Oct 2022</span>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-4 lg:mt-10">
        <Link href="/blog">
        <button className="text-sm lg:text-lg font-medium mb-12 text-black hover:text-blue-700">
          View All Post
          <span className="block w-full h-[2px] bg-black mt-1"></span>
        </button>
        </Link>
      </div>
    </section>
  );
}
