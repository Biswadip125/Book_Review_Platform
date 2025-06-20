import { Router } from "express";
import {
  addBook,
  getAllBooks,
  getBookById,
} from "../controllers/book.controller.js";
import isAdmin from "../middlewares/isAdmin.js";

const router = Router();

router.get("/", getAllBooks).post("/", isAdmin, addBook);
router.get("/:id", getBookById);

export default router;
