const express = require('express');
const router = express.Router();

const ProfessorController = require('../controllers/professorController')

router.get('/:id', ProfessorController.getOneProfessor);
router.get('/', ProfessorController.getAllProfessors);
// router.post('/', ProfessorController.createProfessor);
// router.put('/:id', ProfessorController.updateProfessor);
// router.delete('/:id', ProfessorController.deleteProfessor);

module.exports = router;