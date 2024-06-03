import React from 'react';
import '../../styles/starRating.css';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const empty = totalStars - filledStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {/* {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="star filled">&#9733;</span>
      ))}
      {halfStar && <span className="star half">&#9733;</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star">&#9733;</span>
      ))} */}
    </div>
  );
};

export default StarRating;
