const { userService } = require('../services');
const { CustomErrorHandler } = require('../errors');
const { statusCodesEnum } = require('../constants');

module.exports = {
  checkIsEmailUniq: async (req, res, next) => {
    try {
      const { email } = req.body;

      const user = await userService.findOneByParams({ email });

      if (user) next(new CustomErrorHandler('Email already exist', statusCodesEnum.CONFLICT));

      next();
    } catch (e) {
      next(e);
    }
  }
};
