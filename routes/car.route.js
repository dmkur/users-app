const { Router } = require("express");
const { carController } = require("../controllers");
const { authMdlwr, commonMdlwr, carMdlwr } = require("../middlewares");
const {
  newCarValidator,
  updateCarValidator,
} = require("../validators/car.validator");

const carRoute = Router();

carRoute.get("/", carController.allCars);

carRoute.post(
  "/",
  authMdlwr.checkIsAccessToken,
  commonMdlwr.checkIsBodyValid(newCarValidator),
  carController.createCar
);

carRoute.get(
  "/:carId",
  commonMdlwr.checkIsIdValid("carId"),
  carMdlwr.isCarPresent,
  carController.getCarById
);

carRoute.put(
  "/:carId",
  commonMdlwr.checkIsIdValid("carId"),
  commonMdlwr.checkIsBodyValid(updateCarValidator),
  authMdlwr.checkIsAccessToken,
  carMdlwr.isCarPresent,
  carMdlwr.isCarBelongUser,
  // carController.updateCarById
);

carRoute.delete(
  "/:carId",
  commonMdlwr.checkIsIdValid("carId"),
  authMdlwr.checkIsAccessToken,
  carMdlwr.isCarPresent,
  carController.deleteCarById
);

module.exports = carRoute;
