// StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <span key={index} className={index < rating ? 'filled' : 'empty'}>
      ★
    </span>
  ));

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
