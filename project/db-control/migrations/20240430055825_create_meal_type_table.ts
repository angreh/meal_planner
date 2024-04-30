import type { Knex } from "knex";

const TABLE_NAME = "meal_type";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id");
    table.string("title", 255);
    table.string("icon", 255);
    table.timestamps;
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}
