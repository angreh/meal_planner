import { useEffect } from "react";

import { useMealStore } from "@stores/meal";
import MealCreateEditForm from "@components/meal/CreateEditForm";

const MealEditPage = () => {

  const { resetMeal } = useMealStore();

  useEffect(() => {
    return resetMeal;
  }, [resetMeal]);

  return (
    <>
      <MealCreateEditForm />
    </>
  );
};

export default MealEditPage;
