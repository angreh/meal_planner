import { useMutation } from "@tanstack/react-query";

import { useMealStore } from "@stores/meal";

// import { add as ingredientsAdd } from "@data/repo/ingredient/add";
// import { useIngredientStore } from "@stores/ingredient";

export const update = async (meal: any) => {
  try {
    const fetchResult = await fetch("http://localhost:8080/api/v1/meals", {
      method: "PUT",
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

export const useUpdate = () => {
  const { meal } = useMealStore();
  // const { ingredients } = useIngredientStore();

  const mutation = useMutation({
    mutationFn: async () => {
      const result = await update(meal);
      // ingredientsAdd(id, ingredients);
      console.log(result);
    },
    onSuccess: () => {
      console.log("success saved");
    },
  });

  return { mutation };
};
