const {
  tokenService,
  authService
} = require('../services');
const { statusCodesEnum } = require('../constants');

module.exports = {
  login: async (req, res, next) => {
    try {
      const { password } = req.body;
      const { password: hashPassword, _id } = req.user;

      await tokenService.comparePassword(password, hashPassword);

      const authTokens = tokenService.createAuthTokens({ _id });

      await authService.saveTokens({ ...authTokens, user: _id });

      res.json({ ...authTokens, user: _id });
    } catch (e) {
      next(e);
    }
  },
  logout: async (req, res, next) => {
    try {
      const { user: userId, access_token } = req.tokenInfo;

      await authService.deleteOneByParams({ user: userId, access_token });

      res.sendStatus(statusCodesEnum.NO_CONTENT);
    } catch (e) {
      next(e);
    }
  },

  refresh: async (req, res, next) => {
    try {
      const { user, refresh_token } = req.tokenInfo;

      await authService.deleteOneByParams({ refresh_token });

      const newAuthTokens = tokenService.createAuthTokens({ id: user });

      await authService.saveTokens({ ...newAuthTokens, user });

      res.json(newAuthTokens);
    } catch (e) {
      next(e);
    }
  },
};
