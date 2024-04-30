import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/plans">Plans</NavLink>
          </li>
          <li>
            <NavLink to="/meals">Meals</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Root;
