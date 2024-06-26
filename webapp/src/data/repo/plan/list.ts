import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { usePlanStore } from "@stores/plan";

import { Plan } from "@appTypes/plan";

export const list = async (): Promise<Plan[]> => {
  const res = await fetch("http://localhost:8080/api/v1/plans");
  const parsedRes = await res.json();
  return parsedRes.data;
};

export const useList = () => {
  const { plans, setPlans } = usePlanStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["plans"],
    queryFn: list,
  });

  useEffect(() => {
    if (data) {
      setPlans(data);
    }
  }, [data, setPlans]);

  return {
    plans,
    isLoading,
    isError,
  };
};
