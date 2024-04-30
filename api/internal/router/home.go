package router

import (
	"sibgreh.com/meal_planner/internal/handlers"
)

func defineHomeRoutes() {

	// testing
	mux.Get("/", handlers.Ingredient.Add)
}
