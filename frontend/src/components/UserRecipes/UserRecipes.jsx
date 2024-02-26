import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteRecipe, getUserRecipes } from "../../store/recipes";
import OpenModalButton from "../OpenModalButton";
import DeleteModal from "../DeleteModal";
import Loading from "../Loading/";
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

  if (isLoading) return <Loading />;

  return (
    <div className="recipes-grid">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipes-grid-card">
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
          <div className="user-recipes-grid-card-buttons-div">
            <button
              className="user-recipes-grid-card-button user-recipes-grid-card-button-edit"
              onClick={() => navigate(`../recipes/${recipe.id}/edit`)}
            >
              <i className="fa-solid fa-pen-to-square fa-sm" /> Edit
            </button>

            <OpenModalButton
              buttonText={
                <>
                  <i className="fa-solid fa-trash fa-sm" /> Delete
                </>
              }
              className="recipe-details-reviews-single-button recipe-details-reviews-single-delete-button"
              modalComponent={
                <DeleteModal
                  title="Delete Recipe"
                  text={
                    <>
                      Are you sure you want to delete recipe:{" "}
                      <span style={{ fontWeight: "bold" }}>{recipe.name}</span>{" "}
                      ?
                    </>
                  }
                  onDelete={() => deleteRecipe(recipe.id)}
                />
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserRecipes;
