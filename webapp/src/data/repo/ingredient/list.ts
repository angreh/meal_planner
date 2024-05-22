import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { useIngredientStore } from "@stores/ingredient";

import { Ingredient } from "@appTypes/ingredient";

export const list = async (mealId: number): Promise<Ingredient[]> => {
  const res = await fetch(
    `http://localhost:8080/api/v1/meals/${mealId}/ingredients`
  );
  const parsedRes = await res.json();
  return parsedRes.data;
};

export const useList = (mealId: number) => {
  const { ingredients, setIngredients } = useIngredientStore();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["ingredients"],
    queryFn: async () => list(mealId),
  });

  useEffect(() => {
    if (data) {
      setIngredients(data);
    }
  }, [data, setIngredients]);

  return {
    ingredients,
    isLoading,
    isError,
    refetch,
  };
};
