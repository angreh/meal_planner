import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { useMealStore } from "@stores/meal";

import { Meal } from "@appTypes/meal";

export const list = async (): Promise<Meal[]> => {
  const res = await fetch("http://localhost:8080/api/v1/meals");
  const parsedRes = await res.json();
  return parsedRes.data;
};

export const useList = () => {
  const { meals, setMeals } = useMealStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["meals"],
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
