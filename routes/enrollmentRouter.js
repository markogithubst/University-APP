const express = require('express');
const router = express.Router();

const EnrollmentController = require('../controllers/enrollmentController');
const { validateId , validateDoubleId } = require('../middleware');

router.get('/student/:id', validateId , EnrollmentController.getEnrollmentsByStudent);
router.get('/course/:id', validateId , EnrollmentController.getEnrollmentsByCourse);
router.get('/', EnrollmentController.getAllEnrollments);
router.post('/', EnrollmentController.createEnrollment);
router.put('/:firstId/:secondId', validateDoubleId , EnrollmentController.updateEnrollment);
router.delete('/', EnrollmentController.deleteEnrollment);

module.exports = router;