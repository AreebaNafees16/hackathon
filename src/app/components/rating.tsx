import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

 export function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex space-x-2">
      {/* Full Stars */}
      {Array(fullStars).fill(null).map((_, index) => (
        <span key={`full-${index}`} className="text-yellow-300 text-lg"><FaStar /></span>
      ))}

      {/* Half Star */}
      {halfStar && <span className="text-yellow-300 text-lg"><FaStarHalf /></span>}

      {/* Empty Stars */}
      {Array(emptyStars).fill(null).map((_, index) => (
        <span
          key={`empty-${index}`}
          className="text-gray-400 text-lg"
          style={{ WebkitTextStroke: '1px gray', color: 'transparent' }}
        >
          <CiStar />
        </span>

        
      ))}

      
    </div>
  );
}



