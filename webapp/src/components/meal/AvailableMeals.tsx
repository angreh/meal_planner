import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@components/ui/command";
import { useList } from "@data/repo/meal";
import { usePlanStore } from "@stores/plan";
import { CommandEmpty } from "cmdk";

const AvailableMeals = () => {
  const { meals, isLoading, isError } = useList();
  const { addMeal } = usePlanStore();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Meals</CardTitle>
        <CardDescription>Select a meal to add to your plan</CardDescription>
      </CardHeader>

      <CardContent>
        <Command>
          <CommandInput placeholder="Type a meal name" />

          <CommandList>
            <CommandEmpty>No mealss found</CommandEmpty>

            <CommandGroup heading="Meals">
              {meals.map((meal) => (
                <CommandItem key={meal.id} value={meal.id} onSelect={() => addMeal(meal.id)}>
                  {meal.name}
                  <span className="ml-2 text-gray-700">#{meal.id}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CardContent>
    </Card>
  );
};

export default AvailableMeals;
