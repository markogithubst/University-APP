const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { validateId, validateStudent } = require('../middleware/joiMiddleware');
const { isLoggedIn } = require('../middleware/isLoggedIn');

router.get('/:id',
/* #swagger.tags = ['Student'] */
  validateId, studentController.getOneStudent);

router.get('/',
/* #swagger.tags = ['Student'] */
  /* #swagger.responses[200] = {
        description: 'Get all Students from the database',
        schema: [
            {
                "full_name": "John Doe",
                "email": "johndoe@fesb.com",
                "address": "181 Mercer Street, New York",
                "phone_number": "111222",
                "major_id": 1
            }
          ]
    } */
  isLoggedIn, studentController.getAllStudents);

router.post('/',
/* #swagger.tags = ['Student'] */
  validateStudent, studentController.createStudent);

router.put('/:id',
/* #swagger.tags = ['Student'] */
  validateId, validateStudent, studentController.updateStudent);

router.delete('/:id',
/* #swagger.tags = ['Student'] */
  validateId, studentController.deleteStudent);

router.get('/own-results/:id',
/* #swagger.tags = ['Student'] */
  isLoggedIn, studentController.getOwnResults);

module.exports = router;
