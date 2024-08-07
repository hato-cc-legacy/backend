const knex = require("../knex");

const cardReportsModel = {
    reportByCardId: async (reportedCardId, reportingUserId) => {

        await knex("cards_report").insert({ card_id: reportedCardId, user_id: reportingUserId }).catch((err) => {
            return "You cannot report the same post twice."
        });
        return await knex("cards").where({ id: reportedCardId }).update({ flag_report: true });
    },
}

module.exports = cardReportsModel;