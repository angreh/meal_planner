export const create = (plan: any) => {
  console.log("create", plan);
  fetch("http://localhost:8080/api/v1/plan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  return {
    id: 1,
  };
};
