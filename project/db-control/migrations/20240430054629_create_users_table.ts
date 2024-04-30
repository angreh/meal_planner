import type { Knex } from "knex";

const TABLE_NAME = "users";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("image", 255);
    table.string("name", 255);
    table.string("email", 255).unique().notNullable();
    table.string("password", 255).notNullable();
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}
