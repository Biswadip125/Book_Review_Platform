import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const BookDetails = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-2">{book?.title}</h1>
      <p className="text-gray-700 text-lg mb-1">by {book?.author}</p>
      <p className="text-sm text-gray-500 mb-3">
        Published: {book?.publishedYear}
      </p>

      <div className="flex gap-2 flex-wrap mb-3">
        {book?.genre.map((g, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {g.length > 10 ? g.slice(0, 10) + "..." : g}
          </span>
        ))}
      </div>

      <p className="mb-4 text-gray-700">{book?.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Star className="text-yellow-500" fill="yellow" />
          <p className="text-lg font-semibold">
            Rating: {book?.rating?.toFixed(1) || "N/A"} ({book?.numReviews}{" "}
            reviews)
          </p>
        </div>
        <Link to={`/book/${book?._id}/add-review`}>
          <button className="bg-gray-200 hover:bg-gray-300 transition-all duration-300 text-gray-800 px-3 py-2 rounded-full cursor-pointer">
            Add Review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
