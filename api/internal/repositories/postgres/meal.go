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

	return meals
}

func (r *MealRepository) Get(mealID int) *interfaces.MealData {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	query := `SELECT id, name, description, preparation, preparation_time FROM meal WHERE id=$1 LIMIT 1`

	var meal interfaces.MealData
	err := db.CON.QueryRowContext(ctx, query, mealID).Scan(&meal.ID, &meal.Name, &meal.Description, &meal.Preparation, &meal.PreparationTime)
	if err != nil {
		log.Println("Error listing meals", err)
	}

	return &meal
}

func (m *MealRepository) Add(meal interfaces.MealData) any {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	query := `INSERT INTO meal (name, description, preparation, preparation_time) VALUES ($1, $2, $3, $4) RETURNING id`

	var newID int
	err := db.CON.QueryRowContext(ctx, query, meal.Name, meal.Description, meal.Preparation, meal.PreparationTime).Scan(&newID)
	if err != nil {
		log.Println("Error inserting meal", err)
	}

	return newID
}

func (m *MealRepository) AddIngredient(mealID int, ingredientID int, amount int) any {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	query := `INSERT INTO meal_ingredient (meal_id, ingredient_id, amount) VALUES ($1, $2, $3) RETURNING id`

	var newID int
	err := db.CON.QueryRowContext(ctx, query, mealID, ingredientID, amount).Scan(&newID)
	if err != nil {
		log.Println("error inserting meal ingredient", err)
	}

	return newID
}
