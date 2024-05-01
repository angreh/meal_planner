import { Ingredient } from "@appTypes/ingredient";

export const create = async (
  ingredient: Ingredient,
  mealId: number,
  amount: number
) => {
  await fetch("http://localhost:8080/api/v1/ingredients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...ingredient,
      mealId,
      amount,
    }),
  });
  return {
    id: 1,
  };
};
