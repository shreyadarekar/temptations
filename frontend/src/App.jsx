import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import * as sessionActions from "./store/session";
import { getUnits } from "./store/units";
import { getIngredients } from "./store/ingredients";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import RecipeForm from "./components/RecipeForm";
import UserRecipes from "./components/UserRecipes";
import UserCookbooks from "./components/UserCookbooks";
import CookbookDetails from "./components/CookbookDetails";

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true);
      dispatch(getUnits());
      dispatch(getIngredients());
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recipes/new", element: <RecipeForm /> },
      { path: "/recipes/current", element: <UserRecipes /> },
      { path: "/recipes/:recipeId", element: <RecipeDetails /> },
      { path: "/recipes/:recipeId/edit", element: <RecipeForm /> },
      { path: "/cookbooks/current", element: <UserCookbooks /> },
      { path: "/cookbooks/:cookbookId", element: <CookbookDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
