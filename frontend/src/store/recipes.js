import { csrfFetch } from "./csrf";

const SET_RECIPES = "recipes/setRecipes";
const SET_RECIPE = "recipes/setRecipe";

const setRecipes = (recipes) => {
  return {
    type: SET_RECIPES,
    payload: recipes,
  };
};

const setRecipe = (recipe) => {
  return {
    type: SET_RECIPE,
    payload: recipe,
  };
};

export const getRecipes = () => async (dispatch) => {
  const response = await csrfFetch("/api/recipes");
  const data = await response.json();
  dispatch(setRecipes(data.Recipes));
  return response;
};

export const getRecipe = (recipeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/recipes/${recipeId}`);
  const data = await response.json();
  dispatch(setRecipe(data));
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

    case SET_RECIPE: {
      const exitingRecipe = state.entries[action.payload.id];
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.payload.id]: { ...exitingRecipe, ...action.payload },
        },
      };
    }

    default:
      return state;
  }
};

export default recipesReducer;
