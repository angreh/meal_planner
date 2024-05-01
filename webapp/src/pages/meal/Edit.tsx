import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { add, useGet } from "@data/repo/meal";
import { useMealStore } from "@stores/meal";
import MealCreateEditForm from "@components/pages/meal/CreateEditForm";
import IngredientCreatEditForm from "@components/pages/ingredient/CreateEditForm";

const MealEditPage = () => {
  const { id: mealID } = useParams();
  const { isLoading, isError, error } = useGet(Number(mealID));

  const { resetMeal } = useMealStore();

  useEffect(() => {
    return resetMeal;
  }, [resetMeal]);

  return (
    <>
      <MealCreateEditForm
        saveFn={add}
        isError={isError}
        isLoading={isLoading}
        errorMessage={error ? error.message : ""}
      />
      <hr />
      <IngredientCreatEditForm mealID={+mealID!} />
    </>
  );
};

export default MealEditPage;
