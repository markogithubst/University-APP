const express = require('express');
const router = express.Router();

const DepartmentController = require('../controllers/departmentController');

router.get('/:id', DepartmentController.getOneDepartment);
router.get('/', DepartmentController.getAllDepartments);
// router.post('/', DepartmentController.createDepartment);
// router.put('/:id', DepartmentController.updateDepartment);
// router.delete('/:id', DepartmentController.deleteDepartment);

module.exports = router;