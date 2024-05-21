import type { Knex } from "knex";

const TABLE_NAME = "plan_item";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id");
    table
      .integer("plan_id", 10)
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("plan");
    table
      .integer("meal_id", 10)
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("meal");
    table
      .integer("meal_type_id", 10)
      .unsigned()
      .references("id")
      .inTable("meal_type");
    table.timestamp("date");
    table.timestamps;
  });
}

export async function down(knex: Knex): Promise<void> {}
