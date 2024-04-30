import { NavLink } from "react-router-dom";
import { useList } from "../../data/repo/plan";

const PlansPage = () => {
  const { plans, isLoading, isError } = useList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <h1>Plans</h1>
      <div>Plans Page</div>

      {plans && (
        <ul>
          {plans.map((plan: any) => (
            <li key={plan.id}>
              <NavLink to={`/plan/${plan.id}`}>{plan.beginDate} - {plan.endDate}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <NavLink to="/plan/new">Create Plan</NavLink>
    </>
  );
};

export default PlansPage;
