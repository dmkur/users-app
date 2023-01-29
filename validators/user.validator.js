const Joi = require('joi');
const {
  regexEnum,
  statusCodesEnum
} = require('../constants');
const { CustomErrorHandler } = require('../errors');

const passwordValidator = Joi.string().regex(regexEnum.PASSWORD).trim()
  .error(new CustomErrorHandler('Email or password isn`t valid', statusCodesEnum.BAD_REQUEST));

const emailValidator = Joi.string().regex(regexEnum.EMAIL).trim()
  .error(new CustomErrorHandler('Email or password isn`t valid', statusCodesEnum.BAD_REQUEST));

const ageValidator = Joi.number().integer().min(7).max(150);

const nameValidator = Joi.string().alphanum().min(2).max(35)
  .trim();

const newUserValidator = Joi.object({
  name: nameValidator,
  age: ageValidator,
  password: passwordValidator.required(),
  email: emailValidator.required()
});

const loginUserValidator = Joi.object({
  password: passwordValidator.required(),
  email: emailValidator.required()
});

module.exports = {
  newUserValidator,
  loginUserValidator
};
