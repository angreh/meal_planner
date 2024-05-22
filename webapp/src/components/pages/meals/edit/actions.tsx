import { useNavigate } from "react-router-dom";

import { DefaultActions } from "@components/ui/defaultActions";
import { useUpdate } from "@data/repo/meal";

export const Actions = () => {
  const navigate = useNavigate();
  const { mutation } = useUpdate();

  const saveHandler = async () => {
    await mutation.mutateAsync();
    navigate("/meals");
  };

  return (
    <DefaultActions
      saveFn={saveHandler}
      backFn={() => navigate("/meals")}
      saveTitle="Save"
    />
  );
};
