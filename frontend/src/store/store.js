import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import unitsReducer from "./units";
import ingredientsReducer from "./ingredients";
import recipesReducer from "./recipes";

const rootReducer = combineReducers({
  session: sessionReducer,
  unit: unitsReducer,
  ingredient: ingredientsReducer,
  recipe: recipesReducer,
});

let enhancer;
if (import.meta.env.MODE === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
