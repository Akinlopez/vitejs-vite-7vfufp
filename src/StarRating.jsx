import React from 'react';
import App from './App';

function StarRating({ rating }) {
  const stars = Array.from({ length: rating }, (_, index) => (
    <img
      key={index}
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
  ));

  return <div className="star-wrapper"></div>;
}

export default StarRating;
