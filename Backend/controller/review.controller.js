import Review from "../model/review.model.js";

export const addReview = async (req, res) => {
  try {
    const { bookId } = req.params;
    const { rating, comment } = req.body;
    if (!rating || !comment) {
      return res
        .status(400)
        .json({ success: false, message: "Rating and comment are required" });
    }

    const review = await Review.create({
      book: bookId,
      user: req.user.userId,
      rating,
      comment,
    });

    res.status(201).json({
      success: true,
      review,
      message: "review is added ",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getReviewsByBook = async (req, res) => {
  try {
    const { bookId } = req.params;

    const reviews = await Review.find({ book: bookId }).populate(
      "user",
      "fullname email"
    );

    res.status(200).json({ success: true, reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a review (only owner)
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    }

    if (review.user.toString() !== req.user.userId) {
      return res
        .status(403)
        .json({
          success: false,
          message: "Not authorized to delete this review",
        });
    }

    await review.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
