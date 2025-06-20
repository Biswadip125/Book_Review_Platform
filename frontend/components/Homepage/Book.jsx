import { Book, Star } from "lucide-react";
import Genre from "./Genre";
import { Link } from "react-router-dom";
const BookComponent = ({ bookDetails }) => {
  return (
    <Link to={`book/${bookDetails._id}`}>
      <div className="w-70 h-60 bg-gray-600/30 rounded-lg px-3 py-2 cursor-pointer shadow-xl flex flex-col gap-2 hover:scale-105 transition-transform duration-200">
        {/*Header*/}
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center gap-2">
            <Book className="text-indigo-600" />
            <h1 className="text-lg font-bold">{bookDetails.title}</h1>
          </div>

          <p className="font-medium text-gray-600 italic">
            {" "}
            written by {bookDetails.author}
          </p>
        </div>

        {/*Description */}
        <p className="text-sm  text-gray-700 line-clamp-2">
          {bookDetails.description}
        </p>

        {/*footer*/}
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p>Published: {bookDetails.publishedYear}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="text-yellow-500 fill-yellow-400" size={16} />
              <p className="text-center font-medium text-md">
                Rating: {bookDetails.rating.toFixed(1)}
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Reviews ({bookDetails.numReviews})
            </p>
          </div>

          <div className="flex gap-4">
            {bookDetails.genre.map((genreName) => (
              <Genre genreName={genreName} key={genreName} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookComponent;
