import { useNavigate } from "react-router-dom";

import { useList } from "../../data/repo/plan";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const PlansPage = () => {
  const navigate = useNavigate();
  const { plans, isLoading, isError } = useList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Plans</CardTitle>
        </CardHeader>

        <CardContent>
          {plans && (
            <ul className="space-y-2">
              {plans.map((plan: any) => (
                <li key={plan.id}>
                  <Button
                    onClick={() => navigate(`/plan/${plan.id}`)}
                    className="w-full justify-start"
                    variant="secondary">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(plan.beginDate, "LLL dd, y")} -{" "}
                    {format(plan.endDate, "LLL dd, y")}
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
      <div className="flex justify-stretch space-x-4 py-4">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="w-full">
          Back
        </Button>
        <Button onClick={() => navigate("/plan/new")} className="w-full">
          New Plan
        </Button>
      </div>
    </>
  );
};

export default PlansPage;
