import { Knex } from "knex";

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "meal_planner",
  },
};

export default config;
