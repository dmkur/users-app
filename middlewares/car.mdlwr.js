const { carService } = require("../services");
const { CustomErrorHandler } = require("../errors");
const { statusCodesEnum } = require("../constants");

module.exports = {
  isCarPresent: async (req, res, next) => {
    try {
      const { carId } = req.params;

      const car = await carService.getCarById(carId);

      if (!car) {
        return next(
          new CustomErrorHandler("Not found", statusCodesEnum.NOT_FOUND)
        );
      }

      req.car = car;

      next();
    } catch (e) {
      next(e);
    }
  },
  isCarBelongUser: (req, res, next) => {
    try {
      // const {
      //   user: { _id: userId },
      // } = req.tokenInfo;

      // const { carId } = req.params;

      // const car = await carService.getCarsByParams({
      //   _id: carId,
      //   user: userId,
      // });

      // if (car.length === 0) {
      //   return next(
      //     new CustomErrorHandler(
      //       "Car doesn`t belong current user",
      //       statusCodesEnum.BAD_REQUEST
      //     )
      //   );
      // }
      console.log(req.tokenInfo);
      console.log(req.car);
      res.json("stop");

      // next();
    } catch (e) {
      next(e);
    }
  },
};
