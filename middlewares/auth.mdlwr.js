const { AUTHORIZATION } = require('../constants/constants');
const { CustomErrorHandler } = require('../errors');
const {
  statusCodesEnum,
  tokenTypeEnum
} = require('../constants');
const {
  tokenService,
  authService
} = require('../services');

module.exports = {
  checkIsAccessToken: async (req, res, next) => {
    try {
      const access_token = req.get(AUTHORIZATION);

      if (!access_token) {
        return next(new CustomErrorHandler('Token is absent', statusCodesEnum.UNAUTHORIZED));
      }

      tokenService.checkToken(access_token);

      const tokenInfo = await authService.getOneWithUser({ access_token });

      if (!tokenInfo) {
        return next(new CustomErrorHandler('Token not Found', statusCodesEnum.UNAUTHORIZED));
      }

      req.tokenInfo = tokenInfo;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkIsRefreshToken: async (req, res, next) => {
    try {
      const refresh_token = req.get(AUTHORIZATION);

      if (!refresh_token) {
        return next(new CustomErrorHandler('Token is absent', statusCodesEnum.UNAUTHORIZED));
      }

      tokenService.checkToken(refresh_token, tokenTypeEnum.REFRESH_TYPE);

      const tokenInfo = await authService.getOneByParams({ refresh_token });

      if (!tokenInfo) {
        return next(new CustomErrorHandler('Token not Found', statusCodesEnum.UNAUTHORIZED));
      }

      req.tokenInfo = tokenInfo;

      next();
    } catch (e) {
      next(e);
    }
  }
};
