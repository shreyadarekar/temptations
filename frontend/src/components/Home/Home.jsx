import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getRecipes } from "../../store/recipes";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const recipeEntries = useSelector((state) => state.recipe.entries);
  const recipes = Object.values(recipeEntries);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getRecipes()).then(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="recipes-grid">
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className="recipe-div"
          to={`/recipes/${recipe.id}`}
          title={recipe.name}
        >
          <div className="recipe-image-div">
            <img
              className="recipe-image"
              src={recipe.RecipeImages[0].url}
              alt="preview"
            />
          </div>
          <div className="recipe-location-stars">
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
          <div style={{ fontSize: "14px" }}>
            by{" "}
            <span style={{ fontWeight: "bold" }}>{recipe.User.username}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Home;
