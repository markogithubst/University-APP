const express = require('express');
const router = express.Router();

const EnrollmentController = require('../controllers/enrollmentController')


router.get('/student/:id', EnrollmentController.getEnrollmentsByStudent);
router.get('/course/:id', EnrollmentController.getEnrollmentsByCourse);
router.get('/', EnrollmentController.getAllEnrollments);
router.post('/', EnrollmentController.createEnrollment);
router.put('/:CourseId/:StudentId', EnrollmentController.updateEnrollment);
router.delete('/', EnrollmentController.deleteEnrollment);

module.exports = router;