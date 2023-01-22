const { User } = require('../dataBase');

module.exports = {
  createUser: (newUser) => User.create(newUser),
  getAllUsers: (filter = {}) => User.find(filter),
  getUserById: (userId) => User.findById(userId)
};
