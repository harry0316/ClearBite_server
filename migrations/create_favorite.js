/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 

 export function up(knex) {
  return knex.schema.createTable('favorite', (table) => {
    table.increments('id').primary();
    table.integer('userid').notNullable();
    table.string('gtin_upc').notNullable();
    table.string('description').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('favorite');
};
