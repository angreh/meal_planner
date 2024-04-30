import type { Knex } from "knex";

const TABLE_NAME = "meal";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id");
    table.string("image", 255);
    table.string("name", 255);
    table.text("description");
    table.text("preparation");
    table.integer("preparation_time");
    table.timestamps;
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}

