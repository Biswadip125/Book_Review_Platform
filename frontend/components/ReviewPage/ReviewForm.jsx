import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setReviews } from "../../src/redux/slices/reviewSlice";

const ReviewForm = () => {
  const { user } = useSelector((state) => state.user);

  const { reviews } = useSelector((state) => state.review);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      setError("Comment cannot be empty");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3000/reviews/",
        {
          bookId: id,
          userId: user._id,
          rating,
          comment,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        console.log(res);
        dispatch(setReviews([...reviews, res.data.review]));
        setComment("");
        setRating(5);
        navigate(`/book/${id}`);
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl w-full">
      <form
        className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-4  max-w-xl w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold">Leave a Review</h2>

        <label className="flex flex-col">
          <span className="font-medium">Rating</span>
          <select
            className="p-2 border rounded"
            onChange={(e) => setRating(e.target.value)}
          >
            {[5, 4, 3, 2, 1].map((num) => (
              <option key={num} value={num}>
                {num} Star{num > 1 && "s"}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col">
          <span className="font-medium">Comment</span>
          <textarea
            rows={4}
            className="p-2 border rounded resize-none"
            onChange={(e) => setComment(e.target.value)}
          />
        </label>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          {loading ? "submitting..." : "submit"}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
