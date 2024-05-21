import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { useIngredientStore } from "@stores/ingredient";

const List = () => {
  const { ingredients } = useIngredientStore();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Ingredient</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ingredients.map((ingredient) => (
          <TableRow key={ingredient.id}>
            <TableCell className="font-medium">{ingredient.name}</TableCell>
            <TableCell className="text-right">{ingredient.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default List;
