import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { usePlanStore } from "@stores/plan";

type Plan = {
  id: number;
  beginDate: string;
  endDate: string;
};

export const get = async (itemID: number): Promise<Plan> => {
  console.log("get", itemID);

  return {
    id: 1,
    beginDate: "2024-01-01",
    endDate: "2024-01-31",
  };
};

export const useGet = (itemID: number) => {
  const { plans, setPlans } = usePlanStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["plans"],
    queryFn: async () => get(itemID),
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
