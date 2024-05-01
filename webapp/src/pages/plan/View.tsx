import { usePlanStore } from "@stores/plan";
import { useMutation } from "@tanstack/react-query";
import { useGet, create } from "data/repo/plan";
import { useParams } from "react-router-dom";

type PlanPageProps = {
  id: "plan-create" | "plan-edit";
};
const PlanPage = ({ id }: PlanPageProps) => {
  const { id: planId } = useParams();
  const { plans } = useGet(Number(planId));

  const { plan, setPlanProperty } = usePlanStore();

  const mutation = useMutation({
    mutationFn: async () => {
      const parsedPlan = {...plan};
      parsedPlan.beginDate = new Date(plan.beginDate);
      parsedPlan.endDate = new Date(plan.endDate);

      await create(parsedPlan);
    },
    onSuccess: () => {
      console.log("success");
    },
  });

  return (
    <>
      <div>Plan Page View/Edit/Create</div>
      <pre>{JSON.stringify(plans, null, 2)}</pre>
      <div>
        <input
          type="text"
          placeholder="Date Start"
          value={plan.beginDate}
          onChange={(e) => setPlanProperty("beginDate", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Date End"
          value={plan.endDate}
          onChange={(e) => setPlanProperty("endDate", e.target.value)}
        />
        <br />
        <button onClick={mutation.mutate as any}>Save</button>
      </div>
    </>
  );
};

export default PlanPage;
