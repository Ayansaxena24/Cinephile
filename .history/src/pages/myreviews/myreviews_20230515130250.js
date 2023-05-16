import React from "react";
import Cards from "../../components/card/Card";
import reviewsData from "./reviewsData"; // Import the reviewsData array

export default function MyReviews() {
  return (
    <div>
      <div className="flex justify-center">
        <p className="text-center font-bold text-3xl">My Reviews</p>
      </div>
      <div className="list_cards">
        {reviewsData.map((review, index) => (
          <Cards key={index} review={review} />
        ))}
      </div>
    </div>
  );
}
