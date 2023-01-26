const express = require('express');
const router = express.Router();

const DepartmentController = require('../controllers/departmentController');
const { validateName, validateId } = require('../middleware');

router.get('/:id', validateId, DepartmentController.getOneDepartment);
router.get('/', DepartmentController.getAllDepartments);
router.post('/', validateName, DepartmentController.createDepartment);
router.put('/:id', validateId, validateName, DepartmentController.updateDepartment);
router.delete('/:id', validateId, DepartmentController.deleteDepartment);

module.exports = router;
