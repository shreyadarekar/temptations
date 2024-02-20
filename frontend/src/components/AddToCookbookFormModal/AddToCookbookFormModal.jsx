import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { addRecipesToCookbook, getCookbook } from "../../store/cookbooks";
import "./AddToCookbookFormModal.css";
import { getRecipes } from "../../store/recipes";

function AddToCookbookFormModal({ cookbookId }) {
  const dispatch = useDispatch();
  const [recipeIds, setRecipeIds] = useState([]);
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const cookbook = useSelector((state) => state.cookbook.entries[cookbookId]);
  const recipeEntries = useSelector((state) => state.recipe.entries);
  const recipes = Object.values(recipeEntries);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      setIsLoading(true);
      dispatch(getRecipes()).then(() =>
        dispatch(getCookbook(cookbookId)).then((cb) => {
          setRecipeIds(cb.RecipeCookbooks.map((rc) => rc.Recipe.id));
          setShouldFetch(false);
          setIsLoading(false);
        })
      );
    }

    () => {
      setShouldFetch(true);
    };
  }, [cookbookId, dispatch, shouldFetch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    return dispatch(addRecipesToCookbook(cookbookId, recipeIds))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  const RecipeCheckbox = ({ label, value }) => (
    <div>
      <input
        type="checkbox"
        id={value}
        name={value}
        onChange={(e) => {
          const currRecipeId = Number(e.target.name);
          let newRecipeIds = recipeIds.slice();
          if (e.target.checked) newRecipeIds.push(currRecipeId);
          else newRecipeIds = newRecipeIds.filter((id) => id !== currRecipeId);
          setRecipeIds(newRecipeIds);
        }}
        checked={recipeIds.includes(value)}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="add-to-cookbook-modal-container">
      <form className="add-to-cookbook-modal-form" onSubmit={handleSubmit}>
        <h2 className="add-to-cookbook-modal-heading">
          Add/remove recipes in cookbook: {cookbook.title}
        </h2>

        <div className="add-to-cookbook-modal-recipes-grid">
          {recipes.map((r) => (
            <RecipeCheckbox key={r.id} label={r.name} value={r.id} />
          ))}
        </div>

        {errors.message && <p className="error">{errors.message}</p>}

        <button className="add-to-cookbook-modal-button" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default AddToCookbookFormModal;
