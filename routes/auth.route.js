const { Router } = require('express');
const {
  commonMdlwr,
  userMdlwr,
  authMdlwr
} = require('../middlewares');
const { loginUserValidator } = require('../validators/user.validator');
const { authController } = require('../controllers');

const authRouter = Router();

authRouter.post(
  '/login',
  commonMdlwr.checkIsBodyValid(loginUserValidator),
  userMdlwr.getUserDynemicaly(),
  authController.login
);

authRouter.post(
  '/logout',
  authMdlwr.checkIsAccessToken,
  authController.logout
);

authRouter.post(
  '/refresh',
  authMdlwr.checkIsRefreshToken,
  authController.refresh
);

module.exports = authRouter;
