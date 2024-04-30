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

func (r *MealRepository) List() []*interfaces.MealData {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	query := `SELECT id, name, description, preparation, preparation_time FROM meal`

	rows, err := db.CON.QueryContext(ctx, query)
	if err != nil {
		log.Println("Error listing meals", err)
	}
	defer rows.Close()

	var meals []*interfaces.MealData

	for rows.Next() {
		var meal interfaces.MealData
		err = rows.Scan(&meal.ID, &meal.Name, &meal.Description, &meal.Preparation, &meal.PreparationTime)
		if err != nil {
			log.Println("Error scanning plan", err)
		}
		meals = append(meals, &meal)
	}

	log.Println("Listing plans", meals)

	return meals
}

func (m *MealRepository) Add(meal interfaces.MealData) any {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var newID int
	query := `INSERT INTO meal (name, description, preparation, preparation_time) VALUES ($1, $2, $3, $4) RETURNING id`

	err := db.CON.QueryRowContext(ctx, query, meal.Name, meal.Description, meal.Preparation, meal.PreparationTime).Scan(&newID)
	if err != nil {
		log.Println("Error inserting meal", err)
	}

	return newID
}
