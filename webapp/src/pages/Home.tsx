import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is a test</p>
      <div>
        <NavLink to="/plans">Manage Plans</NavLink>
        <br />
        <NavLink to="/meals">Manage Meals</NavLink>
      </div>
    </>
  );
};

export default Home;
