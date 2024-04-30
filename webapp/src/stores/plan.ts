import { create } from "zustand";

interface plansState {
  plan: any;
  plans: any[];

  setPlanProperty: (property: string, value: any) => void;
  setPlans: (plans: any) => void;
}

export const usePlanStore = create<plansState>((set) => ({
  plan: {},
  plans: [],
  setPlans: (plans: any) => set({ plans }),
  setPlanProperty(property, value) {
    set((state) => ({
      plan: {
        ...state.plan,
        [property]: value,
      },
    }));
  },
}));
