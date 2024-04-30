package router

import (
	"sibgreh.com/meal_planner/internal/handlers"
)

func definePlanRoutes() {
	// list all plans

	// view plan

	// remove plan

	// create plan
	mux.Post("/api/v1/plan", handlers.Plan.Add)

	// update plan

	// delete plan
}
