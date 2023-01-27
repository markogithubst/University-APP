const express = require('express');
const router = express.Router();

const EnrollmentController = require('../controllers/enrollmentController');
const { validateId, validateDoubleId, validateEnrollment } = require('../middleware');

router.get('/student/:id', validateId, EnrollmentController.getEnrollmentsByStudent);
router.get('/course/:id', validateId, EnrollmentController.getEnrollmentsByCourse);
router.get('/', EnrollmentController.getAllEnrollments);
router.post('/', validateEnrollment, EnrollmentController.createEnrollment);
router.put('/:firstId/:secondId', validateDoubleId, validateEnrollment, EnrollmentController.updateEnrollment);
router.delete('/', EnrollmentController.deleteEnrollment);

module.exports = router;
