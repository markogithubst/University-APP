const express = require('express');
const router = express.Router();

const ResultController = require('../controllers/resultController')

router.get('/student/:id', ResultController.getResultsByStudent);
router.get('/exam/:id', ResultController.getResultsByExam);
router.get('/', ResultController.getAllResults);
// router.post('/', ResultController.createResult);
// router.put('/:id', ResultController.updateResult);
// router.delete('/:id', ResultController.deleteResult);

module.exports = router;