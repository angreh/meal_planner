// import { useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";

// import { usePlanStore } from "@stores/plan";

// type Plan = {
//   id: number;
//   beginDate: string;
//   endDate: string;
//   meals: number[];
// };

export const generateGroceries = async (planID: number) => {
  console.log("generateGroceries",planID);

  const res = await fetch(
    "http://localhost:8080/api/v1/plans/" + planID + "/groceries",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const parsedRes = await res.json();

  return parsedRes.data;
};

// export const useGet = (itemID: number) => {
//   const { plan, setPlan, addMeal, resetMeals } = usePlanStore();

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["plan"],
//     queryFn: async () => get(itemID),
//   });

//   useEffect(() => {
//     if (data) {
//       resetMeals();
//       setPlan({
//         id: data.id,
//         beginDate: data.beginDate,
//         endDate: data.endDate,
//       });
//       data.meals.forEach((mealID) => {
//         addMeal(mealID);
//       });
//     }
//   }, [data, setPlan, addMeal, resetMeals]);

//   return {
//     plan,
//     isLoading,
//     isError,
//   };
// };
