import { useNavigate } from "react-router-dom";

import { ActionHolder } from "@components/ui/actionHolder";
import { Button } from "@components/ui/button";

export const Content = () => {
  const navigate = useNavigate();

  return (
    <ActionHolder>
      <Button onClick={() => navigate("/plans")}>Plan</Button>
      <Button onClick={() => navigate("/meals")}>Meal</Button>
    </ActionHolder>
  );
};
