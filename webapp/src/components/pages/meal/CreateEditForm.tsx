import { Meal } from "@appTypes/meal";
import { useMealStore } from "@stores/meal";
import { useMutation } from "@tanstack/react-query";

type CreateEditFormProps = {
  saveFn: (meal: Meal) => void;
  isError?: boolean;
  isLoading?: boolean;
  errorMessage?: string;
};
const CreateEditForm = ({
  saveFn,
  isError = false,
  isLoading = false,
  errorMessage = "",
}: CreateEditFormProps) => {
  const { meal, setMealProperty } = useMealStore();

  const mutation = useMutation({
    mutationFn: async () => {
      saveFn(meal);
      console.log("save", meal);
    },
    onSuccess: () => {
      console.log("success saved");
    },
  });

  return (
    <>
      <h1>Meal</h1>

      {(mutation.isError || isError) && <p>Error: {errorMessage}</p>}

      <p>This is the Meal page</p>

      <pre>{JSON.stringify(meal, null, 2)}</pre>
      <input
        type="text"
        placeholder="name"
        value={meal.name}
        onChange={(e) => setMealProperty("name", e.target.value, "string")}
      />
      <input
        type="text"
        placeholder="description"
        value={meal.description}
        onChange={(e) =>
          setMealProperty("description", e.target.value, "string")
        }
      />
      <input
        type="text"
        placeholder="preparation"
        value={meal.preparation}
        onChange={(e) =>
          setMealProperty("preparation", e.target.value, "string")
        }
      />
      <input
        type="text"
        placeholder="time"
        value={meal.preparationTime}
        onChange={(e) =>
          setMealProperty("preparationTime", e.target.value, "number")
        }
      />

      {(mutation.isPending || isLoading) && <p>Saving...</p>}
      <button
        disabled={mutation.isPending || isLoading}
        onClick={mutation.mutate as any}>
        Save
      </button>
    </>
  );
};

export default CreateEditForm;
