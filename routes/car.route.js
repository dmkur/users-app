const { Router } = require('express');
const { carController } = require('../controllers');
const { authMdlwr } = require('../middlewares');

const carRoute = Router();

carRoute.get('/', carController.allCars);

carRoute.post('/', authMdlwr.checkIsAccessToken, carController.createCar);

module.exports = carRoute;
