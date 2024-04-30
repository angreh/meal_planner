import { NavLink } from "react-router-dom";

import { useList } from "data/repo/meal";

const MealsPage = () => {
  const { meals, isLoading, isError } = useList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <div>Meals Page</div>
      {meals && (
        <ul>
          {meals.map((meal: any) => (
            <li key={meal.id}>
              <NavLink to={`/meal/${meal.id}`}>{meal.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <NavLink to="/meal/create">Create Meal</NavLink>
    </>
  );
};

export default MealsPage;
