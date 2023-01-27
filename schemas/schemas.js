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

const studentSchema = Joi.object({
  full_name: Joi.string().min(3).max(50).required(),
  email: Joi.string().min(3).max(50).email({ minDomainSegments: 2 }).required(),
  address: Joi.string().min(3).max(50).required(),
  phone_number: Joi.string().min(3).max(25).required(),
  major_id: Joi.number().min(1).required()
}).options({ abortEarly: false });

const professorSchema = Joi.object({
  full_name: Joi.string().min(3).max(50).required(),
  email: Joi.string().min(3).max(50).email({ minDomainSegments: 2 }).required(),
  address: Joi.string().min(3).max(50).required(),
  phone_number: Joi.string().min(3).max(25).required(),
  department_id: Joi.number().min(1).required()
}).options({ abortEarly: false });

const courseSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  credit_hours: Joi.number().min(1).max(500).required(),
  professor_id: Joi.number().min(1).required()
}).options({ abortEarly: false });

const examSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  date_and_time: Joi.string().isoDate().required(),
  course_id: Joi.number().min(1).required()
}).options({ abortEarly: false });

const enrollmentSchema = Joi.object({
  student_id: Joi.number().min(1).required(),
  course_id: Joi.number().min(1).required()
}).options({ abortEarly: false });

const resultSchema = Joi.object({
  student_id: Joi.number().min(1).required(),
  grade: Joi.number().min(1).max(5).required(),
  exam_id: Joi.number().min(1).required()
}).options({ abortEarly: false });

module.exports = {
  nameSchema,
  idSchema,
  doubleIdSchema,
  studentSchema,
  professorSchema,
  courseSchema,
  examSchema,
  enrollmentSchema,
  resultSchema
};
