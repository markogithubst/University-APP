const express = require('express');
const router = express.Router();

const MajorController = require('../controllers/majorController')



router.get('/:id', MajorController.getOneMajor);
router.get('/', MajorController.getAllMajors);
router.post('/', MajorController.createMajor);
// router.put('/:id', MajorController.updateMajor);
// router.delete('/:id', MajorController.deleteMajor);

module.exports = router;