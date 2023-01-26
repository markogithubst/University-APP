const Joi = require('joi');

const nameSchema = Joi.object({
  name: Joi.string().min(2).max(50).required()
});

const idSchema = Joi.object({
  id: Joi.number().min(1).required()
});

const doubleIdSchema = Joi.object({
  firstId: Joi.number().min(1).required(),
  secondId: Joi.number().min(1).required()
});

module.exports = {
  nameSchema,
  idSchema,
  doubleIdSchema
};
