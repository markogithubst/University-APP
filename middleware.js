// eslint-disable-next-line max-len
const { nameSchema, idSchema, doubleIdSchema, studentSchema, professorSchema, courseSchema, examSchema, enrollmentSchema, resultSchema } = require('./schemas');

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

const validateCourse = (req, res, next) => {
  const { error } = courseSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateExam = (req, res, next) => {
  const { error } = examSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateEnrollment = (req, res, next) => {
  const { error } = enrollmentSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateResult = (req, res, next) => {
  const { error } = resultSchema.validate(req.body);
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
  validateProfessor,
  validateCourse,
  validateExam,
  validateEnrollment,
  validateResult
};
