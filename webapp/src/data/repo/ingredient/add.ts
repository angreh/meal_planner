import { Ingredient } from "@appTypes/ingredient";

export const add = async (mealId: number, ingredients: Ingredient[]) => {
  const fetchResult = await fetch("http://localhost:8080/api/v1/ingredients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mealId,
      ingredients,
    }),
  });

  const result = await fetchResult.json();
  console.log(result, "result");

  return {
    id: 1,
  };
};

