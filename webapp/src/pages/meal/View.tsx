import { useMutation } from "@tanstack/react-query";

import { useMealStore } from "@stores/meal";
import { add } from "data/repo/meal";

const Meal = () => {
  const { view, setView } = useMealStore();

  const mutation = useMutation({
    mutationFn: async () => {
      add(view);
      console.log("save", view);
    },
    onSuccess: () => {
      console.log("success saved");
    },
  });

  const onChangeHandler = (e: any, key: string) => {
    setView({ ...view, [key]: e.target.value });
  };

  return (
    <>
      <h1>Meal</h1>

      {mutation.isError && <p>Error: {mutation.error.message}</p>}

      <p>This is the Meal page</p>

      <pre>{JSON.stringify(view, null, 2)}</pre>
      <input
        type="text"
        placeholder="description"
        value={view.description}
        onChange={(e) => onChangeHandler(e, "description")}
      />
      <input
        type="text"
        placeholder="preparation"
        value={view.preparation}
        onChange={(e) => onChangeHandler(e, "preparation")}
      />
      <input
        type="text"
        placeholder="time"
        value={view.time}
        onChange={(e) => onChangeHandler(e, "time")}
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

export default Meal;
