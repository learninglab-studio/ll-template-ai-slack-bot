const { llog } = require("../../lib/utils");

module.exports.handleAll = async ({ message, say }) => {
    llog.gray("handleAll message:", message)
}

module.exports.handleTesting = async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`the bot is running, <@${message.user}>.`);
}