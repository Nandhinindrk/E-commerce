import React from 'react';
import { Link } from 'react-router-dom';
import './PromotionalBanners.css';


const PromotionalBanners = () => {
  return (
    <div className="promotional-container">
      {/* Promotional Banner */}
      <div className="promotional-banner">
        <h2>Up to 50% Off on purchase above ₹1500</h2>
        <Link to="/womens">
          <button className="promo-button">Shop Now</button>
        </Link>
      </div>

    </div>
  );
};

export default PromotionalBanners;
