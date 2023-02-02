const express = require('express');
const router = express.Router();

const professorController = require('../controllers/professorController');
const { validateId, validateProfessor, validateResult } = require('../middleware');

router.get('/:id', validateId, professorController.getOneProfessor);
router.get('/', professorController.getAllProfessors);
router.post('/', validateProfessor, professorController.createProfessor);
router.put('/:id', validateId, validateProfessor, professorController.updateProfessor);
router.delete('/:id', validateId, professorController.deleteProfessor);

router.post('/add-exam-results/:id', validateId, validateResult, professorController.addExamResults);

module.exports = router;
