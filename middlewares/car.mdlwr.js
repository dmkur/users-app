const { carService } = require('../services');
const { CustomErrorHandler } = require('../errors');
const { statusCodesEnum } = require('../constants');

module.exports = {
  isCarPresent: async (req, res, next) => {
    try {
      const { carId } = req.params;

      const car = await carService.getCarById(carId);

      if (!car) {
        return next(new CustomErrorHandler('Not found', statusCodesEnum.NOT_FOUND));
      }

      req.car = car;

      next();
    } catch (e) {
      next(e);
    }
  }
};
