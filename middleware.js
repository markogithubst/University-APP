// eslint-disable-next-line max-len
const { nameSchema, idSchema, doubleIdSchema, studentSchema, professorSchema, courseSchema, examSchema, enrollmentSchema, resultSchema } = require('./schemas/schemas');
const { validateSchema } = require('./schemas/validateSchema');

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

const validateStudent = validateSchema(studentSchema);

const validateProfessor = validateSchema(professorSchema);

const validateCourse = validateSchema(courseSchema);

const validateExam = validateSchema(examSchema);

const validateEnrollment = validateSchema(enrollmentSchema);

const validateResult = validateSchema(resultSchema);

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
