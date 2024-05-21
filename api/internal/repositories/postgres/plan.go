package repositories

import (
	"context"
	"log"
	"time"

	"github.com/lib/pq"
	interfaces "sibgreh.com/meal_planner/internal/repositories/interfaces"
	"sibgreh.com/meal_planner/pkg/db"
)

type PlanRepository struct{}

func (r *PlanRepository) Create(plan interfaces.PlanData) any {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var newID int
	query := `INSERT INTO plan (begin_date, end_date) VALUES ($1, $2) RETURNING id`

	err := db.CON.QueryRowContext(ctx, query, plan.BeginDate, plan.EndDate).Scan(&newID)
	if err != nil {
		log.Println("Error inserting plan", err)
	}

	for _, meal := range plan.Meals {
		query = `INSERT INTO plan_item (plan_id, meal_id) VALUES ($1, $2)`
		err = db.CON.QueryRowContext(ctx, query, newID, meal).Err()
		if err != nil {
			log.Println("error inserting meal into plan", err)
		}
	}

	return newID
}

func (r *PlanRepository) List() []*interfaces.PlanData {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	query := `SELECT * FROM plan`

	rows, err := db.CON.QueryContext(ctx, query)
	if err != nil {
		log.Println("Error listing plans", err)
	}
	defer rows.Close()

	var plans []*interfaces.PlanData

	for rows.Next() {
		var plan interfaces.PlanData
		err = rows.Scan(&plan.ID, &plan.BeginDate, &plan.EndDate)
		if err != nil {
			log.Println("Error scanning plan", err)
		}
		plans = append(plans, &plan)
	}

	return plans
}

func (r *PlanRepository) Get(planID int) *interfaces.PlanData {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	query := `SELECT
		id, begin_date, end_date,
		array(SELECT meal_id FROM plan_item
		WHERE plan_item.plan_id=$1) as "meals"
		FROM plan WHERE id=$1 LIMIT 1`

	var plan interfaces.PlanData
	err := db.CON.QueryRowContext(ctx, query, planID).Scan(&plan.ID, &plan.BeginDate, &plan.EndDate, (*pq.Int32Array)(&plan.Meals))
	if err != nil {
		log.Println("Error listing plans", err)
	}

	return &plan
}

type ingItem struct {
	ID     int
	Name   string
	Amount int
}

func (r *PlanRepository) GenerateGroceries(planID int) any {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	query := `
		SELECT i.id, i.name, mi.amount
		FROM plan p
		INNER JOIN plan_item pi ON pi.plan_id = p.id
		INNER JOIN meal_ingredient mi ON mi.meal_id = pi.meal_id
		INNER JOIN ingredient i ON i.id = mi.ingredient_id
		WHERE p.id = $1
		ORDER BY i.name
	`

	rows, err := db.CON.QueryContext(ctx, query, planID)
	if err != nil {
		log.Println("Error listing plans", err)
	}
	defer rows.Close()

	var ingredients []*ingItem

	for rows.Next() {
		var ingredient ingItem
		err = rows.Scan(&ingredient.ID, &ingredient.Name, &ingredient.Amount)
		if err != nil {
			log.Println("Error scanning plan", err)
		}
		ingredients = append(ingredients, &ingredient)
	}

	return ingredients
}
