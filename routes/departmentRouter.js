const express = require('express');
const router = express.Router();

const departmentController = require('../controllers/departmentController');
const { validateName, validateId } = require('../middleware');

router.get('/:id', validateId, departmentController.getOneDepartment);
router.get('/', departmentController.getAllDepartments);
router.post('/', validateName, departmentController.createDepartment);
router.put('/:id', validateId, validateName, departmentController.updateDepartment);
router.delete('/:id', validateId, departmentController.deleteDepartment);

module.exports = router;
