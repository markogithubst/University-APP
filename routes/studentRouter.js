const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/studentController');
const { validateId, validateStudent } = require('../middleware');

router.get('/:id', validateId, StudentController.getOneStudent);
router.get('/', StudentController.getAllStudents);
router.post('/', validateStudent, StudentController.createStudent);
router.put('/:id', validateId, validateStudent, StudentController.updateStudent);
router.delete('/:id', validateId, StudentController.deleteStudent);

router.get('/own-results/:id', validateId, StudentController.getOwnResults);

module.exports = router;
