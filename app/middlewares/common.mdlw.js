const { isObjectIdOrHexString } = require('mongoose');
const { CustomErrorHandler } = require('../errors');
const { statusCodesEnum } = require('../constants');

module.exports = {
  checkIsBodyValid: (validatorType) => (req, res, next) => {
    try {
      const validate = validatorType.validate(req.body);

      if (validate.error) next(new CustomErrorHandler(validate.error.message, statusCodesEnum.BAD_REQUEST));

      next();
    } catch (e) {
      next(e);
    }
  },
  checkIsIdValid: (fieldName, from = 'params') => (req, res, next) => {
    try {
      if (!isObjectIdOrHexString(req[from][fieldName])) {
        return next(new CustomErrorHandler('Not valid ID', statusCodesEnum.BAD_REQUEST));
      }

      next();
    } catch (e) {
      next(e);
    }
  },
};
