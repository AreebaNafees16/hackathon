// "use client"
// import { useState } from "react";
// import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
// import { RiApps2Fill } from "react-icons/ri";
// import { AiOutlinePicCenter } from "react-icons/ai";

// type FilterOptions = {
//     itemsToShow: number;
//     sortOrder: string;
//   };
  
//   type FilterSectionProps = {
//     totalResults?: number;
//     onFilterChange?: (filters: FilterOptions) => void;
//   };
  
//   export default function FilterSection({ totalResults = 32, onFilterChange }: FilterSectionProps) {
//     const [itemsToShow, setItemsToShow] = useState(16);
//     const [sortOrder, setSortOrder] = useState("default");
  
//     const handleItemsToShowChange = (value: number) => {
//       setItemsToShow(value);
//       if (onFilterChange) onFilterChange({ itemsToShow: value, sortOrder });
//     };
  
//     const handleSortOrderChange = (value: string) => {
//       setSortOrder(value);
//       if (onFilterChange) onFilterChange({ itemsToShow, sortOrder: value });
//     };
  
//     return (
//       <section className="w-full h-auto sm:h-[100px] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-12 bg-[#FAF4F4] gap-4">
//         <div className="flex items-center gap-2 sm:gap-4 mt-4">
//           <HiOutlineAdjustmentsHorizontal className="text-lg sm:text-2xl" aria-label="Filter Icon" />
//           <span className="text-black text-sm sm:text-md">Filter</span>
//           <RiApps2Fill className="text-lg sm:text-2xl" aria-label="Grid View Icon" />
//           <AiOutlinePicCenter className="text-lg sm:text-2xl" aria-label="List View Icon" />
//           <span className="text-black text-sm sm:text-md ml-2 sm:ml-6">
//             <span className="hidden sm:inline-block text-2xl text-[#9F9F9F] mr-4">|</span>
//             Showing 1–{itemsToShow} of {totalResults} results
//           </span>
//         </div>
//         <div className="flex items-center gap-4 mb-5">
//           <div className="flex items-center gap-2">
//             <label htmlFor="itemsToShow" className="text-black text-sm sm:text-md">
//               Show
//             </label>
//             <select
//               id="itemsToShow"
//               value={itemsToShow}
//               onChange={(e) => handleItemsToShowChange(Number(e.target.value))}
//               className="bg-white px-2 sm:px-4 py-1 text-sm sm:text-md border border-gray-300 rounded-md"
//             >
//               <option value="16">16</option>
//               <option value="32">32</option>
//               <option value="64">64</option>
//             </select>
//           </div>
//           <div className="flex items-center gap-2">
//             <label htmlFor="sortOrder" className="text-black text-sm sm:text-md">
//               Sort by
//             </label>
//             <select
//               id="sortOrder"
//               value={sortOrder}
//               onChange={(e) => handleSortOrderChange(e.target.value)}
//               className="bg-white px-2 sm:px-4 py-1 text-sm sm:text-md border border-gray-300 rounded-md"
//             >
//               <option value="default">Default</option>
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//               <option value="newest">Newest Arrivals</option>
//             </select>
//           </div>
//         </div>
//       </section>
//     );
//   }
  
"use client"
import { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { RiApps2Fill } from "react-icons/ri";
import { AiOutlinePicCenter } from "react-icons/ai";

type FilterOptions = {
  itemsToShow: number;
  sortOrder: string;
};

type FilterSectionProps = {
  totalResults?: number;
  onFilterChange?: (filters: FilterOptions) => void;
};

export default function FilterSection({ totalResults = 32, onFilterChange }: FilterSectionProps) {
  const [itemsToShow, setItemsToShow] = useState(16);
  const [sortOrder, setSortOrder] = useState("default");

  const handleItemsToShowChange = (value: number) => {
    setItemsToShow(value);
    if (onFilterChange) onFilterChange({ itemsToShow: value, sortOrder });
  };

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value);
    if (onFilterChange) onFilterChange({ itemsToShow, sortOrder: value });
  };

  return (
    <section className="w-full bg-[#FAF4F4] py-4 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-grow">
          <HiOutlineAdjustmentsHorizontal className="text-lg sm:text-2xl" aria-label="Filter Icon" />
          <span className="text-black text-sm sm:text-md">Filter</span>
          <RiApps2Fill className="text-lg sm:text-2xl" aria-label="Grid View Icon" />
          <AiOutlinePicCenter className="text-lg sm:text-2xl" aria-label="List View Icon" />
          <span className="text-black text-sm sm:text-md ml-auto sm:ml-6">
            <span className="hidden sm:inline-block text-2xl text-[#9F9F9F] mr-4">|</span>
            Showing 1–{itemsToShow} of {totalResults} results
          </span>
        </div>
        <div className="flex items-center gap-4 flex-grow sm:justify-end">
          <div className="flex items-center gap-2">
            <label htmlFor="itemsToShow" className="text-black text-sm sm:text-md">
              Show
            </label>
            <select
            
              id="itemsToShow"
              value={itemsToShow}
              onChange={(e) => handleItemsToShowChange(Number(e.target.value))}
              // className="bg-white px-2 sm:px-4 py-1 text-sm sm:text-md"
                 className="bg-white w-[80px] px-4 sm:px-4 py-1 text-sm sm:text-md appearance-none active"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundPosition: 'right 1rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "20px 20px"
              }}
            >
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sortOrder" className="text-black text-sm sm:text-md">
              Sort by
            </label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={(e) => handleSortOrderChange(e.target.value)}
              // className="bg-white px-2 sm:px-4 py-1 text-sm sm:text-md"
              className="bg-white  w-[130px] px-4 sm:px-4 py-1 text-sm sm:text-md appearance-none active"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundPosition: 'right 1rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "20px 20px"
              }}
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
