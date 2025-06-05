// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import './LandingPage.css';

const LandingPage = () => {
  // const handleClick = (event) => { // You can remove this debug handler now
  //   console.log("Get Started Link clicked!");
  // };

  return (
    <div className="landing-page"> {/* This will now handle the background */}
      <div className="hero-content"> {/* This is for the text and button overlay */}
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
          Welcome to Paradise Nursery, your one-stop shop for the finest and most vibrant houseplants.
          We believe that every home deserves a touch of nature, and our carefully curated collection
          is here to help you bring the outdoors in. Discover plants that purify your air,
          brighten your spaces, and lift your spirits.
        </p>
        <Link to="/products" className="get-started-button"> {/* Use the Link component */}
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;