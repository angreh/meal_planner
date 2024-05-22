import { useNavigate } from "react-router-dom";

import { useAdd } from "@data/repo/meal/add";
import { DefaultActions } from "@components/ui/defaultActions";

export const Actions = () => {
  const navigate = useNavigate();
  const { mutation } = useAdd();

  const addHandler = async () => {
    await mutation.mutateAsync();
    navigate("/meals");
  };

  return (
    <DefaultActions
      saveFn={addHandler}
      backFn={() => navigate("/meals")}
      saveTitle="Create"
    />
  );
};
