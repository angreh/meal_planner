export const add = (meal: any) => {
  console.log("add", meal);
  fetch("http://localhost:8080/api/v1/meals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(meal),
  });
  return {
    id: 1,
  };
};
