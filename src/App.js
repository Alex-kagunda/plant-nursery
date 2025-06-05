// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage'; // Renamed from ProductPage in GitHub
import ShoppingCartPage from './pages/ShoppingCartPage';
import Header from './components/Header'; // We'll create this
import './App.css'; // We'll create this

function App() {
  return (
    <>
      {/* Header will be conditionally rendered or styled differently based on page */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={
          <>
            <Header />
            <ProductListingPage />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Header />
            <ShoppingCartPage />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;