const Joi = require('joi');

const yearValidator = Joi.number().integer().min(new Date().getFullYear() - 70).max(new Date().getFullYear());
const modelValidator = Joi.string().alphanum().min(2).max(35)
  .trim();
const priceValidator = Joi.number().integer().min(1).max(999999);

const newCarValidator = Joi.object({
  year: yearValidator.required(),
  model: modelValidator.required(),
  price: priceValidator.required(),
});

const updateCarValidator = Joi.object({
  year: yearValidator,
  model: modelValidator,
  price: priceValidator
});

module.exports = {
  newCarValidator,
  updateCarValidator
};
