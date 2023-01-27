const express = require('express');
const router = express.Router();

const ResultController = require('../controllers/resultController');
const { validateId, validateDoubleId } = require('../middleware');

router.get('/student/:id', validateId, ResultController.getResultsByStudent);
router.get('/exam/:id', validateId, ResultController.getResultsByExam);
router.get('/', ResultController.getAllResults);
router.post('/', ResultController.createResult);
router.put('/:firstId/:secondId', validateDoubleId, ResultController.updateResult);
router.delete('/', ResultController.deleteResult);

module.exports = router;
