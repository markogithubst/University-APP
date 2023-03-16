const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');
const { validateId, validateDoubleId, validateEnrollment } = require('../middleware/joiMiddleware');

router.get('/student/:id',
/* #swagger.tags = ['Enrollment'] */
  validateId, enrollmentController.getEnrollmentsByStudent);

router.get('/course/:id',
/* #swagger.tags = ['Enrollment'] */
  validateId, enrollmentController.getEnrollmentsByCourse);

router.get('/',
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
  enrollmentController.getAllEnrollments);

router.post('/',
/* #swagger.tags = ['Enrollment'] */
  validateEnrollment, enrollmentController.createEnrollment);

router.put('/:firstId/:secondId',
/* #swagger.tags = ['Enrollment'] */
  validateDoubleId, validateEnrollment, enrollmentController.updateEnrollment);

router.delete('/:firstId/:secondId',
/* #swagger.tags = ['Enrollment'] */
  validateDoubleId, enrollmentController.deleteEnrollment);

module.exports = router;
