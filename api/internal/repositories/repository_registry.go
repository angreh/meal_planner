package repositories

import (
	interfaces "sibgreh.com/meal_planner/internal/repositories/interfaces"
	postgres "sibgreh.com/meal_planner/internal/repositories/postgres"
)

type RepositoryRegistry struct {
	Meal       interfaces.MealRepository
	Plan       interfaces.PlanRepository
	Ingredient interfaces.IngredientRepository
}

var repo *RepositoryRegistry

func Init() {
	repo = &RepositoryRegistry{
		Meal:       &postgres.MealRepository{},
		Plan:       &postgres.PlanRepository{},
		Ingredient: &postgres.IngredientRepository{},
	}
}

func GetRepository() *RepositoryRegistry {
	return repo
}
