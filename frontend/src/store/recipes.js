import { csrfFetch } from "./csrf";

const SET_RECIPES = "recipes/setRecipes";

const setRecipes = (recipes) => {
  return {
    type: SET_RECIPES,
    payload: recipes,
  };
};

export const getRecipes = () => async (dispatch) => {
  const response = await csrfFetch("/api/recipes");
  const data = await response.json();
  dispatch(setRecipes(data.Recipes));
  return response;
};

const initialState = { entries: {} };
const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES: {
      const recipes = action.payload.reduce((acc, recipe) => {
        const exitingRecipe = state.entries[recipe.id];
        return { ...acc, [recipe.id]: { ...exitingRecipe, ...recipe } };
      }, {});
      return { ...state, entries: recipes };
    }

    default:
      return state;
  }
};

export default recipesReducer;
