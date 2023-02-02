const express = require('express');
const router = express.Router();

const examController = require('../controllers/examController');
const { validateId, validateExam } = require('../middleware');

router.get('/:id', validateId, examController.getOneExam);
router.get('/', examController.getAllExams);
router.post('/', validateExam, examController.createExam);
router.put('/:id', validateId, validateExam, examController.updateExam);
router.delete('/:id', validateId, examController.deleteExam);

module.exports = router;
