migrate_create:
	migrate create -ext sql -dir pkg/db/migrations -seq $(name)

migrate_up:
	migrate -database "pgx://username:password@localhost:5432/meal_planner?sslmode=disable" -path pkg/db/migrations up