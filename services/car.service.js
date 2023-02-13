const { Car } = require('../dataBase');

module.exports = {
  createCar: (newCar) => Car.create(newCar),
  getCarsByParams: (filter) => Car.find(filter),

  getCarById: (carId) => Car.findOne({ _id: carId }).populate('user'),

  deleteCarById: (carId) => Car.deleteOne({ _id: carId }),
  updateCarById: (carId, newCar) => Car.findOneAndUpdate({ _id: carId }, newCar, { new: true })
};
