import { csrfFetch } from "./csrf";

const SET_UNITS = "units/setUnits";

const setUnits = (units) => {
  return {
    type: SET_UNITS,
    payload: units,
  };
};

export const getUnits = () => async (dispatch) => {
  const response = await csrfFetch("/api/units");
  const data = await response.json();
  dispatch(setUnits(data));
  return response;
};

const initialState = { entries: {} };
const unitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UNITS: {
      const units = action.payload.reduce((acc, unit) => {
        const exitingUnit = state.entries[unit.id];
        return { ...acc, [unit.id]: { ...exitingUnit, ...unit } };
      }, {});
      return { ...state, entries: units };
    }

    default:
      return state;
  }
};

export default unitsReducer;
