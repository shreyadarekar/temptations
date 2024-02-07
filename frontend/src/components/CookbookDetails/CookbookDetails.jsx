import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCookbook } from "../../store/cookbooks";
import OpenModalButton from "../OpenModalButton";
import AddToCookbookFormModal from "../AddToCookbookFormModal/";
import "./CookbookDetails.css";

function CookbookDetails() {
  const { cookbookId } = useParams();
  const dispatch = useDispatch();

  const cookbook = useSelector((state) => state.cookbook.entries[cookbookId]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      setIsLoading(true);
      dispatch(getCookbook(cookbookId)).then(() => {
        setShouldFetch(false);
        setIsLoading(false);
      });
    }

    () => {
      setIsLoading(true);
      setShouldFetch(true);
    };
  }, [cookbookId, dispatch, shouldFetch]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="cookbook-details-container">
      <div className="cookbook-details-heading">
        <h1 className="cookbook-details-name">{cookbook.title}</h1>

        <OpenModalButton
          buttonText={
            <>
              <i className="fa-solid fa-plus-minus" /> Manage recipes in
              cookbook
            </>
          }
          className="cookbook-details-manage-recipes-button"
          modalComponent={<AddToCookbookFormModal cookbookId={cookbookId} />}
        />
      </div>

      <div className="recipes-grid">
        {cookbook.RecipeCookbooks.map((rc) => (
          <NavLink
            key={rc.Recipe.id}
            className="recipes-grid-card"
            to={`/recipes/${rc.Recipe.id}`}
            title={rc.Recipe.name}
          >
            <div className="recipes-grid-card-image-div">
              <img
                className="recipes-grid-card-image"
                src={
                  rc.Recipe.RecipeImages.length
                    ? rc.Recipe.RecipeImages[0].url
                    : ""
                }
                alt="preview"
              />
            </div>
            <div className="recipes-grid-card-title-stars-div">
              <div className="recipes-grid-card-title">
                <span style={{ fontWeight: "bold" }}>{rc.Recipe.name}</span>
              </div>
              <div>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "lightcoral" }}
                />{" "}
                <span style={{ fontWeight: "bold" }}>
                  {rc.Recipe.avgRating > 0
                    ? rc.Recipe.avgRating.toFixed(1)
                    : "New"}
                </span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default CookbookDetails;
