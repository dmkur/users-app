const { Router } = require('express');
const { userController } = require('../controllers');
const {
  userMdlwr,
  commonMdlwr,
  authMdlwr
} = require('../middlewares');
const { newUserValidator } = require('../validators/user.validator');

const userRoute = Router();

userRoute.get(
  '/',
  authMdlwr.checkIsAccessToken,
  userController.getAll
);

userRoute.post(
  '/',
  commonMdlwr.checkIsBodyValid(newUserValidator),
  userMdlwr.checkIsEmailUniq,
  userController.create
);

userRoute.get(
  '/:userId',
  userMdlwr.isUserPresent(),
  userController.getUserById
);

userRoute.put(
  '/:userId',
  authMdlwr.checkIsAccessToken,
  userMdlwr.isUserPresent(),
  userController.getUserByIdAndUpdate
);

userRoute.delete(
  '/:userId',
  authMdlwr.checkIsAccessToken,
  userMdlwr.isUserPresent(),
  userController.deleteById
);

module.exports = userRoute;
