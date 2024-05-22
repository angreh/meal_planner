package router

import (
	"sibgreh.com/meal_planner/internal/handlers"
)

func defineMealRoutes() {
	mux.Get("/api/v1/meals", handlers.Meal.List)
	mux.Get("/api/v1/meals/{id}", handlers.Meal.Get)

	// create meal

	// update meal
	mux.Put("/api/v1/meals", handlers.Meal.Update)

	// delete meal

	// ingredients
	mux.Get("/api/v1/meals/{id}/ingredients", handlers.Meal.ListIngredients)

	// testing
	mux.Post("/api/v1/meals", handlers.Meal.Add)
}
