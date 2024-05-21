import { Plan } from "@appTypes/plan";
import { create } from "zustand";

interface plansState {
  plan: Plan;
  plans: Plan[];
  meals: number[];

  setPlanProperty: (property: string, value: any) => void;
  setPlans: (plans: Plan[]) => void;
  setPlan: (plan: Plan) => void;
  addMeal: (mealID: number) => void;
  removeMeal: (mealID: number) => void;
  resetMeals: () => void;
}

export const usePlanStore = create<plansState>((set) => ({
  plan: {
    id: undefined,
    beginDate: "",
    endDate: "",
    meals: [],
  },
  plans: [],
  meals: [],

  setPlans: (plans: Plan[]) => {
    set({ plans });
  },
  setPlanProperty(property, value) {
    set((state) => ({
      plan: {
        ...state.plan,
        [property]: value,
      },
    }));
  },
  setPlan(plan: Plan) {
    set({ plan });
  },
  addMeal: (mealID: number) => {
    set((state) => {
      if (!state.meals.includes(mealID)) {
        return {
          meals: [...state.meals, mealID],
        };
      } else {
        return state;
      }
    });
  },
  removeMeal: (mealID: number) => {
    set((state) => {
      if (state.meals.includes(mealID)) {
        return {
          meals: state.meals.filter((meal) => meal !== mealID),
        };
      } else {
        return state;
      }
    });
  },
  resetMeals: () => {
    set({ meals: [] });
  },
}));
