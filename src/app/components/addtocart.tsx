import React, { useState } from 'react';
import Image from 'next/image';

// Example of a product data
const productData = {
  id: '1',
  name: 'Sofa',
  price: 250000,
  image: '/sofa.jpg',
  rating: 4.5,
  description: 'Comfortable and stylish sofa for your living room.',
};

export default function ProductDetails() {
  // Cart state to hold cart items
  const [cart, setCart] = useState<any[]>([]);

  // Function to handle adding product to the cart
  const addToCart = (product: any) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="w-full">
      {/* Product details */}
      <div className="flex justify-between">
        <div className="product-details">
          <Image
            src={productData.image}
            alt={productData.name}
            height={200}
            width={200}
            className="rounded"
          />
          <h2>{productData.name}</h2>
          <p>{productData.description}</p>
          <p>Price: Rs. {productData.price}</p>
          <button onClick={() => addToCart(productData)} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Cart */}
      <div className="cart-section">
        <h3>Your Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <Image
                src={item.image}
                alt={item.name}
                height={50}
                width={50}
                className="rounded"
              />
              <span>{item.name}</span>
              <span>Rs. {item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
