const { Car } = require('../dataBase');

module.exports = {
  createCar: (newCar) => Car.create(newCar),
  getCarsByParams: (filter) => Car.find(filter).populate({ path: 'user', select: { password: 0 } }),

  getCarById: (carId) => Car.findOne({ _id: carId }),

  deleteCarById: (carId) => Car.deleteOne({ _id: carId }),
  updateCarById: (carId, newCar) => Car.findOneAndUpdate({ _id: carId }, newCar, { new: true }),
};
