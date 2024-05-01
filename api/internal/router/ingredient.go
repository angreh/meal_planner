package router

import "sibgreh.com/meal_planner/internal/handlers"

func defineIngredientRoutes() {
	// add ingredient to meal with amount
	mux.Post("/api/v1/ingredients", handlers.Ingredient.Create)

	// save igredient ( create or update)

	// remove ingredient

	// view ingredient

	// list all ingredients

}
