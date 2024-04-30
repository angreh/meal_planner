import type { Knex } from "knex";

const TABLE_NAME = "meal_ingredient";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id");
    table
      .integer("meal_id", 10)
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("meal");
    table
      .integer("ingredient_id", 10)
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredient");
    table.integer("amount");
    table.timestamps;
  });
}

export async function down(knex: Knex): Promise<void> {}
