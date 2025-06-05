// src/pages/ProductListingPage.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import plantData from '../data/plantData';
import './ProductListingPage.css'; // We'll create this CSS file next

const ProductListingPage = () => {
  const [allPlants] = useState(plantData); // In a real app, this might be fetched

  // Get unique categories for filtering (optional feature, good for structure)
  const categories = ['All', ...new Set(allPlants.map(plant => plant.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPlants = selectedCategory === 'All'
    ? allPlants
    : allPlants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="product-listing-page container">
      <h2 className="page-title">Our Plants</h2>

      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredPlants.length > 0 ? (
        <div className="product-grid">
          {filteredPlants.map(plant => (
            <ProductCard key={plant.id} product={plant} />
          ))}
        </div>
      ) : (
        <p className="no-products-message">
          No plants found in this category.
        </p>
      )}
    </div>
  );
};

export default ProductListingPage;