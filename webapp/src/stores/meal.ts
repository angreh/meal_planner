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
    id: 0,
    image: "",
    name: "",
    description: "",
    preparation: "",
    preparationTime: 0,
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
        meal: { ...prev.meal, [key]: Number(value) },
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
        id: 0,
        image: "",
        name: "",
        description: "",
        preparation: "",
        preparationTime: 0,
      },
    }),
  resetMeals: () => set({ meals: [] }),
}));
