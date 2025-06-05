// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

// Placeholder for a shopping cart icon
const ShoppingCartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zm-1.45-5.97L7.43 4H3V2h3.27l.94 2L17.6 12.06l-1.05 1.97H7.96l1.18 2.11c.14.25.41.42.71.42h7.62v-2H8.53l-.14-.25.03-.03L8.1 13h7.45M12 2C9.79 2 8 3.79 8 6H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-2c0-2.21-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2H10c0-1.1.9-2 2-2z" />
  </svg>
);

const Header = () => {
  const { getCartTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getCartTotalItems();

  return (
    <header className="app-header">
      <div className="container header-content">
        <Link to="/" className="logo-link">
          <h1 className="logo">Paradise Nursery</h1>
        </Link>
        <nav className="navigation">
          {/* Show 'Products' link if not on /products page AND not on landing page */}
          {location.pathname !== '/products' && location.pathname !== '/' && (
            <Link to="/products" className="nav-link">Products</Link>
          )}

          {/* Show 'Cart' link if not on /cart page */}
          {location.pathname !== '/cart' && (
            <Link to="/cart" className="nav-link cart-link">
              <ShoppingCartIcon />
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;