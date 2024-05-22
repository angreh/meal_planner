import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { generateGroceries } from "@data/repo/plan";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

export default function Groceries() {
  const navigate = useNavigate();
  const { id: planId } = useParams();

  const { data, isLoading } = useQuery<any>({
    queryKey: ["groceries", planId],
    queryFn: async () => {
      if (!planId) {
        return [];
      }

      return await generateGroceries(+planId!);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return (
      <>
        <div>No data</div>
        <br />
        <Button
          variant="outline"
          className="w-full"
          onClick={() => navigate("/plan/" + planId)}>
          Back
        </Button>
      </>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Ingredients</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Ingredient</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((ingredient: any) => (
                <TableRow key={ingredient.ID}>
                  <TableCell className="font-medium">
                    {ingredient.Name}
                  </TableCell>
                  <TableCell className="text-right">
                    {ingredient.Amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => navigate("/plan/" + planId)}>
        Back
      </Button>
    </div>
  );
}
