package repositories

import "time"

type PlanData struct {
	ID        int       `json:"id,omitempty"`
	BeginDate time.Time `json:"beginDate"`
	EndDate   time.Time `json:"endDate"`
	CreatedAt time.Time `json:"createdAt,omitempty"`
}

type PlanRepository interface {
	Create(plan PlanData) any
}
