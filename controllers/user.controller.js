const { userService } = require('../services');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const newUser = await userService.createUser(req.body);

      res.json(newUser);
    } catch (e) {
      next(e);
    }
  }
};
