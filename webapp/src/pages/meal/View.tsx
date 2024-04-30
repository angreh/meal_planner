import { useMutation } from "@tanstack/react-query";

import { useMealStore } from "@stores/meal";
import { add } from "data/repo/meal";

const MealPage = () => {
  const { meal, setMealProperty } = useMealStore();

  const mutation = useMutation({
    mutationFn: async () => {
      add(meal);
      console.log("save", meal);
    },
    onSuccess: () => {
      console.log("success saved");
    },
  });

  return (
    <>
      <h1>Meal</h1>

      {mutation.isError && <p>Error: {mutation.error.message}</p>}

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

      <div>
        <h2>Ingredients</h2>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="description" />
        <input type="text" placeholder="howToPick" />
        <input type="text" placeholder="amount" />
      </div>

      <br />

      {mutation.isPending && <p>Saving...</p>}
      <button disabled={mutation.isPending} onClick={mutation.mutate as any}>
        Save
      </button>
    </>
  );
};

export default MealPage;
