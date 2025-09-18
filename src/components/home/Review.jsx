import React from "react";
import CardReview from "../CardReview"; // pastikan path sesuai
import { FaComments } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    country: "Amerika",
    comment: "Amazing stay! The view was breathtaking and the staff was very helpful.",

    rating: 5,
  },
  {
    name: "Jane Smith",
    country: "Jepang",
    comment: "Comfortable and clean. A great choice for a short stay in Jakarta.",

    rating: 4,
  },

  {
    name: "Alice Wang",
    country: "Singapore",
    comment: "Kamar bersih dan nyaman, sangat direkomendasikan.",
    rating: 4,
  },
];

const Review = () => {
  return (
    <div className="bg-gray-800 py-10 px-4 ">
      <h2 className="text-2xl font-semibold text-center text-white ">Guests' Impressions</h2>
      <div className="flex justify-center mb-6">
        <FaComments size={70} color="gray" />
      </div>
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <CardReview key={index} type="review" title={review.name} subtitle={review.country} description={`"${review.comment}"`} rating={review.rating} />
        ))}
      </div>
    </div>
  );
};

export default Review;
