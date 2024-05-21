import { Button } from "@components/ui/button";
import {
  Card,
  CardContent, CardHeader,
  CardTitle
} from "@components/ui/card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Home Page</CardTitle>
      </CardHeader>

      <CardContent>
        <Button onClick={() => navigate("/plans")}>Plan</Button>&nbsp;
        <Button onClick={() => navigate("/meals")}>Meal</Button>
      </CardContent>
    </Card>
  );
};

export default Home;
