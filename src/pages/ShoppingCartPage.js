// src/pages/ShoppingCartPage.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import './ShoppingCartPage.css'; // We'll create this CSS file next

const ShoppingCartPage = () => {
  const { cartItems, getCartTotalItems, getCartTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // In a real app, this would navigate to a checkout process
    // For this project, it can just clear the cart and show a message or redirect
    alert('Checkout process initiated! (This is a placeholder). Cart will be cleared.');
    clearCart();
    navigate('/products'); // Or to a thank you page
  };

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart-page container empty-cart">
        <h2 className="page-title">Your Shopping Cart</h2>
        <p>Your cart is currently empty.</p>
        <Link to="/products" className="action-button">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="shopping-cart-page container">
      <h2 className="page-title">Your Shopping Cart</h2>

      <div className="cart-items-list">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <h3 className="summary-title">Cart Summary</h3>
        <p className="summary-info">Total Plants: {getCartTotalItems()}</p>
        <p className="summary-info total-cost">Total Cost: ${getCartTotalPrice()}</p>
        <div className="cart-actions">
          <Link to="/products" className="action-button continue-shopping-button">
            Continue Shopping
          </Link>
          <button onClick={handleCheckout} className="action-button checkout-button">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;