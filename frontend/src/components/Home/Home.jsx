import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getRecipes } from "../../store/recipes";
import Loading from "../Loading/";
import "./Home.css";
import { TAGS } from "../../store/tags";

function Home() {
  const dispatch = useDispatch();
  const recipeEntries = useSelector((state) => state.recipe.entries);
  const recipes = Object.values(recipeEntries);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState({ name: "", tags: [] });

  useEffect(() => {
    dispatch(getRecipes(search.name, JSON.stringify(search.tags))).then(
      // () => setIsLoading(false)
      setTimeout(function () {
        setIsLoading(false);
      }, 2000)
    );
  }, [dispatch, search.name, search.tags]);

  const TagCheckbox = ({ label, value }) => (
    <div className="home-checkbox">
      <input
        type="checkbox"
        id={value}
        name={value}
        onChange={(e) => {
          let tags = search.tags.slice();
          if (e.target.checked) tags.push(e.target.name);
          else tags = tags.filter((t) => t !== e.target.name);
          setSearch({ ...search, tags });
        }}
        checked={search.tags.includes(value)}
      />
      <label className="home-checkbox-label" htmlFor={value}>
        {label}
      </label>
    </div>
  );

  if (isLoading) return <Loading />;

  return (
    <div className="home-container">
      <div className="home-search-container">
        <i
          className="fa-solid fa-magnifying-glass home-search-icon"
          style={{ color: "#797c81" }}
        ></i>
        <input
          className="home-search-input"
          placeholder="Search by recipe name (e.g. pasta, etc.)"
          value={search.name}
          onChange={(e) => setSearch({ ...search, name: e.target.value })}
        />
      </div>
      <div className="home-partition-container">
        <div className="home-filters-container">
          <h4 className="home-tags-header">Filter by tags:</h4>
          <div id="tags" className="home-tags-grid">
            {TAGS.map((tag) => (
              <TagCheckbox
                key={tag.value}
                label={tag.label}
                value={tag.value}
              />
            ))}
          </div>
        </div>
        <div className="home-recipes-container">
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
                    src={
                      recipe.RecipeImages.length
                        ? recipe.RecipeImages[0].url
                        : ""
                    }
                    alt="preview"
                  />
                </div>
                <div className="recipes-grid-card-title-stars-div">
                  <div className="recipes-grid-card-title">
                    <span style={{ fontWeight: "bold" }}>{recipe.name}</span>
                  </div>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "lightcoral" }}
                    />{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {recipe.avgRating > 0
                        ? recipe.avgRating.toFixed(1)
                        : "New"}
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: "14px" }}>
                  by{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {recipe.User.username}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
