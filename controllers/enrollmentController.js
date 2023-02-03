/* eslint-disable camelcase */
const models = require('../models');
const { getAll, createOne } = require('./crudController');

const getAllEnrollments = async (req, res) => {
  /* #swagger.tags = ['Enrollment'] */
  /* #swagger.responses[200] = {
        description: 'Get all Enrollments from the database',
        schema: [
            {
                "course_id": 1,
                "student_id": 3
            }
        ]
    } */
  await getAll(req, res, models.Enrollment);
};

const createEnrollment = async (req, res) => {
  /* #swagger.tags = ['Enrollment'] */
  await createOne(req, res, models.Enrollment);
};

const getEnrollmentsByStudent = async (req, res) => {
  /* #swagger.tags = ['Enrollment'] */
  try {
    const enrollmentByStudentId = req.params.id;
    const allEnrollmentByStudentId = await models.Enrollment.findAll({
      where: { student_id: enrollmentByStudentId },
      include: [
        {
          model: models.Course,
          attributes: ['name', 'credit_hours', 'professor_id']
        }
      ],
      attributes: {
        exclude: ['id', 'created_at', 'updated_at']
      }
    });
    return (!allEnrollmentByStudentId || allEnrollmentByStudentId.length === 0)
      ? res.status(404).json({ message: 'Enrollment By entered Student Id not found' })
      : res.status(200).json(allEnrollmentByStudentId);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getEnrollmentsByCourse = async (req, res) => {
  /* #swagger.tags = ['Enrollment'] */
  try {
    const enrollmentByCourseId = req.params.id;
    const allEnrollmentByCourseId = await models.Enrollment.findAll({
      where: { course_id: enrollmentByCourseId },
      include: [
        {
          model: models.Student,
          attributes: ['full_name', 'email', 'address', 'phone_number', 'major_id']
        }
      ],
      attributes: {
        exclude: ['id', 'created_at', 'updated_at']
      }
    });
    return !allEnrollmentByCourseId || allEnrollmentByCourseId.length === 0
      ? res.status(404).json({ message: 'Enrollment By entered Course Id not found' })
      : res.status(200).json(allEnrollmentByCourseId);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteEnrollment = async (req, res) => {
  /* #swagger.tags = ['Enrollment'] */
  try {
    const { firstId, secondId } = req.params;
    const deleted = await models.Enrollment.destroy({ where: { course_id: firstId, student_id: secondId } });
    return !deleted
      ? res.status(404).json({ message: 'Enrollment with the inserted StudentId and CourseId not found' })
      : res.status(202).json({ message: 'Enrollment with the inserted StudentId and CourseId succesfully deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occured while deleting the enrollment: ' + error.message });
  }
};

const updateEnrollment = async (req, res) => {
  /* #swagger.tags = ['Enrollment'] */
  try {
    const { firstId, secondId } = req.params;
    const updated = await models.Enrollment.update(req.body, { where: { student_id: secondId, course_id: firstId } });
    return updated[0] === 0
      ? res.status(404).json({ message: 'Enrollment not updated' })
      : res.status(200).json({ message: 'Enrollment updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occured while updating the enrollment: ' + error.message });
  }
};

module.exports = {
  createEnrollment,
  getEnrollmentsByCourse,
  getAllEnrollments,
  getEnrollmentsByStudent,
  updateEnrollment,
  deleteEnrollment
};
