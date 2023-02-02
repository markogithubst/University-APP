const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');
const { validateId, validateStudent } = require('../middleware');

router.get('/:id', validateId, studentController.getOneStudent);
router.get('/', studentController.getAllStudents);
router.post('/', validateStudent, studentController.createStudent);
router.put('/:id', validateId, validateStudent, studentController.updateStudent);
router.delete('/:id', validateId, studentController.deleteStudent);

router.get('/own-results/:id', validateId, studentController.getOwnResults);

module.exports = router;
