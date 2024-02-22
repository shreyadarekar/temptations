import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getRecipes } from "../../store/recipes";
import Loading from "../Loading/";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const recipeEntries = useSelector((state) => state.recipe.entries);
  const recipes = Object.values(recipeEntries);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getRecipes()).then(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return (
    <div className="recipes-grid">
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className="recipes-grid-card"
          to={`/recipes/${recipe.id}`}
          title={recipe.name}
        >
          <div className="recipes-grid-card-image-div">
            <img
              className="recipes-grid-card-image"
              src={recipe.RecipeImages.length ? recipe.RecipeImages[0].url : ""}
              alt="preview"
            />
          </div>
          <div className="recipes-grid-card-title-stars-div">
            <div className="recipes-grid-card-title">
              <span style={{ fontWeight: "bold" }}>{recipe.name}</span>
            </div>
            <div>
              <i className="fa-solid fa-star" style={{ color: "lightcoral" }} />{" "}
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
