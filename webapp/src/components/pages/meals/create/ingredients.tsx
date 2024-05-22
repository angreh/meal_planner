import { useEffect } from "react";

import IngredientsCard from "@components/ingredient/IngredientsCard";
import { useIngredientStore } from "@stores/ingredient";

export const Ingredients = () => {
  const { addIngredient, resetIngredients } = useIngredientStore();

  useEffect(() => {
    resetIngredients();
  }, [resetIngredients]);

  return <IngredientsCard saveFn={addIngredient} />;
};
