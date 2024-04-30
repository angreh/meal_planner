import { NavLink } from "react-router-dom";

const Meals = () => {
  return (
    <>
      <div>Meals Page</div>
      <NavLink to="/meal/create">Create Meal</NavLink>
    </>
  );
};

export default Meals;
