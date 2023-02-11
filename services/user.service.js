const { User } = require('../dataBase');

module.exports = {
  createUser: (newUser) => User.create(newUser),
  getAllUsers: (filter = {}) => User.find(filter).select({ password: 0 }),
  getUserById: (userId) => User.findById(userId).populate('cars'),
  deleteUserById: (userId) => User.findByIdAndDelete(userId),
  updateUserById: (userId, newData) => User.findByIdAndUpdate({ _id: userId }, newData, { new: true }),
  findOneByParams: (filter = {}) => User.findOne(filter)
};
