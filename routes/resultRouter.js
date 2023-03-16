const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');
const { validateId, validateDoubleId, validateResult } = require('../middleware/joiMiddleware');
const { isLoggedIn } = require('../middleware/isLoggedIn');

router.get('/student/:id',
/* #swagger.tags = ['Result'] */
  validateId, isLoggedIn, resultController.getResultsByStudent);

router.get('/exam/:id',
/* #swagger.tags = ['Result'] */
  validateId, resultController.getResultsByExam);

router.get('/',
/* #swagger.tags = ['Result'] */
  /* #swagger.responses[200] = {
        description: 'Get all Results from the database',
        schema: [
            {
                "student_id": 3,
                "grade": 2,
                "exam_id": 3
            }
          ]
    } */
  resultController.getAllResults);

router.post('/',
/* #swagger.tags = ['Result'] */
  validateResult, resultController.createResult);

router.put('/:firstId/:secondId',
/* #swagger.tags = ['Result'] */
  validateDoubleId, validateResult, resultController.updateResult);

router.delete('/:firstId/:secondId',
/* #swagger.tags = ['Result'] */
  validateDoubleId, resultController.deleteResult);

module.exports = router;
