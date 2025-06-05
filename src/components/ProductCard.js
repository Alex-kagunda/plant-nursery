// src/components/ProductCard.js
import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css'; // We'll create this CSS file next

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) {
    return null; // Or some placeholder/error
  }

  const handleAddToCart = () => {
    addToCart(product);
    // Optionally, add some feedback to the user (e.g., a toast notification)
    // console.log(`${product.name} added to cart`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        {/* <p className="product-description">{product.description}</p> */}
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;