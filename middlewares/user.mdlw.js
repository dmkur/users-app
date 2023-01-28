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
  },
  getUserDynemicaly: (from = 'body', field = 'email', dbField = field) => async (req, res, next) => {
    try {
      const fieldToSearch = req[from][field];

      const user = await userService.findOneByParams({ [dbField]: fieldToSearch });

      if (!user) next(new CustomErrorHandler('Not found', statusCodesEnum.NOT_FOUND));

      req.user = user;

      next();
    } catch (e) {
      next(e);
    }
  },
  isUserPresent: (from = 'params') => async (req, res, next) => {
    try {
      const { userId } = req[from];

      const user = await userService.getUserById(userId);

      if (!user) {
        return next(new CustomErrorHandler('Not found', statusCodesEnum.NOT_FOUND));
      }

      req.user = user;

      next();
    } catch (e) {
      next(e);
    }
  }
};
