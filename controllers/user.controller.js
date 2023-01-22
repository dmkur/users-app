const { userService } = require('../services');
const { statusCodesEnum } = require('../constants');

module.exports = {
  create: async (req, res, next) => {
    try {
      const newUser = await userService.createUser(req.body);

      res.status(statusCodesEnum.CREATE).json(newUser);
    } catch (e) {
      next(e);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const allUsers = await userService.getAllUsers();

      res.json(allUsers);
    } catch (e) {
      next(e);
    }
  },

  getUserByIdAndUpdate: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const updatedUser = await userService.updateUser(userId, req.body);

      res.json(updatedUser);
    } catch (e) {
      next(e);
    }
  },
  getUserById: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const user = await userService.getUserById(userId);

      res.json(user);
    } catch (e) {
      next(e);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      const { userId } = req.params;

      await userService.deleteUserById(userId);

      res.sendStatus(statusCodesEnum.NO_CONTENT);
    } catch (e) {
      next(e);
    }
  }
};
