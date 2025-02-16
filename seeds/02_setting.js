/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('setting').del();
  await knex('setting').insert([
  { id: 1, category: 1, type: "Fish" },
  { id: 2, category: 1, type: "Milk & Lactose" },
  { id: 3, category: 1, type: "Tree Nuts" },
  { id: 4, category: 1, type: "Peanuts" },
  { id: 5, category: 1, type: "Shellfish" },
  { id: 6, category: 1, type: "Wheat & Gluten" },
  { id: 7, category: 1, type: "Eggs" },
  { id: 8, category: 1, type: "Soy" },
  { id: 9, category: 2, type: "Halal" },
  { id: 10, category: 2, type: "Vegan" },
  { id: 11, category: 2, type: "Vegetarian" },
  { id: 12, category: 2, type: "Kosher" }
]);};
