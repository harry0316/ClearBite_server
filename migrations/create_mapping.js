/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 

 export function up(knex) {
  return knex.schema.createTable('mapping', (table) => {
    table.increments('id').primary();
    table.string('type_id').notNullable();
    table.string('ingredient_id').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('mapping');
};
