package handlers

var Meal *MealHandler
var Ingredient *IngredientHandler
var Plan *PlanHandler

func Init() {
	Meal = &MealHandler{}
	Ingredient = &IngredientHandler{}
	Plan = &PlanHandler{}
}
