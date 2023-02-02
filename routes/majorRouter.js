const express = require('express');
const router = express.Router();

const majorController = require('../controllers/majorController');
const { validateName, validateId } = require('../middleware');

router.get('/:id', validateId, majorController.getOneMajor);
router.get('/', majorController.getAllMajors);
router.post('/', validateName, majorController.createMajor);
router.put('/:id', validateId, validateName, majorController.updateMajor);
router.delete('/:id', validateId, majorController.deleteMajor);

module.exports = router;
