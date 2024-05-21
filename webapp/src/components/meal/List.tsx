import { useList } from "@data/repo/meal";
import { usePlanStore } from "@stores/plan";

const List = () => {
  const { meals, isLoading, isError } = useList();
  const { addMeal } = usePlanStore();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <div>List of ingredients</div>
      {meals.map((meal) => (
        <div key={meal.id}>
          {meal.name} |{" "}
          <button onClick={() => addMeal(meal.id)}>Add meal</button>
        </div>
      ))}
    </>
  );
};

export default List;
