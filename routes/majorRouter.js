const express = require('express');
const router = express.Router();
const majorController = require('../controllers/majorController');
const { validateName, validateId } = require('../middleware/joiMiddleware');

router.get('/:id',
/* #swagger.tags = ['Major'] */
  validateId, majorController.getOneMajor);

router.get('/',
/* #swagger.tags = ['Major'] */
  /* #swagger.responses[200] = {
        description: 'Get all Majors from the database',
        schema: [
              {
                  "name": "Electrical Engineering and Information Technology"
              }
          ]
    } */
  majorController.getAllMajors);

router.post('/',
/* #swagger.tags = ['Major'] */
  validateName, majorController.createMajor);

router.put('/:id',
/* #swagger.tags = ['Major'] */
  validateId, validateName, majorController.updateMajor);

router.delete('/:id',
/* #swagger.tags = ['Major'] */
  validateId, majorController.deleteMajor);

module.exports = router;
