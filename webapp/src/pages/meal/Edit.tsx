import { Actions } from "@components/pages/meals/edit/actions";
import { Form } from "@components/pages/meals/edit/form";
import { Ingredients } from "@components/pages/meals/edit/ingredients";
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
