package repositories

type IngredientData struct {
	ID          int    `json:"id,omitempty" db:"id,omitempty"`
	Name        string `json:"name" db:"name"`
	Description string `json:"description" db:"description"`
	HowToPick   string `json:"howToPick" db:"how_to_pick"`
}

type IngredientRepository interface {
	Create(ingredient IngredientData) int
	ListByMeal(mealID int) []*IngredientData
}
