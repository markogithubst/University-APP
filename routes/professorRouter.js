const express = require('express');
const router = express.Router();

const ProfessorController = require('../controllers/professorController');
const { validateId } = require('../middleware');

router.get('/:id',validateId , ProfessorController.getOneProfessor);
router.get('/', ProfessorController.getAllProfessors);
router.post('/', ProfessorController.createProfessor);
router.put('/:id', validateId , ProfessorController.updateProfessor);
router.delete('/:id', validateId ,ProfessorController.deleteProfessor);

router.post('/add-exam-results/:id', validateId , ProfessorController.addExamResults);

module.exports = router;