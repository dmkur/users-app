// eslint-disable-next-line import/no-extraneous-dependencies
const dayJs = require('dayjs');
// eslint-disable-next-line import/no-extraneous-dependencies
const utc = require('dayjs/plugin/utc');
const { authService } = require('../services');

dayJs.extend(utc);

module.exports = async () => {
  try {
    console.log('Remove old tokens is starting', new Date().toISOString());

    const oneDayBeforeNow = dayJs().utc().subtract(1, 'day');

    const deleteInfo = await authService.deleteMany({
      createdAt: { $lte: oneDayBeforeNow }
    });

    console.log(deleteInfo);

    console.log('Remove old tokens ended', new Date().toISOString());
  } catch (e) {
    console.log(e, 'cron removeOldTokens');
  }
};
