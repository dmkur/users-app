const { Router } = require('express');
const { userController } = require('../controllers');

const userRoute = Router();

userRoute.get('/', userController.getAll);
userRoute.post('/', userController.create);

userRoute.get('/:userId', userController.getUserById);
userRoute.put('/:userId', userController.getUserByIdAndUpdate);
userRoute.delete('/:userId', userController.deleteById);

module.exports = userRoute;
