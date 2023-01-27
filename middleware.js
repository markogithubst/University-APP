const { nameSchema, idSchema, doubleIdSchema, studentSchema, professorSchema } = require('./schemas');

const validateId = (req, res, next) => {
  const { error } = idSchema.validate(req.params);
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

const validateDoubleId = (req, res, next) => {
  const { error } = doubleIdSchema.validate(req.params);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateStudent = (req, res, next) => {
  const { error } = studentSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateProfessor = (req, res, next) => {
  const { error } = professorSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  validateName,
  validateId,
  validateDoubleId,
  validateStudent,
  validateProfessor
};
