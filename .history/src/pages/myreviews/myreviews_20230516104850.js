import React from "react";
import Cards2 from "../../components/card/Card2";
import { reviewsData } from "./reviewsData"; // Import the named export

export default function MyReviews() {
  return (
    <div>
      <div className="flex justify-center">
        <p className="text-center font-bold text-3xl">My Reviews</p>
      </div>
      <div className="list_cards">
        {reviewsData.map((review) => (
          <Cards2 key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
