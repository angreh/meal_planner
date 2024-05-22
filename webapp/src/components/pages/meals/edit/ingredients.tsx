import { useParams } from "react-router-dom";

import IngredientsCard from "@components/ingredient/IngredientsCard";
import { useList } from "@data/repo/ingredient";
import { useIngredientStore } from "@stores/ingredient";

export const Ingredients = () => {
  const { addIngredient } = useIngredientStore();
  const { id: mealId } = useParams();

  const { isLoading, isError } = useList(+mealId!);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return <IngredientsCard saveFn={addIngredient} />;
};
