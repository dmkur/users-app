// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require('bcrypt');
// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');
const { CustomErrorHandler } = require('../errors');
const { statusCodesEnum } = require('../constants');
const {
  ACCESS_SECRET_WORD,
  ACCESS_TOKEN_LIFETIME,
  REFRESH_TOKEN_LIFETIME,
  REFRESH_SECRET_WORD
} = require('../config/config');

module.exports = {
  hashPassword: (password) => bcrypt.hash(password, 10),
  comparePassword: async (password, hashPassword) => {
    const isPasswordSame = await bcrypt.compare(password, hashPassword);

    if (!isPasswordSame) {
      throw new CustomErrorHandler('Wrong email or passwords', statusCodesEnum.BAD_REQUEST);
    }
  },
  createAuthTokens: (payload = {}) => {
    const access_token = jwt.sign(payload, ACCESS_SECRET_WORD, { expiresIn: ACCESS_TOKEN_LIFETIME });
    const refresh_token = jwt.sign(payload, REFRESH_TOKEN_LIFETIME, { expiresIn: REFRESH_TOKEN_LIFETIME });

    return { access_token, refresh_token };
  },
  checkToken: (token, tokenType = ACCESS_SECRET_WORD) => {
    try {
      const secretWord = tokenType === ACCESS_SECRET_WORD ? ACCESS_SECRET_WORD : REFRESH_SECRET_WORD;

      return jwt.verify(token, secretWord);
    } catch (e) {
      throw new CustomErrorHandler('Token not valid', statusCodesEnum.BAD_REQUEST);
    }
  }
};
