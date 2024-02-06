import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserRecipes } from "../../store/recipes";
import "./UserRecipes.css";

function UserRecipes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipeEntries = useSelector((state) => state.recipe.userEntries);
  const recipes = Object.values(recipeEntries);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getUserRecipes()).then(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="user-recipes-grid">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="user-recipe-div">
          <div className="user-recipe-image-div">
            <img
              className="user-recipe-image"
              src={recipe.RecipeImages.length ? recipe.RecipeImages[0].url : ""}
              alt="preview"
            />
          </div>
          <div className="user-recipe-name-stars">
            <div>
              <span style={{ fontWeight: "bold" }}>{recipe.name}</span>
            </div>
            <div>
              <i className="fa-solid fa-star"></i>{" "}
              <span style={{ fontWeight: "bold" }}>
                {recipe.avgRating > 0 ? recipe.avgRating.toFixed(1) : "New"}
              </span>
            </div>
          </div>
          <div className="user-recipe-buttons-div">
            <button onClick={() => navigate(`../recipes/${recipe.id}/edit`)}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserRecipes;
