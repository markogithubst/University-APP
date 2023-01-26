const express = require('express');
const router = express.Router();

const MajorController = require('../controllers/majorController');
const { validateName, validateId } = require('../middleware');

router.get('/:id', validateId, MajorController.getOneMajor);
router.get('/', MajorController.getAllMajors);
router.post('/', validateName, MajorController.createMajor);
router.put('/:id', validateId, validateName, MajorController.updateMajor);
router.delete('/:id', validateId, MajorController.deleteMajor);

module.exports = router;
