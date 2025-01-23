
// export default ProductSizeSelector;
import { useState } from 'react';

// Define the Product type
type Product = {
  size: string[];
  color: string[];
};

type Props = {
  product: Product;
};

function ProductOptionsSelector({ product }: Props) {
  // State to track selected size and color
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Handle size and color selection
  const handleSizeClick = (size: string) => setSelectedSize(size);
  const handleColorClick = (color: string) => setSelectedColor(color);

  return (
    <div className="mt-4">
      {/* Size Selection */}
      <h4 className="font-semibold text-[#9F9F9F]">Size</h4>
      <div className="flex gap-2 mt-2">
        {product.size.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`border rounded-md w-10 h-10 bg-[#FAF4F4] hover:bg-[#FBEBB5] ${
              selectedSize === size ? 'border-black bg-[#FBEBB5]' : ''
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Color Selection */}
      <h4 className="font-semibold text-[#9F9F9F] mt-6">Color</h4>
      <div className="flex gap-2 mt-2">
        {product.color.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorClick(color)}
            className={`border rounded-full w-10 h-10 ${color} ${
              selectedColor === color ? 'ring-2 ring-black' : ''
            }`}
            aria-label={`Select ${color}`}
          ></button>
        ))}
      </div>

      {/* Display Selected Options */}
      <div className="mt-4 text-sm text-green-600">
        {selectedSize && <p>Selected Size: {selectedSize}</p>}
        {selectedColor && (
          <p>
            Selected Color:{' '}
            <span
              className={`inline-block w-4 h-4 rounded-full ${selectedColor}`}
            ></span>
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductOptionsSelector;
