const express = require("express");
const { Review, User } = require("../../db/models");
const { requireAuth, forbiddenError } = require("../../utils/auth");
const { validateReview } = require("../../utils/validation");

const router = express.Router();

// reviewNotFound
const reviewNotFound = function (_req, _res, next) {
  const err = new Error("Review couldn't be found");
  err.title = "Couldn't find a Review with the specified id";
  err.errors = { message: "Review couldn't be found" };
  err.status = 404;
  return next(err);
};

// edit a review
router.put(
  "/:reviewId",
  [requireAuth, ...validateReview],
  async (req, res, next) => {
    const review = await Review.findByPk(req.params.reviewId);
    if (!review) return reviewNotFound(req, res, next);

    if (review.userId !== req.user.id) return forbiddenError(req, res, next);

    await review.update(req.body);

    const fullReview = await Review.findByPk(review.id, {
      include: [{ model: User, attributes: ["id", "username"] }],
    });

    return res.json(fullReview);
  }
);

// delete a review
router.delete("/:reviewId", requireAuth, async (req, res, next) => {
  const review = await Review.findByPk(req.params.reviewId);
  if (!review) return reviewNotFound(req, res, next);

  if (review.userId !== req.user.id) return forbiddenError(req, res, next);

  await review.destroy();

  return res.json({ message: "Successfully deleted" });
});

module.exports = router;
