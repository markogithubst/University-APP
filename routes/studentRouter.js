const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/studentController');
const { validateId } = require('../middleware');

router.get('/:id', validateId, StudentController.getOneStudent);
router.get('/', StudentController.getAllStudents);
router.post('/', StudentController.createStudent);
router.put('/:id', validateId, StudentController.updateStudent);
router.delete('/:id', validateId, StudentController.deleteStudent);

router.get('/own-results/:id', validateId, StudentController.getOwnResults);

module.exports = router;
