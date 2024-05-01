import { create } from "zustand";

import { Meal } from "@appTypes/meal";

type MealProperty = "name" | "description" | "preparation" | "preparationTime";
type MealPropertyType = "string" | "number";

interface mealsState {
  meal: Meal;
  meals: any[];

  setMeal: (meal: any) => void;
  setMealProperty: (
    key: MealProperty,
    value: string | number,
    type: MealPropertyType
  ) => void;
  setMeals: (list: any) => void;

  resetMeal: () => void;
  resetMeals: () => void;
}

export const useMealStore = create<mealsState>((set) => ({
  meal: {
    id: undefined,
    image: undefined,
    name: "",
    description: undefined,
    preparation: undefined,
    preparationTime: undefined,
  },
  meals: [],

  setMealProperty: (
    key: MealProperty,
    value: string | number,
    type: MealPropertyType
  ) => {
    if (type === "number") {
      set((prev) => ({
        ...prev,
        view: { ...prev.meal, [key]: Number(value) },
      }));
    } else {
      set((prev) => ({ ...prev, meal: { ...prev.meal, [key]: value } }));
    }
  },
  setMeal: (meal: Meal) => set({ meal }),
  setMeals: (meals: any) => set({ meals }),

  resetMeal: () =>
    set({
      meal: {
        id: undefined,
        image: undefined,
        name: "",
        description: undefined,
        preparation: undefined,
        preparationTime: undefined,
      },
    }),
  resetMeals: () => set({ meals: [] }),
}));
