import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@layouts/Root";
import Home from "@pages/Home";
import Plans from "@pages/plan/List";
import Meals from "@pages/meal/List";
import Plan from "@pages/plan/View";
import MealEdit from "@pages/meal/Edit";
import MealCreate from "@pages/meal/Create";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // home
      { index: true, element: <Home /> },
      // plans
      { path: "plans", element: <Plans /> },
      { path: "plan/create", element: <Plan id="plan-create" /> },
      { path: "plan/:id", element: <Plan id="plan-edit" /> },
      // meals
      { path: "meals", element: <Meals /> },
      { path: "meal/create", element: <MealCreate /> },
      { path: "meal/:id", element: <MealEdit /> },
    ],
  },
]);

export default routes;
