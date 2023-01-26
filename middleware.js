const { nameSchema, id_schema } = require('./schemas');

const validate_id = (req, res, next) => {
  const { error } = id_schema.validate(req.params);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateName = (req, res, next) => {
  const { error } = nameSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  validateName,
  validate_id
};