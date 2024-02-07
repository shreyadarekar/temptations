import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import { getIngredients } from "./store/ingredients";
import { getUnits } from "./store/units";
import RecipeForm from "./components/RecipeForm/RecipeForm";
import UserRecipes from "./components/UserRecipes/UserRecipes";
import UserCookbooks from "./components/UserCookbooks/UserCookbooks";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
