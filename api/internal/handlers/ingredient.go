package handlers

import "net/http"

type IngredientHandler struct{}

// add ingredient to meal with amount

// save igredient ( create or update)

// remove ingredient

// view ingredient

// list all ingredients

// testing
func (h *IngredientHandler) Add(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, World!!"))
}
