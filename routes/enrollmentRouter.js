const express = require('express');
const router = express.Router();

const enrollmentController = require('../controllers/enrollmentController');
const { validateId, validateDoubleId, validateEnrollment } = require('../middleware');

router.get('/student/:id', validateId, enrollmentController.getEnrollmentsByStudent);
router.get('/course/:id', validateId, enrollmentController.getEnrollmentsByCourse);
router.get('/', enrollmentController.getAllEnrollments);
router.post('/', validateEnrollment, enrollmentController.createEnrollment);
router.put('/:firstId/:secondId', validateDoubleId, validateEnrollment, enrollmentController.updateEnrollment);
router.delete('/:firstId/:secondId', validateDoubleId, enrollmentController.deleteEnrollment);

module.exports = router;
