import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { Input } from "@components/ui/input";
import { usePlanStore } from "@stores/plan";
import { useGet, create } from "data/repo/plan";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import AvailableMeals from "@components/meal/AvailableMeals";
import { SelectedMeals } from "@components/meal/SelectedMeals";

const PlanPage = () => {
  const navigate = useNavigate();
  const { id: planId } = useParams();

  useGet(Number(planId));

  const { plan, setPlanProperty, meals } = usePlanStore();

  const mutation = useMutation({
    mutationFn: async () => {
      const parsedPlan = { ...plan } as any;
      parsedPlan.beginDate = new Date(plan.beginDate);
      parsedPlan.endDate = new Date(plan.endDate);
      parsedPlan.meals = meals;

      await create(parsedPlan);
    },
    onSuccess: () => {
      console.log("success");
    },
  });

  return (
    <>
      {/* Plan data */}
      <Card>
        <CardHeader>
          <CardTitle>Plan</CardTitle>
        </CardHeader>

        <CardContent>
          <Input
            type="text"
            placeholder="Date Start"
            value={plan.beginDate}
            onChange={(e) => setPlanProperty("beginDate", e.target.value)}
          />
          <br />
          <Input
            type="text"
            placeholder="Date End"
            value={plan.endDate}
            onChange={(e) => setPlanProperty("endDate", e.target.value)}
          />
          <br />
        </CardContent>
      </Card>
      <br />

      {/* Selected meals */}
      <SelectedMeals />
      <br />

      <Button
        onClick={() => navigate(`/plan/${planId!}/groceries`)}
        variant="secondary"
        className="w-full">
        Generate Groceries List
      </Button>
      <br />
      <br />

      {/* Available meals */}
      <AvailableMeals />
      <br />

      {/* Actions */}
      <div className="p-4 flex justify-between">
        <Button onClick={() => navigate("/plans")} variant="outline">
          Back
        </Button>
        <Button onClick={mutation.mutate as any}>Save</Button>
      </div>
    </>
  );
};

export default PlanPage;
