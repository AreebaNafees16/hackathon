// "use client"
// import { SetStateAction, useState } from 'react';
// import Product from './product';


// const ProductGrid = () => {
//   // State to track the current page
//   const [currentPage, setCurrentPage] = useState(1);

//   // Function to handle page change
//   const handlePageChange = (page: SetStateAction<number>) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       {/* Products Grid */}
//       {currentPage === 1 && <Product />}
//       {(currentPage === 2 || currentPage === 3) && <Product />}

//       {/* Pagination */}
//       <div className="w-full max-w-[1440px] mx-auto flex justify-center gap-4 py-6 sm:py-8 mb-6">
//         <button
//           onClick={() => handlePageChange(1)}
//           className={`w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md ${
//             currentPage === 1 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
//           } hover:bg-[#FBEBB5]`}
//         >
//           1
//         </button>
//         <button
//           onClick={() => handlePageChange(2)}
//           className={`w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md ${
//             currentPage === 2 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
//           } hover:bg-[#FBEBB5]`}
//         >
//           2
//         </button>
//         <button
//           onClick={() => handlePageChange(3)}
//           className={`w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md ${
//             currentPage === 3 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
//           } hover:bg-[#FBEBB5]`}
//         >
//           3
//         </button>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           className="w-14 sm:w-16 h-10 sm:h-12 flex justify-center items-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5]"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;


"use client"
import { SetStateAction, useState } from 'react';
import Product from './product';

const ProductGrid = () => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page change
  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scroll to top
      });
  };

  return (
    <div>
      {/* Products Grid */}
      {currentPage === 1 && <Product />}
      {currentPage === 2 && <Product />}
      {currentPage === 3 && <Product />}

      {/* Pagination */}
      <div className="w-full max-w-[1440px] mx-auto flex justify-center gap-4 py-6 sm:py-8 mb-6">
        <button
          onClick={() => handlePageChange(1)}
          className={`w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md ${
            currentPage === 1 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
          } hover:bg-[#FBEBB5]`}
        >
          1
        </button>
        <button
          onClick={() => handlePageChange(2)}
          className={`w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md ${
            currentPage === 2 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
          } hover:bg-[#FBEBB5]`}
        >
          2
        </button>
        <button
          onClick={() => handlePageChange(3)}
          className={`w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-md ${
            currentPage === 3 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
          } hover:bg-[#FBEBB5]`}
        >
          3
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="w-14 sm:w-16 h-10 sm:h-12 flex justify-center items-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
