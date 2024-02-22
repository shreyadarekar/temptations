import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipe, postRecipe, putRecipe } from "../../store/recipes";
import Loading from "../Loading/";
import "./RecipeForm.css";

function RecipeForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recipeId } = useParams();
  const existingRecipe = useSelector((state) => state.recipe.entries[recipeId]);
  const [shouldFetch, setShouldFetch] = useState(recipeId);
  const [isLoading, setIsLoading] = useState(!!recipeId);

  const unitsEntries = useSelector((state) => state.unit.entries);
  const allUnits = Object.values(unitsEntries);
  const emptyIngredient = {
    amount: 0.1,
    unitId: 1,
    ingredientId: "",
  };

  const ingredientsEntries = useSelector((state) => state.ingredient.entries);
  const allIngredients = Object.values(ingredientsEntries);

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    tags: [],
    prepTime: 0,
    cookTime: 0,
    servings: 1,
    ingredients: [emptyIngredient],
    directions: "",
    images: [],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (shouldFetch) {
      setIsLoading(true);
      dispatch(getRecipe(recipeId)).then((res) => {
        setShouldFetch(false);
        setIsLoading(false);
        setRecipe({
          name: res.name,
          description: res.description,
          tags: res.Tags.map((t) => t.title),
          prepTime: res.prepTime,
          cookTime: res.cookTime,
          servings: res.servings,
          ingredients: res.RecipeIngredients.map((ri) => ({
            amount: ri.amount,
            unitId: ri.unitId,
            ingredientId: ri.ingredientId,
          })),
          directions: res.directions,
          images: [],
        });
      });
    }

    () => {
      setIsLoading(true);
    };
  }, [dispatch, existingRecipe, recipeId, shouldFetch]);

  if (isLoading) return <Loading />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const recipeFormData = new FormData();
    recipeFormData.append("name", recipe.name);
    recipeFormData.append("description", recipe.description);
    recipeFormData.append("prepTime", recipe.prepTime);
    recipeFormData.append("cookTime", recipe.cookTime);
    recipeFormData.append("servings", recipe.servings);
    recipeFormData.append("tags", JSON.stringify(recipe.tags));
    recipeFormData.append("ingredients", JSON.stringify(recipe.ingredients));
    recipeFormData.append("directions", recipe.directions);
    for (const file of recipe.images) {
      recipeFormData.append("images", file);
    }

    // if (!recipeId) {
    return dispatch(
      recipeId
        ? putRecipe(recipeId, recipeFormData)
        : postRecipe(recipeFormData)
    )
      .then(async (res) => {
        navigate(`/recipes/${res.id}`);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
    // } else {
    //   return dispatch()
    //     .then(async (res) => {
    //       navigate(`/recipes/${res.id}`);
    //     })
    //     .catch(async (res) => {
    //       const data = await res.json();
    //       if (data && data.errors) {
    //         setErrors(data.errors);
    //       }
    //     });
    // }
  };

  const TagCheckbox = ({ label, value }) => (
    <div>
      <input
        type="checkbox"
        id={value}
        name={value}
        onChange={(e) => {
          let tags = recipe.tags.slice();
          if (e.target.checked) tags.push(e.target.name);
          else tags = tags.filter((t) => t !== e.target.name);
          setRecipe({ ...recipe, tags });
        }}
        checked={recipe.tags.includes(value)}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );

  return (
    <form
      className="recipe-form"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div className="recipe-label-input-pair">
        <label htmlFor="title" className="recipe-label">
          Title
        </label>
        <input
          className="recipe-title"
          type="text"
          maxLength={100}
          placeholder="Provide an eye catching title for your recipe"
          value={recipe.name}
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          required
          id="title"
        />
      </div>

      <div className="recipe-label-input-pair">
        <label htmlFor="description" className="recipe-label">
          Description
        </label>
        <textarea
          className="recipe-description"
          type="textarea"
          rows="6"
          cols="33"
          maxLength={256}
          placeholder="Write a few lines for this recipe"
          value={recipe.description}
          onChange={(e) =>
            setRecipe({ ...recipe, description: e.target.value })
          }
          required
          id="description"
        />
      </div>

      <div className="recipe-time-servings">
        <div className="recipe-label-input-pair">
          <label htmlFor="prepTime" className="recipe-label">
            Prep Time
          </label>
          <input
            className="recipe-prepTime"
            type="number"
            min="0"
            value={recipe.prepTime}
            onChange={(e) => setRecipe({ ...recipe, prepTime: e.target.value })}
            id="prepTime"
          />
        </div>

        <div className="recipe-label-input-pair">
          <label htmlFor="cookTime" className="recipe-label">
            Cook Time
          </label>
          <input
            className="recipe-cookTime"
            type="number"
            min="0"
            value={recipe.cookTime}
            onChange={(e) => setRecipe({ ...recipe, cookTime: e.target.value })}
            id="cookTime"
          />
        </div>

        <div className="recipe-label-input-pair">
          <label htmlFor="servings" className="recipe-label">
            Servings
          </label>
          <input
            className="recipe-servings"
            type="number"
            min="1"
            value={recipe.servings}
            onChange={(e) => setRecipe({ ...recipe, servings: e.target.value })}
            id="servings"
          />
        </div>
      </div>

      <div className="recipe-label-input-pair">
        <label htmlFor="tags" className="recipe-label">
          Tags
        </label>
        <span style={{ fontSize: "14px" }}>
          Add tags (if any) to your recipe
        </span>

        <div id="tags" className="recipe-tags-grid">
          <TagCheckbox label="Indian" value="indian" />
          <TagCheckbox label="American" value="american" />
          <TagCheckbox label="Italian" value="italian" />
          <TagCheckbox label="Chinese" value="chinese" />
          <TagCheckbox label="Thai" value="thai" />
          <TagCheckbox label="Korean" value="korean" />
          <TagCheckbox label="Seafood" value="seafood" />
          <TagCheckbox label="Gluten-free" value="gluten-free" />
          <TagCheckbox label="Vegan" value="vegan" />
          <TagCheckbox label="Non-dairy" value="non-dairy" />
        </div>
      </div>

      <div className="recipe-label-input-pair">
        <label className="recipe-label">Ingredients</label>
        <span style={{ fontSize: "14px" }}>
          Add ingredients for your recipe
        </span>

        <div className="recipe-ingredients-header">
          <h5 className="recipe-ingredients-input">Amount</h5>
          <h5 className="recipe-ingredients-select">Unit</h5>
          <h5 className="recipe-ingredients-select">Ingredient</h5>
          <h5 className="recipe-ingredients-add-new"></h5>
        </div>

        <div className="recipe-ingredients-inputs-container">
          {recipe.ingredients.map((ing, ingIdx) => (
            <div key={ingIdx} className="recipe-ingredients-inputs">
              <input
                className="recipe-ingredients-input"
                type="number"
                min="0.1"
                step="0.1"
                value={ing.amount}
                onChange={(e) => {
                  const existingIngredients = [...recipe.ingredients];
                  existingIngredients[ingIdx] = {
                    ...existingIngredients[ingIdx],
                    amount: Number(e.target.value),
                  };
                  setRecipe({ ...recipe, ingredients: existingIngredients });
                }}
              />

              <select
                className="recipe-ingredients-select"
                value={ing.unitId}
                onChange={(e) => {
                  const existingIngredients = [...recipe.ingredients];
                  existingIngredients[ingIdx] = {
                    ...existingIngredients[ingIdx],
                    unitId: Number(e.target.value),
                  };
                  setRecipe({ ...recipe, ingredients: existingIngredients });
                }}
              >
                {allUnits.map((unit, i) => (
                  <option key={i} value={unit.id}>
                    {unit.unit}
                  </option>
                ))}
              </select>

              <select
                className="recipe-ingredients-select"
                value={ing.ingredientId}
                onChange={(e) => {
                  const existingIngredients = [...recipe.ingredients];
                  existingIngredients[ingIdx] = {
                    ...existingIngredients[ingIdx],
                    ingredientId: Number(e.target.value),
                  };
                  setRecipe({ ...recipe, ingredients: existingIngredients });
                }}
                required
              >
                <option key={-1} value="">
                  ---Select---
                </option>
                {allIngredients.map((ing, i) => (
                  <option key={i} value={ing.id}>
                    {ing.name}
                  </option>
                ))}
              </select>

              <button
                className="recipe-ingredients-add-new recipe-ingredients-add-new-button"
                type="button"
                onClick={() => {
                  const existingIngredients = [...recipe.ingredients];
                  if (
                    recipe.ingredients.length > 1 &&
                    ingIdx + 1 < recipe.ingredients.length
                  ) {
                    // ToDo: remove ingredient not working
                    existingIngredients.splice(ingIdx, 1);
                  } else {
                    existingIngredients.push(emptyIngredient);
                  }
                  setRecipe({ ...recipe, ingredients: existingIngredients });
                }}
              >
                {recipe.ingredients.length > 1 &&
                ingIdx + 1 < recipe.ingredients.length ? (
                  <i className="fa-solid fa-circle-minus" />
                ) : (
                  <i className="fa-solid fa-circle-plus" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="recipe-label-input-pair">
        <label htmlFor="directions" className="recipe-label">
          Directions
        </label>
        <textarea
          className="recipe-directions"
          type="textarea"
          rows="6"
          cols="33"
          maxLength={1000}
          placeholder="Add the directions to your recipe"
          value={recipe.directions}
          onChange={(e) => setRecipe({ ...recipe, directions: e.target.value })}
          required
          id="directions"
        />
      </div>

      <div className="recipe-label-input-pair">
        <label htmlFor="images" className="recipe-label">
          Images
        </label>
        <span style={{ fontSize: "14px" }}>Add images to your recipe</span>

        <input
          type="file"
          id="images"
          accept="image/*"
          multiple="multiple"
          onChange={(e) => {
            setRecipe({ ...recipe, images: e.target.files });
          }}
        />
      </div>

      {errors.message && <p className="error">{errors.message}</p>}

      <button className="recipe-submit-button" type="submit">
        Upload Recipe
      </button>
    </form>
  );
}

export default RecipeForm;
