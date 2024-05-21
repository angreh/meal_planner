package handlers

import (
	"log"
	"net/http"
	"strconv"

	"sibgreh.com/meal_planner/internal/repositories"
	repositoriesInterfaces "sibgreh.com/meal_planner/internal/repositories/interfaces"
	"sibgreh.com/meal_planner/pkg/utils"
)

type IngredientHandler struct{}

type IngredientData struct {
	Amount      string  `json:"amount"`
	IsNew       bool    `json:"isNew"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	HowToPick   string  `json:"howToPick"`
	ID          float32 `json:"id"`
}

// add ingredient to meal with amount
func (h *IngredientHandler) Create(w http.ResponseWriter, r *http.Request) {
	// create ingredient
	// var requestData struct {
	// 	Name        string `json:"name"`
	// 	Description string `json:"description"`
	// 	HowToPick   string `json:"howToPick"`
	// 	MealID      int    `json:"mealId"`
	// 	Amount      int    `json:"amount"`
	// }

	var requestData struct {
		MealID      int              `json:"mealId"`
		Ingredients []IngredientData `json:"ingredients"`
	}

	err := utils.ReadJSON(w, r, &requestData)
	if err != nil {
		log.Println("error reading json", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	// var ingredientID int
	for _, ingredient := range requestData.Ingredients {
		ingredientID := repositories.GetRepository().Ingredient.Create(repositoriesInterfaces.IngredientData{
			Name:        ingredient.Name,
			Description: ingredient.Description,
			HowToPick:   ingredient.HowToPick,
		})

		amount, err := strconv.Atoi(ingredient.Amount)
		if err != nil {
			log.Println("error converting amount to string", err)
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		repositories.GetRepository().Meal.AddIngredient(requestData.MealID, ingredientID, amount)
	}

	payload := utils.JSONResponse{
		Data:    requestData,
		Error:   false,
		Message: "Ingredients added",
	}

	err = utils.WriteJSON(w, http.StatusOK, payload)
	if err != nil {
		log.Println("error writing json", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}
}

// save igredient ( create or update)

// remove ingredient

// view ingredient

// list all ingredients

// testing
func (h *IngredientHandler) Add(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, World!!"))
}
