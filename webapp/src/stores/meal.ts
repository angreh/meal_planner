import { create } from "zustand";

interface mealsState {
  view: any;
  list: any[];

	setView: (view: any) => void;
  setList: (list: any) => void;
}

export const useMealStore = create<mealsState>((set) => ({
  view: {},
  list: [],

  setView: (view: any) => set({ view }),
  setList: (list: any) => set({ list }),
}));
