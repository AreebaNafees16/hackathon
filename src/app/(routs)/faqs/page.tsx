// 'use client';

// import { useState } from 'react';
// import { faqData } from '../../faqs/faqData';
// import ContactForm from '@/app/components/ContactForm';


// export default function FAQSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const filteredFAQs = faqData.filter((faq) =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search FAQs..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="border p-2 w-full mb-4"
//       />
//       <ul>
//         {filteredFAQs.map((faq) => (
//           <li key={faq.id} className="mb-4">
//             <h3 className="font-bold">{faq.question}</h3>
//             <p>{faq.answer}</p>
//           </li>
//         ))}
//         {filteredFAQs.length === 0 && (
//           <p>No FAQs match your search. Please try a different query.</p>
//         )}
//         <ContactForm />
//       </ul>
      
//     </div>
//   );
// }



// 'use client';

// import { useState } from 'react';
// import { faqData } from '../../faqs/faqData';
// import ContactForm from '@/app/components/ContactForm';
// import { AiOutlineRight } from 'react-icons/ai';
// import Link from 'next/link';
// import Feature from '@/app/components/feature';

// export default function FAQSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const filteredFAQs = faqData.filter((faq) =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="w-full">
//                {/* Top Section */}
//              <section className="relative w-full h-[200px] sm:h-[316px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-14">
//                  <div
//                      className="absolute inset-0 bg-cover bg-center opacity-40"
//                      style={{ backgroundImage: "url('/bg.jpg')" }}
//                  ></div>
//                  <div className="relative z-10">
//                      <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-4 ml-2" />
//                      <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">FAQs</h1>
//                  </div>
//                  <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
//                      <Link href="/" className="hover:text-blue-500">
//                          Home
//                      </Link>
//                      <AiOutlineRight className="text-black" />
//                      <span>FAQs</span>
//                  </div>
//             </section>
          
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mb-9">
//       {/* Header */}
//       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//         Frequently Asked Questions
//       </h1>

//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search FAQs..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* FAQ List */}
//       <ul className="space-y-6">
//         {filteredFAQs.map((faq) => (
//           <li
//             key={faq.id}
//             className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
//           >
//             <h3 className="text-lg font-semibold text-gray-700 mb-2">
//               {faq.question}
//             </h3>
//             <p className="text-gray-600">{faq.answer}</p>
//           </li>
//         ))}

//         {/* No Results Message */}
//         {filteredFAQs.length === 0 && (
//           <p className="text-center text-gray-500">
//             No FAQs match your search. Please try a different query.
//           </p>
//         )}
//       </ul>

//       {/* Contact Form */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//           Still Need Help?
//         </h2>
//         <p className="text-gray-600 mb-4">
//           If you couldn’t find an answer to your question, feel free to reach
//           out to us using the contact form below.
//         </p>
//         <ContactForm />
//       </div>
//     </div>
//     <Feature />
//     </div>
//   );
// }

"use client"
import Feature from "@/app/components/feature";
import { faqData } from "@/app/faqs/faqData";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";


const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="w-full">
    {/* Top Section */}
  <section className="relative w-full h-[200px] sm:h-[316px] bg-cover bg-center flex flex-col justify-center items-center text-center mb-10">
      <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>
      <div className="relative z-10">
          <img src="/logo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 -mb-3 mt-10 md:ml-4 ml-2" />
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">FAQs</h1>
      </div>
      <div className="relative z-20 text-sm sm:text-md text-black flex items-center space-x-2">
          <Link href="/" className="hover:text-blue-500">
              Home
          </Link>
          <AiOutlineRight className="text-black" />
          <span>FAQs</span>
      </div>
 </section>

    <div className="faq-container py-[30px] md:px-[7%] px-[3%] mb-10">
      <h1 className="faq-title text-[48px] text-txtBlack font-bold font-sans text-center mb-14">Frequently Asked Questions</h1>
      <div className="faq-list grid gap-6 md:grid-cols-2">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item p-4 border rounded-lg bg-amber-50   ${activeQuestion === faq.id ? "shadow-md" : "shadow-none"
            } transitionall duration-200`}
          >
            <button
              className="text-lg text-gray-500"
               
              onClick={() => toggleQuestion(faq.id)}
              
            >
            
              
              
              
                 <div className="text-lg text-gray-600 font-semibold text-left flex justify-between">
      
                 
              {faq.question}
            
            
              <button className="faq-icon text-2xl font-bold flex justify-between">
                {activeQuestion === faq.id ? "-" : "+"}
              </button>
              </div>
        
            </button>
            {activeQuestion === faq.id && (
              <p className="faq-answer mt-3 text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    <Feature />
    </div>
  );
};

export default FAQ;

