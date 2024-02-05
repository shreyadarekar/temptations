import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import StarRatings from "react-star-ratings";
import { getRecipe } from "../../store/recipes";
import "./RecipeDetails.css";

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
  const recipe = useSelector((state) => state.recipe.entries[recipeId]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
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

  if (isLoading) return <h1>Loading...</h1>;

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
        <h4 className="recipe-details-username">{recipe.User.username}</h4>
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
        {recipe.Reviews.map((review, i) => (
          <div key={i} className="recipe-details-reviews-single-review">
            <h4>{review.User.username}</h4>
            <p>
              <StarRatings
                rating={review.stars}
                starDimension="14px"
                starSpacing="2px"
                starRatedColor="lightcoral"
              />
              &nbsp;
              <span className="recipe-details-reviews-single-review-date">
                {formatReviewDate(review.updatedAt)}
              </span>
            </p>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetails;
