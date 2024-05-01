package repositories

import (
	"context"
	"log"
	"time"

	interfaces "sibgreh.com/meal_planner/internal/repositories/interfaces"
	"sibgreh.com/meal_planner/pkg/db"
)

type IngredientRepository struct{}

func (r *IngredientRepository) Create(ingredient interfaces.IngredientData) int {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var newID int
	query := `INSERT INTO ingredient (name, description, how_to_pick) VALUES ($1, $2, $3) RETURNING id`

	err := db.CON.QueryRowContext(ctx, query, ingredient.Name, ingredient.Description, ingredient.HowToPick).Scan(&newID)
	if err != nil {
		log.Println("Error inserting ingredient", err)
	}

	return newID
}

func (r *IngredientRepository) ListByMeal(mealID int) []*interfaces.IngredientData {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	query := `
	SELECT i.id, i.name, i.description, i.how_to_pick
	FROM ingredient i
	INNER JOIN meal_ingredient mi
	ON i.id = mi.ingredient_id
	WHERE mi.meal_id = $1
	`

	rows, err := db.CON.QueryContext(ctx, query, mealID)
	if err != nil {
		log.Println("Error listing ingredients", err)
	}
	defer rows.Close()

	var ingredients []*interfaces.IngredientData
	for rows.Next() {
		var ingredient interfaces.IngredientData
		err = rows.Scan(&ingredient.ID, &ingredient.Name, &ingredient.Description, &ingredient.HowToPick)
		if err != nil {
			log.Println("Error scanning ingredient", err)
		}
		ingredients = append(ingredients, &ingredient)
	}

	if err := rows.Err(); err != nil {
		log.Println("Error reading ingredients", err)
	}

	return ingredients
}
