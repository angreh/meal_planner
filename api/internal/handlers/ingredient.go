package handlers

import (
	"log"
	"net/http"

	"sibgreh.com/meal_planner/internal/repositories"
	repositoriesInterfaces "sibgreh.com/meal_planner/internal/repositories/interfaces"
	"sibgreh.com/meal_planner/pkg/utils"
)

type IngredientHandler struct{}

// add ingredient to meal with amount
func (h *IngredientHandler) Create(w http.ResponseWriter, r *http.Request) {
	// create ingredient
	var requestData struct {
		Name        string `json:"name"`
		Description string `json:"description"`
		HowToPick   string `json:"howToPick"`
		MealID      int    `json:"mealId"`
		Amount      int    `json:"amount"`
	}

	err := utils.ReadJSON(w, r, &requestData)
	if err != nil {
		log.Println("error reading json", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	ingredientID := repositories.GetRepository().Ingredient.Create(repositoriesInterfaces.IngredientData{
		Name:        requestData.Name,
		Description: requestData.Description,
		HowToPick:   requestData.HowToPick,
	})

	relResult := repositories.GetRepository().Meal.AddIngredient(requestData.MealID, ingredientID, requestData.Amount)

	log.Println("added ingredient to meal", relResult)
}

// save igredient ( create or update)

// remove ingredient

// view ingredient

// list all ingredients

// testing
func (h *IngredientHandler) Add(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, World!!"))
}
