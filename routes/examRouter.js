const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');
const { validateId, validateExam } = require('../middleware/joiMiddleware');
const { isLoggedIn } = require('../middleware/isLoggedIn');

router.get('/:id',
/* #swagger.tags = ['Exam'] */
  validateId, examController.getOneExam);

router.get('/',
/* #swagger.tags = ['Exam'] */
  /* #swagger.responses[200] = {
              description: 'Get all Exams from the database',
              schema: [
          {
              "name": "Physics exam",
              "date_and_time": "2023-01-30T15:16:06.547Z",
              "course_id": 1
          }
      ]
    } */
  isLoggedIn, examController.getAllExams);

router.post('/',
/* #swagger.tags = ['Exam'] */
  validateExam, examController.createExam);

router.put('/:id',
/* #swagger.tags = ['Exam'] */
  validateId, validateExam, examController.updateExam);

router.delete('/:id',
/* #swagger.tags = ['Exam'] */
  validateId, examController.deleteExam);

module.exports = router;
