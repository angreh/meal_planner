package router

import (
	"sibgreh.com/meal_planner/internal/handlers"
)

func defineMealRoutes() {
	// list all meals
	mux.Get("/api/v1/meals", handlers.Meal.List)

	// save meal
	// decides between CREATE or UPDATE

	// create meal

	// update meal

	// view meal

	// delete meal

	// testing
	mux.Post("/api/v1/meals", handlers.Meal.Add)
}
