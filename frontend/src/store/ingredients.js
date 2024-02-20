import { csrfFetch } from "./csrf";

const SET_INGREDIENTS = "ingredients/setIngredients";

const setIngredients = (ingredients) => {
  return {
    type: SET_INGREDIENTS,
    payload: ingredients,
  };
};

export const getIngredients = () => async (dispatch) => {
  const response = await csrfFetch("/api/ingredients");
  const data = await response.json();
  dispatch(setIngredients(data));
  return response;
};

const initialState = { entries: {} };
const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS: {
      const ingredients = action.payload.reduce((acc, ingredient) => {
        const exitingIngredient = state.entries[ingredient.id];
        return {
          ...acc,
          [ingredient.id]: { ...exitingIngredient, ...ingredient },
        };
      }, {});
      return { ...state, entries: ingredients };
    }

    default:
      return state;
  }
};

export default ingredientsReducer;
