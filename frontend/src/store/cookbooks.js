import { csrfFetch } from "./csrf";

const SET_COOKBOOKS = "cookbooks/setCookbooks";
const SET_COOKBOOK = "cookbooks/setCookbook";
const REMOVE_COOKBOOK = "cookbooks/removeCookbook";

const setCookbooks = (cookbooks) => {
  return {
    type: SET_COOKBOOKS,
    payload: cookbooks,
  };
};

const setCookbook = (cookbook) => {
  return {
    type: SET_COOKBOOK,
    payload: cookbook,
  };
};

const removeCookbook = (cookbookId) => {
  return {
    type: REMOVE_COOKBOOK,
    payload: cookbookId,
  };
};

export const getCookbooks = () => async (dispatch) => {
  const response = await csrfFetch("/api/cookbooks/current");
  const data = await response.json();
  dispatch(setCookbooks(data.Cookbooks));
  return response;
};

export const getCookbook = (cookbookId) => async (dispatch) => {
  const response = await csrfFetch(`/api/cookbooks/${cookbookId}`);
  const data = await response.json();
  dispatch(setCookbook(data));
  return data;
};

export const postCookbook = (cookbook) => async (dispatch) => {
  const response = await csrfFetch(`/api/cookbooks/`, {
    method: "POST",
    body: JSON.stringify(cookbook),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  dispatch(setCookbook(data));
  return response;
};

export const putCookbook = (cookbookId, cookbook) => async (dispatch) => {
  const response = await csrfFetch(`/api/cookbooks/${cookbookId}`, {
    method: "PUT",
    body: JSON.stringify(cookbook),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  dispatch(setCookbook(data));
  return response;
};

export const addRecipesToCookbook =
  (cookbookId, recipeIds) => async (dispatch) => {
    const response = await csrfFetch(`/api/cookbooks/${cookbookId}/recipes`, {
      method: "PUT",
      body: JSON.stringify({ recipeIds }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    dispatch(setCookbook(data));
    return response;
  };

export const deleteCookbook = (recipeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/cookbooks/${recipeId}`, {
    method: "DELETE",
  });
  if (response.ok) dispatch(removeCookbook(recipeId));
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

    case SET_COOKBOOK: {
      const exitingCookbook = state.entries[action.payload.id];
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.payload.id]: { ...exitingCookbook, ...action.payload },
        },
      };
    }

    case REMOVE_COOKBOOK: {
      const newEntries = { ...state.entries };
      delete newEntries[action.payload];

      return { ...state, entries: newEntries };
    }

    default:
      return state;
  }
};

export default cookbooksReducer;
