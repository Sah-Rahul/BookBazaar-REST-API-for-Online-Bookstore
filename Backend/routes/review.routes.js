import express from "express";
import {
  addReview,
  deleteReview,
  getReviewsByBook,
} from "../controller/review.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/books/:bookId/reviews", isAuthenticated, addReview);

// Get reviews for a book (public)
router.get("/books/:bookId/reviews", getReviewsByBook);

// Delete review (owner only)
router.delete("/reviews/:id", isAuthenticated, deleteReview);

export default router;
