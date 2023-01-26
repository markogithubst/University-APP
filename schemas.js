const Joi = require('joi');

const nameSchema = Joi.object({
  name: Joi.string().min(2).max(50).required()
});

const id_schema = Joi.object({
  id: Joi.number().min(1).required()
});

module.exports = {
  nameSchema,
  id_schema
};