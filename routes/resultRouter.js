const express = require('express');
const router = express.Router();

const resultController = require('../controllers/resultController');
const { validateId, validateDoubleId, validateResult } = require('../middleware');

router.get('/student/:id', validateId, resultController.getResultsByStudent);
router.get('/exam/:id', validateId, resultController.getResultsByExam);
router.get('/', resultController.getAllResults);
router.post('/', validateResult, resultController.createResult);
router.put('/:firstId/:secondId', validateDoubleId, validateResult, resultController.updateResult);
router.delete('/:firstId/:secondId', validateDoubleId, resultController.deleteResult);

module.exports = router;
