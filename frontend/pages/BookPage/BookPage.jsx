import axios from "axios";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedBook } from "../../src/redux/slices/bookSlice";
import { setReviews } from "../../src/redux/slices/reviewSlice";
import Review from "../../components/BookPage/Review";
import BookDetails from "../../components/BookPage/BookDetails";

const BookPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const selectedBook = useSelector((store) => store.book.selectedBook);
  const reviews = useSelector((store) => store.review.reviews);
  const [loading, setLoading] = useState(false);

  const fetchBook = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/books/${id}`);
      dispatch(setSelectedBook(data.book));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchReviews = async () => {
    const { data } = await axios.get(`http://localhost:3000/reviews/${id}`);
    dispatch(setReviews(data.reviews));
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchBook(), fetchReviews()]).then(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-4 text-center">Loading</p>;
  return (
    <div className="max-w-5xl w-full mx-auto p-4 space-y-6">
      <BookDetails book={selectedBook} />

      {/* Reviews Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">
          User Reviews ({reviews.length})
        </h2>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <div className="space-y-4">
            {reviews?.map((review) => (
              <Review review={review} key={review._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookPage;
