import { create } from "zustand";

import { Ingredient } from "@appTypes/ingredient";

type IngredientProperty =
  | "id"
  | "image"
  | "name"
  | "description"
  | "howToPick"
  | "amount";

interface ingredientState {
  ingredient: Ingredient;
  ingredients: Ingredient[];

  setIngredient: (ingredient: any) => void;
  setIngredientProperty: (key: IngredientProperty, value: string) => void;
  setIngredients: (ingredient: Ingredient[]) => void;
  addIngredient: () => void;

  resetIngredients: () => void;
}

export const useIngredientStore = create<ingredientState>((set) => ({
  ingredient: {
    id: undefined,
    name: "",
    description: undefined,
    howToPick: undefined,
    image: undefined,
    isNew: false,
    amount: 0,
  },
  ingredients: [],

  setIngredient: (ingredient: Ingredient) => set({ ingredient }),
  setIngredientProperty: (key: IngredientProperty, value: string) => {
    set((prev) => ({
      ...prev,
      ingredient: { ...prev.ingredient, [key]: value },
    }));
  },
  setIngredients: (ingredients: Ingredient[]) => set({ ingredients }),
  addIngredient: () => {
    set((prev) => {
      prev.ingredient.id = Math.random();
      prev.ingredient.isNew = true;

      return {
        ...prev,
        ingredients: [...prev.ingredients, prev.ingredient],
      };
    });
  },

  resetIngredients: () => set({ ingredients: [] }),
}));
