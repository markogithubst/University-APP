const express = require('express');
const router = express.Router();

const ResultController = require('../controllers/resultController');
const { validateId, validateDoubleId, validateResult } = require('../middleware');

router.get('/student/:id', validateId, ResultController.getResultsByStudent);
router.get('/exam/:id', validateId, ResultController.getResultsByExam);
router.get('/', ResultController.getAllResults);
router.post('/', validateResult, ResultController.createResult);
router.put('/:firstId/:secondId', validateDoubleId, validateResult, ResultController.updateResult);
router.delete('/:firstId/:secondId', validateDoubleId, ResultController.deleteResult);

module.exports = router;
