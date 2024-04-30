package repositories

type MealData struct {
	ID              int    `json:"id,omitempty" db:"id,omitempty"`
	Name            string `json:"name" db:"name"`
	Description     string `json:"description,omitempty" db:"description,omitempty"`
	Preparation     string `json:"preparation,omitempty" db:"preparation,omitempty"`
	PreparationTime int    `json:"preparationTime,omitempty" db:"preparation_time,omitempty"`
}

type MealRepository interface {
	List() []*MealData

	// testing
	Add(meal MealData) any
}
