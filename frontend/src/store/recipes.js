import { csrfFetch } from "./csrf";

const SET_RECIPES = "recipes/setRecipes";
const SET_RECIPE = "recipes/setRecipe";
const REMOVE_REVIEW = "recipes/removeReview";

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

const removeReview = (recipeId, reviewId) => {
  return {
    type: REMOVE_REVIEW,
    payload: { recipeId, reviewId },
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

export const postRecipe = (recipe) => async (dispatch) => {
  const response = await csrfFetch(`/api/recipes`, {
    method: "POST",
    body: recipe,
    // headers: { "Content-Type": "multipart/form-data" },
  });
  const data = await response.json();
  dispatch(setRecipe(data));
  return data;
};

export const deleteReview = (recipeId, reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });
  if (response.ok) dispatch(removeReview(recipeId, reviewId));
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

    case REMOVE_REVIEW: {
      const exitingRecipe = { ...state.entries[action.payload.recipeId] };
      exitingRecipe.Reviews = exitingRecipe.Reviews.filter(
        (r) => r.id !== action.payload.reviewId
      );
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.payload.recipeId]: { ...exitingRecipe },
        },
      };
    }

    default:
      return state;
  }
};

export default recipesReducer;
