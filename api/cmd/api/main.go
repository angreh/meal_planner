package main

import (
	"fmt"
	"net/http"

	"sibgreh.com/meal_planner/internal/repositories"
	"sibgreh.com/meal_planner/internal/router"
	"sibgreh.com/meal_planner/pkg/db"
)

const port = 8080
const DSN = "host=localhost port=5432 user=postgres password=password dbname=meal_planner sslmode=disable timezone=UTC connect_timeout=5"

func main() {
	db.Init(DSN)
	repositories.Init()
	appRouter := router.Init()

	err := http.ListenAndServe(fmt.Sprintf(":%d", port), appRouter)
	if err != nil {
		panic(err)
	}
}
