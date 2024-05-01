import { create } from "zustand";

import { Ingredient } from "@appTypes/ingredient";

type IngredientProperty = "id" | "image" | "name" | "description" | "howToPick";

interface ingredientState {
  ingredient: Ingredient;
  ingredients: Ingredient[];

  setIngredient: (ingredient: any) => void;
  setIngredientProperty: (key: IngredientProperty, value: string) => void;
  setIngredients: (ingredient: Ingredient[]) => void;
}

export const useIngredientStore = create<ingredientState>((set) => ({
  ingredient: {
    id: undefined,
    name: "",
    description: undefined,
    howToPick: undefined,
    image: undefined,
  },
  ingredients: [],

  setIngredientProperty: (key: IngredientProperty, value: string) => {
    set((prev) => ({
      ...prev,
      ingredient: { ...prev.ingredient, [key]: value },
    }));
  },
  setIngredient: (ingredient: Ingredient) => set({ ingredient }),
  setIngredients: (ingredients: Ingredient[]) => set({ ingredients }),
}));
