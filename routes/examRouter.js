const express = require('express');
const router = express.Router();

const ExamController = require('../controllers/examController');


router.get('/:id', ExamController.getOneExam);
router.get('/', ExamController.getAllExams);
router.post('/', ExamController.createExam);
router.put('/:id', ExamController.updateExam);
router.delete('/:id', ExamController.deleteExam);

module.exports = router;