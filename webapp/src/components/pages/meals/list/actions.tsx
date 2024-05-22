import { DefaultActions } from "@components/ui/defaultActions";
import { useNavigate } from "react-router-dom";

export const Actions = () => {
  const navigate = useNavigate();

  return (
    <DefaultActions
      saveFn={() => navigate("/meal/create")}
      saveTitle="Create Meal"
      backFn={() => navigate("/")}
    />
  );
};
