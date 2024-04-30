package handlers

import (
	"log"
	"net/http"

	"sibgreh.com/meal_planner/internal/repositories"
	repositoriesInterfaces "sibgreh.com/meal_planner/internal/repositories/interfaces"
	"sibgreh.com/meal_planner/pkg/utils"
)

type PlanHandler struct{}

// list all plans

// view plan

// remove plan

// save plan
// decides between CREATE or UPDATE

// create plan
func (h *PlanHandler) Add(w http.ResponseWriter, r *http.Request) {
	var plan repositoriesInterfaces.PlanData

	err := utils.ReadJSON(w, r, &plan)
	if err != nil {
		log.Println("error reading plan", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	result := repositories.GetRepository().Plan.Create(plan)

	payload := utils.JSONResponse{
		Data:    result,
		Error:   false,
		Message: "plan added",
	}

	err = utils.WriteJSON(w, http.StatusCreated, payload)
	if err != nil {
		log.Println(err)
		utils.ErrorJSON(w, err)
	}
}

// update plan

// delete plan
