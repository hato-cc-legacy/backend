/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cards_likes').insert([
    {
      user_id: "1",
      card_id: "2",
    },
    {
      user_id: "2",
      card_id: "2",
    },
    {
      user_id: "3",
      card_id: "2",
    },
    {
      user_id: "4",
      card_id: "4",
    },
    {
      user_id: "5",
      card_id: "5",
    },
    {
      user_id: "6",
      card_id: "9",
    },
    {
      user_id: "7",
      card_id: "9",
    },
    {
      user_id: "8",
      card_id: "5",
    },
    {
      user_id: "9",
      card_id: "10",
    },
    {
      user_id: "10",
      card_id: "3",
    },
  ]);
};
