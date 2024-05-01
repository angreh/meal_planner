import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { useMealStore } from "@stores/meal";
import { Meal } from "@appTypes/meal";

export const get = async (itemID: number): Promise<Meal> => {
  const res = await fetch("http://localhost:8080/api/v1/meals/" + itemID, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const parsedRes = await res.json();

  return parsedRes.data;
};

export const useGet = (itemID: number) => {
  const { meal, setMeal } = useMealStore();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["meal"],
    queryFn: async () => get(itemID),
  });

  useEffect(() => {
    if (data) {
      setMeal(data);
    }
  }, [data, setMeal]);

  return {
    meal,
    isLoading,
    isError,
    error
  };
};
