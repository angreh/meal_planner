import { useMealStore } from "@stores/meal";
import { useMutation } from "@tanstack/react-query";

import { add as ingredientsAdd } from "@data/repo/ingredient/add";
import { useIngredientStore } from "@stores/ingredient";

export const add = async (meal: any) => {
  try {
    const fetchResult = await fetch("http://localhost:8080/api/v1/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meal),
    });

    const { data } = await fetchResult.json();
    return {
      id: data,
    };
  } catch (error) {
    return;
  }
};

export const useAdd = () => {
  const { meal } = useMealStore();
  const { ingredients } = useIngredientStore();

  const mutation = useMutation({
    mutationFn: async () => {
      const { id } = (await add(meal)) as { id: number };
      ingredientsAdd(id, ingredients);
    },
    onSuccess: () => {
      console.log("success saved");
    },
  });

  return { mutation };
};
