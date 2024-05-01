import { useState } from "react";

import { useIngredientStore } from "@stores/ingredient";
import { useMutation } from "@tanstack/react-query";
import { create, useList } from "@data/repo/ingredient";
import List from "./List";

type CreateEditFormProps = {
  mealID: number;
};
const CreateEditForm = ({ mealID }: CreateEditFormProps) => {
  const { ingredient, setIngredientProperty } = useIngredientStore();
  const { refetch } = useList();
  const [amount, setAmount] = useState(0);

  const mutation = useMutation({
    mutationFn: async () => {
      await create(ingredient, mealID, amount);
      refetch();
    },
    onSuccess: () => {
      console.log("success");
    },
  });

  return (
    <div>
      <h2>Ingredients</h2>

      <List />

      <pre>{JSON.stringify(ingredient, null, 2)}</pre>

      <input
        type="text"
        placeholder="name"
        value={ingredient.name}
        onChange={(e) => setIngredientProperty("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={ingredient.description}
        onChange={(e) => setIngredientProperty("description", e.target.value)}
      />
      <input
        type="text"
        placeholder="howToPick"
        value={ingredient.howToPick}
        onChange={(e) => setIngredientProperty("howToPick", e.target.value)}
      />
      <input
        type="text"
        placeholder="amount"
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
      />
      <button onClick={mutation.mutate as any}>Add Ingredient</button>
    </div>
  );
};

export default CreateEditForm;
