import QuantitySelector from "./counter";
import React, { useState, useEffect } from "react";
// ProductDetailPage Component
const ProductDetailPage = ({ productData }: { productData: any }) => {
    const [quantity, setQuantity] = useState(1);
  
    // Handle quantity change
    const handleQuantityChange = (newQuantity: number) => {
      setQuantity(newQuantity);
      console.log("Quantity updated:", newQuantity); // Debugging step
    };
  
    // Add product to cart
    const addToCart = (id: string, quantity: number) => {
      // Debugging: Check what's being passed
      console.log("Adding to cart with ID:", id, "and Quantity:", quantity);
  
      // Retrieve cart from localStorage or initialize as empty array
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
  
      // Check if the product is already in the cart
      const existingProductIndex = savedCart.findIndex(
        (item: any) => item.id === id
      );
  
      if (existingProductIndex > -1) {
        // Product exists, update quantity
        savedCart[existingProductIndex].quantity += quantity;
        console.log("Updated existing product:", savedCart[existingProductIndex]);
      } else {
        // Product doesn't exist, add new product
        savedCart.push({ id, quantity });
        console.log("Added new product:", { id, quantity });
      }
  
      // Save updated cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(savedCart));
  
      // Update cart count (total quantity in cart)
      setCartCount(savedCart.reduce((acc: any) => acc + acc.quantity, 0));
  
      // Show popup feedback (optional)
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    };
  
    return (
      <div>
        <h1>{productData.name}</h1>
        <p>{productData.description}</p>
  
        {/* Quantity Selector */}
        <QuantitySelector
          initialQuantity={quantity}
          onQuantityChange={handleQuantityChange}
        />
  
        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(productData._id, quantity)} // Pass both ID and quantity
          className="bg-primary text-black border rounded-md md:px-8 md:py-3 transition-all duration-300 hover:outline hover:outline-2 hover:outline-black"
        >
          Add To Cart
        </button>
      </div>
    );
  };
  
  export default ProductDetailPage;

function setCartCount(arg0: any) {
    throw new Error("Function not implemented.");
}
function setShowPopup(arg0: boolean) {
    throw new Error("Function not implemented.");
}

