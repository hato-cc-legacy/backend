/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').insert([
    {
      card_id: '1',
      text: 'wow, this sucks',
      user_id: '1',
    },
    {
      card_id: '1',
      text: 'no, this is great!',
      user_id: '2',
    },
    {
      card_id: '1',
      text: 'stop fighting!!',
      user_id: '3',
    },
    {
      card_id: '1',
      text: 'nah, this is so bad...',
      user_id: '1',
    },
    {
      card_id: '3',
      text: 'hahaha!',
      user_id: '7',
    },
    {
      card_id: '3',
      text: 'shut up bro',
      user_id: '6',
    },
    {
      card_id: '9',
      text: 'eyyo can anyone add me on discord?',
      user_id: '5',
    },
    {
      card_id: '9',
      text: 'why are you adding ppl here??',
      user_id: '4',
    },
    {
      card_id: '7',
      text: 'gustavo is so cool!',
      user_id: '10',
    },
    {
      card_id: '7',
      text: 'wow the people who made this app must be cracked!',
      user_id: '8',
    }

  ]);
};
