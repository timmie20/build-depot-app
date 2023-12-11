import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ store }) => {
  const [currentRate, setCurrentRate] = useState(store.starRate);
  return (
    <div className="flex items-center">
      {[...Array(5)].map((star, index) => {
        const starNum = index + 1;
        return (
          <div key={index}>
            <FaStar
              color={starNum <= currentRate ? "#F5BF55" : "#6D6D73"}
              size={12}
            />
          </div>
        );
      })}
      <p className="ml-1 font-normal text-dark-50">{store.review} reviews</p>
    </div>
  );
};

export default StarRating;
