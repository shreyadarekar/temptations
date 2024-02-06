import { useState } from "react";
import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";
import { useModal } from "../../context/Modal";
import { postReview, putReview } from "../../store/recipes";
import "./ReviewFormModal.css";

function ReviewFormModal({
  recipeId,
  reviewId = "",
  inContent = "",
  inStars = 0,
}) {
  const dispatch = useDispatch();
  const [content, setContent] = useState(inContent);
  const [stars, setStars] = useState(inStars);
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    // const formData = new FormData();

    if (!reviewId) {
      // formData.append("stars", stars);
      // formData.append("content", content);

      return dispatch(postReview(recipeId, { content, stars: Number(stars) }))
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    } else {
      return dispatch(putReview(reviewId, { content, stars: Number(stars) }))
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
  };

  return (
    <div className="review-modal-container">
      <form className="review-modal-form" onSubmit={handleSubmit}>
        <textarea
          className="review-modal-content-textarea"
          type="textarea"
          rows="8"
          cols="33"
          maxLength={256}
          placeholder="Write review content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <StarRatings
          starDimension="18px"
          starSpacing="4px"
          starRatedColor="lightcoral"
          rating={stars}
          changeRating={(stars) => setStars(stars)}
        />

        {errors.message && <p className="error">{errors.message}</p>}

        <button className="review-modal-button" type="submit">
          {reviewId ? "Update review" : "Post review"}
        </button>
      </form>
    </div>
  );
}

export default ReviewFormModal;
