const {
  carService,
  userService
} = require('../services');
const { statusCodesEnum } = require('../constants');

module.exports = {
  allCars: async (req, res, next) => {
    try {
      const cars = await carService.getCarsByParams();

      res.json(cars);
    } catch (e) {
      next(e);
    }
  },
  createCar: async (req, res, next) => {
    try {
      const { _id } = req.tokenInfo.user;

      const car = await carService.createCar({ ...req.body, user: _id });

      const usersCars = await carService.getCarsByParams({ user: _id });
      await userService.updateUserById(_id, { cars: [...usersCars] });

      res.status(statusCodesEnum.CREATE).json(car);
    } catch (e) {
      next(e);
    }
  },
};
