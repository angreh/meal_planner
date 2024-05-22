import { useEffect } from "react";

import { CreateEditForm } from "@components/meal/CreateEditForm";
import { useMealStore } from "@stores/meal";

export const Form = () => {
  const { resetMeal } = useMealStore();

  useEffect(() => {
    resetMeal();
  }, [resetMeal]);

  return <CreateEditForm />;
};
