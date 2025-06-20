import { Router } from "express";
import {
  addReview,
  getReviewsByBookId,
} from "../controllers/review.controller.js";

const router = Router();

router.get("/:id", getReviewsByBookId);
router.post("/", addReview);

export default router;
