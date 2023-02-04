// eslint-disable-next-line import/no-extraneous-dependencies
const cron = require('node-cron');

const removeOldTokens = require('./removeOldTokens');

module.exports = () => {
  cron.schedule('0 4 * * *', async () => {
    await removeOldTokens();
  });
};
