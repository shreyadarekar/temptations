import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { getRecipe } from "../../store/recipes";
import "./RecipeDetails.css";

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

      <div className="recipe-details-upload-by-div">
        uploaded by&nbsp;
        <h4 className="recipe-details-username">{recipe.User.username}</h4>
      </div>

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

      <h4 className="recipe-details-description">{recipe.description}</h4>

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
        <p>
          {recipe.Reviews.length} reviews <span>{recipe.avgRating}</span>
        </p>
        {recipe.Reviews.map((review, i) => (
          <div key={i}>
            <h4>{review.User.username}</h4>
            <h5>{review.stars}</h5>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetails;
