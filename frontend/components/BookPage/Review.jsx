import React from "react";

const Review = ({ review }) => {
  return (
    <div key={review._id} className="border-b pb-3">
      <div className="flex items-center gap-2 mb-1">
        <p className="font-medium">{review.userId.username}</p>
        <span className="text-sm text-gray-500">Rated: {review.rating}</span>
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};

export default Review;
