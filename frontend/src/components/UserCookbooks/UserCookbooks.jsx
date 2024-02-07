import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserCookbooks.css";
import { getCookbooks } from "../../store/cookbooks";
import OpenModalButton from "../OpenModalButton";
import CookbookFormModal from "../CookbookFormModal/CookbookFormModal";
import { NavLink } from "react-router-dom";

function UserCookbooks() {
  const dispatch = useDispatch();

  const cookbookEntries = useSelector((state) => state.cookbook.entries);
  const cookbooks = Object.values(cookbookEntries);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      setIsLoading(true);
      dispatch(getCookbooks()).then(() => {
        setShouldFetch(false);
        setIsLoading(false);
      });
    }

    () => {
      setShouldFetch(true);
    };
  }, [dispatch, shouldFetch]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="cookbooks-container">
      <h1 className="cookbooks-container-title">My Cookbooks</h1>

      <OpenModalButton
        buttonText={
          <>
            <i className="fa-solid fa-folder-plus" /> New Cookbook
          </>
        }
        className="cookbooks-container-new-cookbook-button"
        modalComponent={<CookbookFormModal />}
      />

      <div className="cookbooks-cards">
        {cookbooks.map((cookbook) => (
          <NavLink
            key={cookbook.id}
            className="cookbooks-card"
            to={`/cookbooks/${cookbook.id}`}
            title={cookbook.name}
          >
            <div className="cookbooks-card-header">
              <h4 className="cookbooks-card-title">{cookbook.title}</h4>
              <span>{cookbook.RecipeCookbooks.length} recipes</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default UserCookbooks;
