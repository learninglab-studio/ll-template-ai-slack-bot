const { App } = require('@slack/bolt');
const path = require('path');
const { llog } = require('./src/utils');
const { noBot } = require('./src/utils/ll-slack-utils/middleware');
const { handleTesting, handleAll } = require('./src/bot/handle-messages');
// const { messageHandler, eventHandler, actionHandler, slashHandler } = require('./src/elle-l-bot');  
const { everything } = require('./src/utils/ll-regexes') 

require('dotenv').config();
global.ROOT_DIR = path.resolve(__dirname);

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000
});

app.message('testing testing', handleTesting);
app.message(everything, noBot, handleAll);

// app.command('/elle', slashHandler.elleSlash);

// app.event('reaction_added', eventHandler.reactionAdded);

(async () => {
  // Start your app
  global.BOT_CONFIG = {channels: [process.env.SLACK_TESTS_CHANNEL]};
  await app.start();
  console.log('⚡️ Bolt app is running!');
})();