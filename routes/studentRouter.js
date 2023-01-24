const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/studentController')


router.get('/:id', StudentController.getOneStudent);
router.get('/', StudentController.getAllStudents);
router.post('/', StudentController.createStudent);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);

router.get('/own-results/:id', StudentController.getOwnResults);

module.exports = router;