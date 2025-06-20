import React from "react";

const Genre = ({ genreName }) => {
  const genreNameUpdated =
    genreName.length > 10 ? genreName.slice(0, 11) + "..." : genreName;
  return (
    <div className="px-2 py-1 bg-gray-100 test-gray-800 flex items-center rounded-lg">
      {genreNameUpdated}
    </div>
  );
};

export default Genre;
