const { Router } = require('express');
const { userController } = require('../controllers');
const {
  userMdlwr,
  commonMdlwr
} = require('../middlewares');
const { newUserValidator } = require('../validators/user.validator');

const userRoute = Router();

userRoute.get('/', userController.getAll);

userRoute.post(
  '/',
  commonMdlwr.checkIsBodyValid(newUserValidator),
  userMdlwr.checkIsEmailUniq,
  userController.create
);

userRoute.get('/:userId', userController.getUserById);
userRoute.put('/:userId', userController.getUserByIdAndUpdate);
userRoute.delete('/:userId', userController.deleteById);

module.exports = userRoute;
