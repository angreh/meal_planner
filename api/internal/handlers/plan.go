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

type PlanHandler struct{}

func (h *PlanHandler) GenerateGroceries(w http.ResponseWriter, r *http.Request) {
	planID, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		log.Println("error parsing meal id", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	log.Println("generate groceries", planID)

	result := repositories.GetRepository().Plan.GenerateGroceries(planID)

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

func (h *PlanHandler) Get(w http.ResponseWriter, r *http.Request) {
	planID, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		log.Println("error parsing meal id", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	result := repositories.GetRepository().Plan.Get(planID)

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

func (h *PlanHandler) List(w http.ResponseWriter, r *http.Request) {
	result := repositories.GetRepository().Plan.List()

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
