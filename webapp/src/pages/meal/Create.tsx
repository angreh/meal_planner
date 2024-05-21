import { useNavigate } from "react-router-dom";

import CreateEditFormMeal from "@components/meal/CreateEditForm";
import CreateEditActions from "@components/meal/CreateEditActions";
import IngredientsCard from "@components/ingredient/IngredientsCard";
import { useAdd } from "@data/repo/meal/add";
import { useIngredientStore } from "@stores/ingredient";

const MealEditPage = () => {
  const navigate = useNavigate();
  const { addIngredient } = useIngredientStore();
  const { mutation } = useAdd();

  const addHandler = async () => {
    await mutation.mutateAsync();
    navigate("/meals");
  };

  return (
    <>
      <CreateEditFormMeal />
      <br />

      <IngredientsCard saveFn={addIngredient} />
      <br />

      <CreateEditActions saveFn={addHandler} backFn={() => navigate("/meals")} />
    </>
  );
};

export default MealEditPage;
