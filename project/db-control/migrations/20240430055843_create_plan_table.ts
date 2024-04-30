import type { Knex } from "knex";

const TABLE_NAME = "plan";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id");
    table.timestamp("begin_date");
    table.timestamp("end_date");
    table.timestamps;
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}

