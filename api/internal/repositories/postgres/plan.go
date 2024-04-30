package repositories

import (
	"context"
	"log"
	"time"

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

	log.Println("Listing plans", plans)

	return plans
}
