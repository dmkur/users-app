const { Router } = require('express');

const userRoute = Router();

userRoute.get('/');
userRoute.post('/');
userRoute.put('/');

module.exports = userRoute;
