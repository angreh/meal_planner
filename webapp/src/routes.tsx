import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@layouts/Root";
import Home from "@pages/Home";
import Plans from "@pages/plan/List";
import Meals from "@pages/meal/List";
import Plan from "@pages/plan/View";
import Meal from "@pages/meal/View";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "plans", element: <Plans /> },
      { id: "plan-create", path: "plan/create", element: <Plan /> },
      { path: "plan/:id", element: <Plan /> },
      { path: "meals", element: <Meals /> },
      { id: "meal-create", path: "meal/create", element: <Meal /> },
    ],
  },
]);

export default routes;
