import List from "./List";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import CreateEditForm from "./CreateEditForm";

type IngredientsCardProps = {
  saveFn: () => void;
};
const IngredientsCard = ({ saveFn }: IngredientsCardProps) => {
  return (
    <div>
      <Card title="Ingredients">
        <CardHeader>
          <CardTitle>Ingredients</CardTitle>
        </CardHeader>

        <CardContent>
          <CreateEditForm title="Add Ingredient" saveFn={saveFn} />

          <List />
        </CardContent>
      </Card>
    </div>
  );
};

export default IngredientsCard;
