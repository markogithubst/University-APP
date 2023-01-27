const express = require('express');
const router = express.Router();

const ExamController = require('../controllers/examController');
const { validateId, validateExam } = require('../middleware');

router.get('/:id', validateId, ExamController.getOneExam);
router.get('/', ExamController.getAllExams);
router.post('/', validateExam, ExamController.createExam);
router.put('/:id', validateId, validateExam, ExamController.updateExam);
router.delete('/:id', validateId, ExamController.deleteExam);

module.exports = router;
