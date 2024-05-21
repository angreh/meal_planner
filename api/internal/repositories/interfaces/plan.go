package repositories

import (
	"time"
)

type PlanData struct {
	ID        int       `json:"id,omitempty" db:"id,omitempty"`
	BeginDate time.Time `json:"beginDate" db:"begin_date"`
	EndDate   time.Time `json:"endDate" db:"end_date"`
	CreatedAt time.Time `json:"createdAt,omitempty" db:"created_at,omitempty"`
	Meals     []int32   `json:"meals" db:"meals"`
}

type PlanRepository interface {
	Create(plan PlanData) any
	List() []*PlanData
	Get(id int) *PlanData
	GenerateGroceries(id int) any
}
