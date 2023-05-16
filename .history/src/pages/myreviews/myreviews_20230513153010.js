import React from "react";
import "./MyReviews.css";
import { Link } from "react-router-dom";
import reviewsData from "./myreviews";

const MyReviews = () => {
  return (
    <div className="myReviews">
      <div className="myReviews__header">
        <h1>My Reviews</h1>
        <Link to="/">Back to Home</Link>
      </div>
      <div className="myReviews__list">
        {reviewsData.map((review) => (
          <div className="myReview" key={review.id}>
            <div className="myReview__posterBox">
              <img
                className="myReview__poster"
                src={review.poster_path}
                alt={`${review.title} Poster`}
              />
            </div>
            <div className="myReview__details">
              <h2 className="myReview__title">{review.title}</h2>
              <div className="myReview__description">{review.description}</div>
              <div className="myReview__rating">
                {review.rating} <i className="fas fa-star" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
