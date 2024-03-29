const express = require('express');
require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const { PORT, MONGO_URL } = require('./config/config');
const {
  userRoute,
  authRoute,
  carRoute
} = require('./routes');
const { mainErrorHandler } = require('./errors');

const runCron = require('./cron');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res,) => {
  res.json('pong');
});

app.use('/auth', authRoute);
app.use('/cars', carRoute);
app.use('/users', userRoute);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('*', (req, res, next) => {
  next(new Error('Route not found'));
});

app.use(mainErrorHandler);
app.listen(PORT, () => {
  console.log('App started on port,', PORT);

  mongoose.set('strictQuery', false);
  mongoose.connect(MONGO_URL);

  runCron();
});
