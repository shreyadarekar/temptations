import { csrfFetch } from "./csrf";

const SET_RECIPES = "recipes/setRecipes";
const SET_RECIPE = "recipes/setRecipe";
const ADD_REVIEW = "recipes/addReview";
const EDIT_REVIEW = "recipes/editReview";
const REMOVE_REVIEW = "recipes/removeReview";
const SET_USER_RECIPES = "recipes/setUserRecipes";
const REMOVE_RECIPE = "recipes/removeRecipe";

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

const addReview = (review) => {
  return {
    type: ADD_REVIEW,
    payload: review,
  };
};

const editReview = (review) => {
  return {
    type: EDIT_REVIEW,
    payload: review,
  };
};

const removeReview = (recipeId, reviewId) => {
  return {
    type: REMOVE_REVIEW,
    payload: { recipeId, reviewId },
  };
};

const setUserRecipes = (recipes) => {
  return {
    type: SET_USER_RECIPES,
    payload: recipes,
  };
};

const removeRecipe = (recipeId) => {
  return {
    type: REMOVE_RECIPE,
    payload: recipeId,
  };
};

export const getRecipes = (name, tags) => async (dispatch) => {
  const response = await csrfFetch(`/api/recipes?name=${name}&tags=${tags}`);
  const data = await response.json();
  dispatch(setRecipes(data.Recipes));
  return response;
};

export const getRecipe = (recipeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/recipes/${recipeId}`);
  const data = await response.json();
  dispatch(setRecipe(data));
  return data;
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

export const putRecipe = (recipeId, recipe) => async (dispatch) => {
  const response = await csrfFetch(`/api/recipes/${recipeId}`, {
    method: "PUT",
    body: recipe,
    // headers: { "Content-Type": "multipart/form-data" },
  });
  const data = await response.json();
  dispatch(setRecipe(data));
  return data;
};

export const postReview = (recipeId, review) => async (dispatch) => {
  const response = await csrfFetch(`/api/recipes/${recipeId}/reviews`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  dispatch(addReview(data));
  return response;
};

export const putReview = (reviewId, review) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "PUT",
    body: JSON.stringify(review),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  dispatch(editReview(data));
  return response;
};

export const deleteReview = (recipeId, reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });
  if (response.ok) dispatch(removeReview(recipeId, reviewId));
  return response;
};

export const getUserRecipes = () => async (dispatch) => {
  const response = await csrfFetch("/api/recipes/current");
  const data = await response.json();
  dispatch(setUserRecipes(data.Recipes));
  return response;
};

export const deleteRecipe = (recipeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/recipes/${recipeId}`, {
    method: "DELETE",
  });
  if (response.ok) dispatch(removeRecipe(recipeId));
  return response;
};

const initialState = { entries: {}, userEntries: {} };
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

    case ADD_REVIEW: {
      const exitingRecipe = {
        ...state.entries[action.payload.recipeId],
      };
      exitingRecipe.Reviews.unshift(action.payload);
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.payload.recipeId]: { ...exitingRecipe },
        },
      };
    }

    case EDIT_REVIEW: {
      const exitingRecipe = { ...state.entries[action.payload.recipeId] };
      exitingRecipe.Reviews = exitingRecipe.Reviews.filter(
        (r) => r.id !== action.payload.id
      );
      exitingRecipe.Reviews.unshift(action.payload);
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.payload.recipeId]: { ...exitingRecipe },
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

    case SET_USER_RECIPES: {
      const recipes = action.payload.reduce((acc, recipe) => {
        const exitingRecipe = state.entries[recipe.id];
        return { ...acc, [recipe.id]: { ...exitingRecipe, ...recipe } };
      }, {});
      return { ...state, userEntries: recipes };
    }

    case REMOVE_RECIPE: {
      const newEntries = { ...state.entries };
      delete newEntries[action.payload];

      const newUserEntries = { ...state.userEntries };
      delete newUserEntries[action.payload];

      return { ...state, entries: newEntries, userEntries: newUserEntries };
    }

    default:
      return state;
  }
};

export default recipesReducer;
