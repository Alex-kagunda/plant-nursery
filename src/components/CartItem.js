// src/components/CartItem.js
import React from 'react';
import { useCart } from '../context/CartContext';
import './CartItem.css'; // We'll create this CSS file next

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  if (!item) return null;

  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    updateQuantity(item.id, item.quantity - 1); // Context handles quantity <= 0
  };

  const handleRemoveItem = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={handleDecreaseQuantity} className="quantity-button">-</button>
        <span className="quantity-text">{item.quantity}</span>
        <button onClick={handleIncreaseQuantity} className="quantity-button">+</button>
      </div>
      <div className="cart-item-total">
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="cart-item-actions">
        <button onClick={handleRemoveItem} className="remove-button">Delete</button>
      </div>
    </div>
  );
};

export default CartItem;