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
  getCarById: async (req, res, next) => {
    try {
      const { carId } = req.params;

      const cars = await carService.getCarById(carId);

      res.json(cars);
    } catch (e) {
      next(e);
    }
  },
  updateCarById: async (req, res, next) => {
    try {
      const { carId } = req.params;

      const newCar = await carService.updateCarById(carId, req.body);

      res.json(newCar);
    } catch (e) {
      next(e);
    }
  },
  deleteCarById: async (req, res, next) => {
    try {
      const { carId } = req.params;

      const newCar = await carService.deleteCarById(carId);

      res.json(newCar);
    } catch (e) {
      next(e);
    }
  },
};
