package db

import (
	"database/sql"
	"log"

	_ "github.com/jackc/pgconn"
	_ "github.com/jackc/pgx/v4"
	_ "github.com/jackc/pgx/v4/stdlib"
)

var CON *sql.DB

func Init(dsn string) {
	var err error
	CON, err = connectToDB(dsn)
	if err != nil {
		panic(err)
	}

	log.Println("Connected to Postgres!!")
}

func openDB(dsn string) (*sql.DB, error) {
	db, err := sql.Open("pgx", dsn)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return db, nil
}

func connectToDB(DSN string) (*sql.DB, error) {
	connection, err := openDB(DSN)
	if err != nil {
		return nil, err
	}

	return connection, nil
}
