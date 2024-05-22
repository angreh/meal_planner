import { PageHolder } from "@components/ui/pageHolder";
import { List } from "@components/pages/meals/list/list";
import { Actions } from "@components/pages/meals/list/actions";

const MealsPage = () => {
  return (
    <PageHolder>
      <List />
      <Actions />
    </PageHolder>
  );
};

export default MealsPage;
