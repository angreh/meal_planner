export const create = (plan: any) => {
  fetch("http://localhost:8080/api/v1/plans", {
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
