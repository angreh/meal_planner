import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@layouts/Root";
import Home from "@pages/Home";
import PlansPage from "@pages/plan/List";
import MealsPage from "@pages/meal/List";
import Plan from "@pages/plan/View";
import Meal from "@pages/meal/View";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "plans", element: <PlansPage /> },
      { id: "plan-create", path: "plan/create", element: <Plan /> },
      { path: "plan/:id", element: <Plan /> },
      { path: "meals", element: <MealsPage /> },
      { id: "meal-create", path: "meal/create", element: <Meal /> },
    ],
  },
]);

export default routes;
