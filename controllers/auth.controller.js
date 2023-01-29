const {
  tokenService,
  authService
} = require('../services');

module.exports = {
  login: async (req, res, next) => {
    try {
      const { password } = req.body;
      const { password: hashPassword, _id } = req.user;

      await tokenService.comparePassword(password, hashPassword);

      const authTokens = tokenService.createAuthTokens({ _id });

      await authService.saveTokens(authTokens);

      res.json({ ...authTokens, user: _id });
    } catch (e) {
      next(e);
    }
  }
};
