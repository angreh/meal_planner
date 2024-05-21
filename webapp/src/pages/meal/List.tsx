import { NavLink, useNavigate } from "react-router-dom";

import { useList } from "data/repo/meal";
import {
  Card,
  CardContent, CardHeader,
  CardTitle
} from "@components/ui/card";
import { Button } from "@components/ui/button";

const MealsPage = () => {
  const navigate = useNavigate();
  const { meals, isLoading, isError } = useList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Meals</CardTitle>
        </CardHeader>

        <CardContent>
          {meals && (
            <ul>
              {meals.map((meal: any) => (
                <li key={meal.id}>
                  <NavLink to={`/meal/${meal.id}`}>{meal.name}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between p-4">
        <Button onClick={() => navigate("/")} variant="outline">
          Back
        </Button>
        <Button onClick={() => navigate("/meal/create")}>Create Meal</Button>
      </div>
    </>
  );
};

export default MealsPage;
