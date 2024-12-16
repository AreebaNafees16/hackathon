// app/blog/[slug]/page.js
"use client"
import { useParams } from "next/navigation";
import { blogPosts } from "@/app/data/blogposts";
import Feature from "@/app/components/feature";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

export default function Blogpost() {
    const { id } = useParams();

    // Find the specific post based on the slug
    const post = blogPosts.find((post) => post.id === id);

    if (!post) {
        return <p>Blog post not found.</p>;
    }
    return (
        <div className="w-full">
            {/* Top Section */}
            <section className="relative w-full h-[300px] sm:h-[416px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-12">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('/bg.jpg')" }}
                ></div>
                <div className="relative z-10">
                    <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-14 ml-10" />
                    <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">Blog Post</h1>
                </div>
                <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
                    <Link href="/" className="hover:text-blue-500">
                        Home
                    </Link>
                    <AiOutlineRight className="text-black" />
                    <span>Blog Post</span>
                </div>
            </section>
            <div className="container mx-auto p-6 mt-20">
                <div className="max-w-3xl mx-auto">
                    {/* Blog Post Title */}
                    <h1 className="text-3xl font-bold text-black">{post.title}</h1>

                    {/* Blog Post Date and Category */}
                    <div className="flex justify-between text-sm text-[#9F9F9F] mt-4">
                        <span>{post.date}</span>
                        <span>{post.category}</span>
                    </div>

                    {/* Blog Post Image */}
                    <div className="mt-6">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-80 object-cover rounded-lg"
                        />
                    </div>

                    {/* Blog Post Content */}
                    <div className="mt-8 text-lg text-[#9F9F9F] leading-relaxed">
                        {post.content.map((section, index) => {
                            if (section.type === "paragraph") {
                                return <p key={index}>{section.text}</p>;
                            }
                            if (section.type === "heading") {
                                return (
                                    <h2 key={index} className="text-2xl text-black font-semibold mt-6">
                                        {section.text}
                                    </h2>
                                );
                            }
                            return null;
                        })}
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold">FAQs</h3>
                        <div className="space-y-4 mt-6">
                            {post.faqs.map((faq, index) => (
                                <div key={index}>
                                    <h4 className="font-semibold">{faq.question}</h4>
                                    <p className="text-[#9F9F9F]">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Related Articles */}
                    <div className="mt-12 mb-10">
                        <h3 className="text-2xl font-semibold">Related Articles</h3>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {post.relatedPosts.map((relatedPost) => (
                                <div key={relatedPost.slug} className="bg-white p-6 rounded-lg shadow-md">
                                    <img
                                        src={relatedPost.image}
                                        alt={relatedPost.title}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                    <h4 className="mt-4 text-xl font-bold">{relatedPost.title}</h4>
                                    <p className="mt-2 text-sm text-[#9F9F9F]">{relatedPost.excerpt}</p>
                                    <a
                                        href={`/blog/${relatedPost.slug}`}
                                        className="mt-4 inline-block text-primary underline hover:text-blue-700"
                                    >
                                        Read More
                                    </a>
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
};