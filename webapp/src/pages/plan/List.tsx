import { NavLink, useNavigate } from "react-router-dom";

import { useList } from "../../data/repo/plan";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

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
            <ul>
              {plans.map((plan: any) => (
                <li key={plan.id}>
                  <NavLink to={`/plan/${plan.id}`}>
                    {plan.beginDate.split("T")[0]} -{" "}
                    {plan.endDate.split("T")[0]}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
      <div className="flex justify-between p-4">
        <Button variant="outline" onClick={() => navigate("/")}>
          Back
        </Button>
        <Button onClick={() => navigate("/plan/new")}>New Plan</Button>
      </div>
    </>
  );
};

export default PlansPage;
