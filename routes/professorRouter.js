const express = require('express');
const router = express.Router();

const professorController = require('../controllers/professorController');
const { validateId, validateProfessor, validateResult } = require('../middleware/joiMiddleware');
const { isLoggedIn } = require('../middleware/isLoggedIn');

router.get('/:id',
/* #swagger.tags = ['Professor'] */
  validateId, professorController.getOneProfessor);

router.get('/',
/* #swagger.tags = ['Professor'] */
  /* #swagger.responses[200] = {
        description: 'Get all Professors from the database',
        schema: [
            {
                "full_name": "Bilbo Baggins",
                "email": "bilbobaggins@fesb.com",
                "address": "Abbey Street 121, Dublin",
                "phone_number": "234567",
                "department_id": 1
            }
          ]
    } */
  professorController.getAllProfessors);

router.post('/',
/* #swagger.tags = ['Professor'] */
  validateProfessor, professorController.createProfessor);

router.put('/:id',
/* #swagger.tags = ['Professor'] */
  validateId, validateProfessor, professorController.updateProfessor);

router.delete('/:id',
/* #swagger.tags = ['Professor'] */
  validateId, professorController.deleteProfessor);

router.post('/add-exam-results/:id',
/* #swagger.tags = ['Professor'] */
  validateId, validateResult, isLoggedIn, professorController.addExamResults);

module.exports = router;
