import type { Knex } from "knex";

const TABLE_NAME = "ingredient";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.string("image", 255);
    table.text("description");
    table.text("how_to_pick");
    table.timestamps;
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}
