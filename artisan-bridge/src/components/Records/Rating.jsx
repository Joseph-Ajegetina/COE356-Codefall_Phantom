import React from "react";
import { FaStar } from "react-icons/fa";
import "./rating.css";
import { useState } from "react";

export default function Star({ recordID, artisanID, recordRating }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const rateHandler = () => {
    fetch(
      `http://127.0.0.1:5000/rating/${recordID}/${artisanID}/${parseFloat(
        rating
      ).toFixed(1)}`
    ).then((response) => {
      if (response.ok) {
        return;
      }
    });
  };
  return (
    <div>
      {recordRating != "None"
        ? [...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input type="radio" name="rating" value={2} />
                <FaStar
                  size={30}
                  color={
                    ratingValue <= (hover || recordRating)
                      ? "#f59401"
                      : "#e4e5e5"
                  }
                />
              </label>
            );
          })
        : [...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => {
                    setRating(ratingValue);
                    rateHandler();
                  }}
                />
                <FaStar
                  size={30}
                  color={
                    ratingValue <= (hover || rating) ? "#f59401" : "#e4e5e5"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
    </div>
  );
}
