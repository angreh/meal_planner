import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { useMealStore } from "@stores/meal";
import { usePlanStore } from "@stores/plan";

export const SelectedMeals = () => {
  const { meals } = useMealStore();
  const { meals: selectedMeals, removeMeal } = usePlanStore();

  // console.log(meals.filter((meal) => selectedMeals.includes(meal.id)));
  const filteredMeals = meals.filter((meal) => selectedMeals.includes(meal.id));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Selected Meals</CardTitle>
      </CardHeader>

      <CardContent>
        {filteredMeals.map((meal) => (
          <div key={meal.id}>
            {meal.name}{" "}
            <span
              className="ml-2 text-gray-700"
              onClick={() => removeMeal(meal.id)}>
              remove
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
