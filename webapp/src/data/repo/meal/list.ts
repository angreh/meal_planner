import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { useMealStore } from "@stores/meal";

import { Plan } from "@appTypes/plan";

export const list = async (): Promise<Plan[]> => {
  const res = await fetch("http://localhost:8080/api/v1/meals");
  const parsedRes = await res.json();
  return parsedRes.data;
};

export const useList = () => {
  const { meals, setMeals } = useMealStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["plans"],
    queryFn: list,
  });

  useEffect(() => {
    if (data) {
      setMeals(data);
    }
  }, [data, setMeals]);

  return {
    meals,
    isLoading,
    isError,
  };
};
