import { Actions } from "@components/pages/meals/create/actions";
import { Form } from "@components/pages/meals/create/form";
import { Ingredients } from "@components/pages/meals/create/ingredients";
import { PageHolder } from "@components/ui/pageHolder";

const MealEditPage = () => {
  return (
    <PageHolder>
      <Form />
      <Ingredients />
      <Actions />
    </PageHolder>
  );
};

export default MealEditPage;
