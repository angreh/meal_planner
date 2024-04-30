package repositories

import (
	"context"
	"log"
	"time"

	interfaces "sibgreh.com/meal_planner/internal/repositories/interfaces"
	"sibgreh.com/meal_planner/pkg/db"
)

type MealRepository struct {
}

func (m *MealRepository) Add(meal interfaces.MealData) any {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var newID int
	query := `INSERT INTO meals (description, preparation,time) VALUES ($1, $2, $3) RETURNING id`

	err := db.CON.QueryRowContext(ctx, query, meal.Description, meal.Preparation, meal.Time).Scan(&newID)
	if err != nil {
		log.Println("Error inserting meal", err)
	}

	return newID
}
