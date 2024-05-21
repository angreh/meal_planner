import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@layouts/Root";
import Home from "@pages/Home";
import Plans from "@pages/plan/List";
import Meals from "@pages/meal/List";
import Plan from "@pages/plan/View";
import MealEdit from "@pages/meal/Edit";
import MealCreate from "@pages/meal/Create";
import Groceries from "@pages/plan/Groceries";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // home
      { index: true, element: <Home /> },
      // plans
      { path: "plans", element: <Plans /> },
      { path: "plan/create", element: <Plan /> },
      { path: "plan/:id", element: <Plan /> },
      { path: "plan/:id/groceries", element: <Groceries /> },
      // meals
      { path: "meals", element: <Meals /> },
      { path: "meal/create", element: <MealCreate /> },
      { path: "meal/:id", element: <MealEdit /> },
    ],
  },
]);

export default routes;
