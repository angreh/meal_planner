package handlers

import (
	"log"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"sibgreh.com/meal_planner/internal/repositories"
	repositoriesInterfaces "sibgreh.com/meal_planner/internal/repositories/interfaces"
	"sibgreh.com/meal_planner/pkg/utils"
)

type MealHandler struct{}

func (h *MealHandler) List(w http.ResponseWriter, r *http.Request) {
	result := repositories.GetRepository().Meal.List()

	payload := utils.JSONResponse{
		Data:    result,
		Error:   false,
		Message: "plans listed",
	}

	err := utils.WriteJSON(w, http.StatusOK, payload)
	if err != nil {
		log.Println(err)
		utils.ErrorJSON(w, err)
	}
}

func (h *MealHandler) ListIngredients(w http.ResponseWriter, r *http.Request) {
	mealID, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		log.Println("error parsing meal id", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	result := repositories.GetRepository().Ingredient.ListByMeal(mealID)

	payload := utils.JSONResponse{
		Data:    result,
		Error:   false,
		Message: "plans listed",
	}

	err = utils.WriteJSON(w, http.StatusOK, payload)
	if err != nil {
		log.Println(err)
		utils.ErrorJSON(w, err)
	}
}

func (h *MealHandler) Get(w http.ResponseWriter, r *http.Request) {
	mealID, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		log.Println("error parsing meal id", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	result := repositories.GetRepository().Meal.Get(mealID)

	payload := utils.JSONResponse{
		Data:    result,
		Error:   false,
		Message: "plans listed",
	}

	err = utils.WriteJSON(w, http.StatusOK, payload)
	if err != nil {
		log.Println(err)
		utils.ErrorJSON(w, err)
	}
}

// save meal
// decides between CREATE or UPDATE

// create meal

// update meal

// view meal

// delete meal

// testing
func (h *MealHandler) Add(w http.ResponseWriter, r *http.Request) {
	var meal repositoriesInterfaces.MealData

	err := utils.ReadJSON(w, r, &meal)
	if err != nil {
		log.Println("error reading meal", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	result := repositories.GetRepository().Meal.Add(meal)

	payload := utils.JSONResponse{
		Data:    result,
		Error:   false,
		Message: "meal added",
	}

	err = utils.WriteJSON(w, http.StatusCreated, payload)
	if err != nil {
		log.Println(err)
		utils.ErrorJSON(w, err)
	}
}
