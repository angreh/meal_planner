import { useEffect } from "react";

import { add } from "data/repo/meal";
import CreateEditForm from "@components/pages/meal/CreateEditForm";
import { useMealStore } from "@stores/meal";

const MealEditPage = () => {
  const { resetMeal } = useMealStore();

  useEffect(() => {
    return resetMeal;
  }, [resetMeal]);

  return <CreateEditForm saveFn={add} />;
};

export default MealEditPage;
