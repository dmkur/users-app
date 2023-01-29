const { Router } = require('express');
const {
  commonMdlwr,
  userMdlwr
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

module.exports = authRouter;
