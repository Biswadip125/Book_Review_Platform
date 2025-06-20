import mongoose, { mongo } from "mongoose";
import { Book } from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = (page - 1) * 10;

    const books = await Book.find().skip(skip).limit(limit);

    const totalBooks = await Book.countDocuments();

    return res.status(200).json({
      message: "Books fetched Successfully",
      currentPage: page,
      totalPages: Math.ceil(totalBooks / limit),
      totalBooks,
      books,
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "invalid Book id",
      });
    }

    const book = await Book.findById(id);

    if (!book) {
      return res.status(400).json({
        message: "Book not found",
        success: false,
      });
    }

    return res.status(200).json({
      book,
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const addBook = async (req, res) => {
  try {
    const { title, description, author, genre, publishedYear } = req.body;

    if (!title || !description || !author || !genre || !publishedYear) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existedBook = await Book.findOne({ title });

    if (existedBook) {
      return res.status(400).json({
        message: "Book is already exist",
        success: false,
      });
    }

    const newBook = Book.create({
      title,
      description,
      author,
      genre,
      publishedYear,
    });

    return res.status(201).json({
      message: "Book Created Successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
      success: true,
    });
  }
};
