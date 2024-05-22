import { CreateEditForm } from "@components/meal/CreateEditForm";
import { useGet } from "@data/repo/meal";
import { useParams } from "react-router-dom";

export const Form = () => {
  const { id: mealId } = useParams();
  const { isLoading, isError } = useGet(+mealId!);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return <CreateEditForm />;
};
