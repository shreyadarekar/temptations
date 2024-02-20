import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import StarRatings from "react-star-ratings";
import { deleteReview, getRecipe } from "../../store/recipes";
import "./RecipeDetails.css";
import OpenModalButton from "../OpenModalButton";
import DeleteModal from "../DeleteModal";
import ReviewFormModal from "../ReviewFormModal/ReviewFormModal";

const formatRecipeDate = (date) => {
  let d = new Date(date),
    day = "" + d.getDate(),
    year = d.getFullYear();
  const month = d.toLocaleString("default", { month: "long" });

  if (day.length < 2) day = "0" + day;

  return `${month} ${day}, ${year}`;
};

const formatReviewDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [month, day, year].join("/");
};

function RecipeDetails() {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const recipe = useSelector((state) => state.recipe.entries[recipeId]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      setIsLoading(true);
      dispatch(getRecipe(recipeId)).then(() => {
        setShouldFetch(false);
        setIsLoading(false);
      });
    }

    () => {
      setIsLoading(true);
      setShouldFetch(true);
    };
  }, [dispatch, recipeId, shouldFetch]);

  if (isLoading && !recipe) return <h1>Loading...</h1>;

  const userAllowedToReview =
    sessionUser &&
    sessionUser.id !== recipe.User.id &&
    !recipe.Reviews.find((r) => r.User.id === sessionUser.id);

  return (
    <div className="recipe-details-container">
      <h1 className="recipe-details-name">{recipe.name}</h1>

      <div className="recipe-details-reviews-summary">
        <StarRatings
          rating={recipe.avgRating}
          starDimension="16px"
          starSpacing="4px"
          starRatedColor="lightcoral"
        />
        &nbsp;
        {recipe.avgRating}&nbsp;|&nbsp;{recipe.Reviews.length}&nbsp; reviews
      </div>

      <p className="recipe-details-description">{recipe.description}</p>

      <p className="recipe-details-upload-by-p">
        Uploaded by&nbsp;
        <span className="recipe-details-username">{recipe.User.username}</span>
        &nbsp;|&nbsp;Updated on&nbsp;{formatRecipeDate(recipe.updatedAt)}
      </p>

      <div className="recipe-details-tags">
        {recipe.Tags.map((tag, i) => (
          <span key={i} className="recipe-details-tag">
            {tag.title}
          </span>
        ))}
      </div>

      <Carousel width={500}>
        {recipe.RecipeImages.map((image, i) => (
          <div key={i}>
            <img src={image.url} />
          </div>
        ))}
      </Carousel>

      <div className="recipe-details-time-servings">
        <div className="recipe-details-time-servings-single-box">
          <h5>
            Prep time <i className="fa-solid fa-hourglass-start"></i>
          </h5>
          <h3>{recipe.prepTime} min</h3>
        </div>

        <div className="recipe-details-time-servings-single-box">
          <h5>
            Cook time <i className="fa-solid fa-hourglass-half"></i>
          </h5>
          <h3>{recipe.cookTime} min</h3>
        </div>

        <div className="recipe-details-time-servings-single-box">
          <h5>
            Total time <i className="fa-solid fa-hourglass-end"></i>
          </h5>
          <h3>{recipe.prepTime + recipe.cookTime} min</h3>
        </div>

        <div className="recipe-details-time-servings-single-box">
          <h5>
            Servings <i className="fa-solid fa-user-plus"></i>
          </h5>
          <h3>{recipe.servings}</h3>
        </div>
      </div>

      <div className="recipe-details-ingredients">
        <h2>Ingredients</h2>
        <ul className="recipe-details-ingredients-ul">
          {recipe.RecipeIngredients.map((recIng, i) => (
            <li key={i}>
              {recIng.amount} {recIng.Unit.unit} {recIng.Ingredient.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="recipe-details-directions">
        <h2>Directions</h2>
        <p>{recipe.directions}</p>
      </div>

      <div className="recipe-details-reviews">
        <h2>Reviews</h2>

        {userAllowedToReview && (
          <OpenModalButton
            buttonText={
              <>
                <i className="fa-solid fa-pen-to-square fa-sm" /> Post a review
              </>
            }
            className="recipe-details-reviews-single-button recipe-details-reviews-single-edit-button"
            modalComponent={<ReviewFormModal recipeId={recipeId} />}
          />
        )}

        {recipe.Reviews.map((review, i) => (
          <div key={i} className="recipe-details-reviews-single">
            <h4>{review.User.username}</h4>
            <div>
              <StarRatings
                rating={review.stars}
                starDimension="14px"
                starSpacing="2px"
                starRatedColor="lightcoral"
              />
              &nbsp;
              <span className="recipe-details-reviews-single-date">
                {formatReviewDate(review.updatedAt)}
              </span>
            </div>
            <p>{review.content}</p>
            {sessionUser && sessionUser.id === review.User.id && (
              <div className="recipe-details-reviews-single-buttons">
                <OpenModalButton
                  buttonText={
                    <>
                      <i className="fa-solid fa-pen-to-square fa-sm" /> Edit
                    </>
                  }
                  className="recipe-details-reviews-single-button recipe-details-reviews-single-edit-button"
                  modalComponent={
                    <ReviewFormModal
                      recipeId={recipeId}
                      reviewId={review.id}
                      inContent={review.content}
                      inStars={review.stars}
                    />
                  }
                />

                <OpenModalButton
                  buttonText={
                    <>
                      <i className="fa-solid fa-trash fa-sm" /> Delete
                    </>
                  }
                  className="recipe-details-reviews-single-button recipe-details-reviews-single-delete-button"
                  modalComponent={
                    <DeleteModal
                      title="Delete Review"
                      text={
                        <>
                          Are you sure you want to delete your review for
                          recipe:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {recipe.name}
                          </span>{" "}
                          ?
                        </>
                      }
                      onDelete={() => deleteReview(recipeId, review.id)}
                    />
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetails;
