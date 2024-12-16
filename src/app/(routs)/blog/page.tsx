import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaTag, FaUserLarge } from 'react-icons/fa6';
import { AiOutlineRight } from 'react-icons/ai';
import Feature from '@/app/components/feature';
import { IoSearch, IoSearchOutline } from 'react-icons/io5';


export default function Blog() {
  return (
    <div className="w-full">
      {/* Top Section */}
      <section className="relative w-full h-[300px] sm:h-[416px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>
        <div className="relative z-10">
          <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-3 ml-2" />
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">Blog</h1>
        </div>
        <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <AiOutlineRight className="text-black" />
          <span>Blog</span>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row">
        <div className="mt-8 w-full lg:w-3/4 gap-6 md:mx-10 ">
          {[
            {
              id: "millennial-design",
              image: "/blog6.png",
              title: "Going all-in with millennial design",
              category: "Crafts",
              date: "01 Jan 2023",
              slug: "millennial-design",
              description: `Going All-In with Millennial Design" explores the vibrant, dynamic, and minimalist aesthetic that defines millennial-inspired design. This blog dives into how bold colors, clean lines, playful typography, and a strong emphasis on functionality have transformed the digital and physical landscapes. From incorporating nostalgic elements to creating visually engaging experiences tailored to a digital-first generation, it highlights how millennial design connects emotionally while maintaining a sleek, modern appeal. Whether you're a designer, marketer, or creative enthusiast, this blog is your guide to embracing the trends that resonate with today’s forward-thinking, experience-driven audience.`,
            },
            {
              id: "decorating-ideas",
              image: "/blog4.png",
              title: "Exploring new ways of decorating",
              category: "Design",
              date: "15 Mar 2023",
              slug: "decorating-ideas",
              description: `Decorating a blog can be as creative and personal as writing its content. A thoughtfully designed blog not only enhances readability but also reflects the personality of the writer. Start by choosing a clean and visually appealing layout that aligns with your blog’s theme. Incorporate eye-catching header images or subtle background designs to create an inviting atmosphere. Use color schemes that resonate with the blog’s tone—soft pastels for a calming feel or bold colors for a vibrant energy. Adding decorative elements like icons, illustrations, or styled dividers between sections can enhance visual interest. Don’t forget to format your text effectively with proper headings, bullet points, and highlighted quotes to improve user engagement. With these touches, your blog will not only convey information but also leave a lasting impression.`,
            },
            {
              id: "handmade-pieces",
              image: "/blog5.png",
              title: "Handmade pieces that took time to make",
              category: "Wood",
              date: "20 Sep 2023",
              slug: "handmade-pieces",
              description: `"Handmade pieces are a celebration of time, effort, and creativity. Each item carries the unique touch of the artisan, telling a story of dedication and passion. Unlike mass-produced goods, these creations are crafted with care, often taking hours, days, or even weeks to perfect. Whether it’s intricate jewelry, carefully stitched textiles, or beautifully carved wooden items, handmade pieces embody authenticity and individuality. They remind us to appreciate the beauty of slow craftsmanship and the value of owning something truly one-of-a-kind."`,
            },
          ].map((post, index) => (
            <div key={index} className="bg-white p-4 rounded-lg transition-shadow">
              <img src={post.image} alt={post.title} className="w-[500px] h-[300px] rounded-lg" />
              <div className="flex items-center space-x-4 mt-3 text-sm text-[#9F9F9F]">
                <div className="flex items-center space-x-1">
                  <FaUserLarge />
                  <p>Admin</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCalendar />
                  <p>{post.date}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FaTag />
                  <p>{post.category}</p>
                </div>
              </div>
              <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
              <p className="mt-2 text-[#9F9F9F] line-clamp-4">{post.description}</p>
              {/* View More Button */}
              <div className="mt-6 lg:mt-4 text-left">
                <Link href={`/blog/${post.id}`}>
                  <button className="text-lg font-normal text-black hover:text-blue-700 relative mt-2 mb-2">
                    Read More
                    <span className="w-20 block h-[1.5px] font-normal bg-black mt-1 ml-1"></span>
                  </button>
                </Link>
              </div>
            </div>

          ))}
          {/* Pagination */}
          <div className="w-full max-w-[1440px] mx-auto flex justify-center gap-4 py-6 sm:py-8 md:ml-20">
            <button className="w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5]">
              1
            </button>
            <button className="w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5]">
              2
            </button>
            <button className="w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5]">
              3
            </button>
            <button className="w-14 sm:w-16 h-10 sm:h-12 flex justify-center items-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5]">
              Next
            </button>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="mt-10 w-full lg:w-1/4 p-6 gap-6 mr-6">
          {/* Search Bar */}
          <div className="mb-6 relative">
            <input
              type="text"

              className="w-full p-3 pl-10 pr-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black font-bold">
              <IoSearch size={20} />
            </span>
          </div>
          {/* Categories */}
          <div className="p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-8">Categories</h3>
            <ul className="space-y-9 text-[#9F9F9F] mb-14">
              {[
                { name: 'Crafts', count: 2 },
                { name: 'Design', count: 8 },
                { name: 'Handmade', count: 7 },
                { name: 'Interior', count: 1 },
                { name: 'Wood', count: 6 },
              ].map((category, index) => (
                <li key={index} className="flex justify-between text-sm mb-10">
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="p-1 rounded-lg">
            <h3 className="text-xl font-medium mb-8">Recent Posts</h3>
            <div className="space-y-9">
              {[
                { image: '/blogsm1.jpg', title: 'Going all-in with millennial design', date: '03 Aug 2022' },
                { image: '/blogsm2.png', title: 'Exploring new ways of decorating', date: '03 Aug 2022' },
                { image: '/blogsm3.png', title: 'Handmade pieces that took time to make', date: '03 Aug 2022' },
                { image: '/blogsm4.png', title: 'Modern home in Milan', date: '03 Aug 2022' },
                { image: '/blogsm5.png', title: 'Colorful office redesign', date: '03 Aug 2022' },
              ].map((post, index) => (
                <div key={index} className="flex space-x-3">
                  <Image src={post.image} height={100} width={100} alt="" className="rounded-lg" />
                  <div>
                    <h4 className="text-md font-medium">{post.title}</h4>
                    <p className="font-normal text-[#9F9F9F]">{post.date}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
        {/* Features Section */}
      <Feature />
    </div>


  );
}

