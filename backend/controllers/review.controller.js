import mongoose from "mongoose";
import { Review } from "../models/review.model.js";
import { Book } from "../models/book.model.js";
export const getReviewsByBookId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Id is required",
        success: false,
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid book id",
        success: false,
      });
    }

    const reviews = await Review.find({
      bookId: id,
    })
      .populate("userId", "username")
      .populate("bookId");

    return res.status(200).json({
      reviews,
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error ",
      success: false,
    });
  }
};

export const addReview = async (req, res) => {
  try {
    const { bookId, userId, rating, comment } = req.body;

    if (!bookId || !userId || !rating || !comment) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existedReview = await Review.findOne({ bookId, userId });

    if (existedReview) {
      return res.status(400).json({
        message: "Review is already exists",
        success: false,
      });
    }

    const newReview = await Review.create({
      bookId,
      userId,
      rating,
      comment,
    });

    const Reviews = await Review.find({ bookId });

    let sumOfRating = 0;

    Reviews.forEach((review) => {
      sumOfRating += review.rating;
    });

    const averageRating = Math.round(sumOfRating) / Reviews.length;

    const book = await Book.findById(bookId);

    book.rating = averageRating;
    book.reviews = Reviews.length;
    await book.save();

    return res.status(201).json({
      message: "Review added Successfully",
      success: true,
      newReview,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
