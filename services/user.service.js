const { User } = require('../dataBase');

module.exports = {
  createUser: (newUser) => User.create(newUser),
  getAllUsers: (filter = {}) => User.find(filter),
  getUserById: (userId) => User.findById(userId),
  deleteUserById: (userId) => User.findByIdAndDelete(userId),
  updateUser: (userId, newData) => User.findByIdAndUpdate({ _id: userId }, newData, { new: true }),
  findOneByParams: (filter = {}) => User.findOne(filter)
};
