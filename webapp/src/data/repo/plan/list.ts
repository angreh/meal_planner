import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { usePlanStore } from "@stores/plan";

type Plan = {
  id: number;
  beginDate: string;
  endDate: string;
};

export const list = async (): Promise<Plan[]> => {
  return [
    {
      id: 1,
      beginDate: "2024-01-01",
      endDate: "2024-01-31",
    },
  ];
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
