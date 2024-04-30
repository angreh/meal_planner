package repositories

type MealData struct {
	Description string `json:"description"`
	Preparation string `json:"preparation"`
	Time        string `json:"time"`
}

type MealRepository interface {

	// testing
	Add(meal MealData) any
}
