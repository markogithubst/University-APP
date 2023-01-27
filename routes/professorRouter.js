const express = require('express');
const router = express.Router();

const ProfessorController = require('../controllers/professorController');
const { validateId, validateProfessor, validateResult } = require('../middleware');

router.get('/:id', validateId, ProfessorController.getOneProfessor);
router.get('/', ProfessorController.getAllProfessors);
router.post('/', validateProfessor, ProfessorController.createProfessor);
router.put('/:id', validateId, validateProfessor, ProfessorController.updateProfessor);
router.delete('/:id', validateId, ProfessorController.deleteProfessor);

router.post('/add-exam-results/:id', validateId, validateResult, ProfessorController.addExamResults);

module.exports = router;
