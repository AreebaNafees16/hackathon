// import React from "react";
// import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

// const SocialShare = ({ productName, productUrl }) => {
//   // Fallback if productUrl is not provided
//   const defaultUrl = "https://example.com";
//   const shareUrl = productUrl || defaultUrl;

//   return (
//     <div className="social-share">
//       <h3 className="text-lg font-semibold mb-2">Share this product:</h3>
//       <div className="flex gap-4">
//         {/* Facebook */}
//         <a
//           href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//             shareUrl
//           )}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 hover:text-blue-800"
//         >
//           <FaFacebook size={24} />
//         </a>

//         {/* Twitter */}
//         <a
//           href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
//             shareUrl
//           )}&text=${encodeURIComponent(productName)}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-400 hover:text-blue-600"
//         >
//           <FaTwitter size={24} />
//         </a>

//         {/* WhatsApp */}
//         <a
//           href={`https://wa.me/?text=${encodeURIComponent(
//             `Check out this product: ${productName} - ${shareUrl}`
//           )}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-green-500 hover:text-green-700"
//         >
//           <FaWhatsapp size={24} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SocialShare;
