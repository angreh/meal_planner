import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { useList } from "@data/repo/meal";
import { NavLink } from "react-router-dom";

export const List = () => {
  const { meals, isLoading, isError } = useList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
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
        {(!meals || !meals.length) && <div>No meals</div>}
      </CardContent>
    </Card>
  );
};
