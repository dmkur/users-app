module.exports = {
  PORT: process.env.PORT || 5001,
  MONGO_URL: process.env.MONGO_URL,

  ACCESS_SECRET_WORD: process.env.ACCESS_SECRET_WORD || '1',
  REFRESH_SECRET_WORD: process.env.REFRESH_SECRET_WORD || '2',
  ACCESS_TOKEN_LIFETIME: process.env.ACCESS_TOKEN_LIFETIME || '5m',
  REFRESH_TOKEN_LIFETIME: process.env.REFRESH_TOKEN_LIFETIME || '10m',
};
