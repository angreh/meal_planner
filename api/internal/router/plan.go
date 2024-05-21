package router

import (
	"sibgreh.com/meal_planner/internal/handlers"
)

func definePlanRoutes() {
	// list all plans
	mux.Get("/api/v1/plans", handlers.Plan.List)
	mux.Get("/api/v1/plans/{id}", handlers.Plan.Get)
	mux.Get("/api/v1/plans/{id}/groceries", handlers.Plan.GenerateGroceries)

	// remove plan

	// create plan
	mux.Post("/api/v1/plans", handlers.Plan.Add)

	// update plan

	// delete plan
}
