import { useList } from "@data/repo/ingredient";

const List = () => {
  const { ingredients, isLoading, isError } = useList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <div>List of ingredients</div>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>{ingredient.name}</div>
      ))}
    </>
  );
};

export default List;
