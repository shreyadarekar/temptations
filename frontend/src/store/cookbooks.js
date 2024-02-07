import { csrfFetch } from "./csrf";

const SET_COOKBOOKS = "recipes/setCookbooks";

const setCookbooks = (cookbooks) => {
  return {
    type: SET_COOKBOOKS,
    payload: cookbooks,
  };
};

export const getCookbooks = () => async (dispatch) => {
  const response = await csrfFetch("/api/cookbooks/current");
  const data = await response.json();
  dispatch(setCookbooks(data.Cookbooks));
  return response;
};

const initialState = { entries: {} };
const cookbooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COOKBOOKS: {
      const cookbooks = action.payload.reduce((acc, cb) => {
        const exitingCookbook = state.entries[cb.id];
        return { ...acc, [cb.id]: { ...exitingCookbook, ...cb } };
      }, {});
      return { ...state, entries: cookbooks };
    }

    default:
      return state;
  }
};

export default cookbooksReducer;
