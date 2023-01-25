const models = require('../models');
const { getOne, getAll, deleteOne, createOne } = require('./crudController');


const getAllDepartments = async (req, res) => {
	await getAll(req, res, models.Department);
};

  
const getOneDepartment = async (req, res) => {
	await getOne(req, res, models.Department);
};

const deleteDepartment = async (req, res) => {
	await deleteOne(req, res, models.Department);
};

const createDepartment = async (req, res) => {
	await createOne(req, res, models.Department);
};

const updateDepartment = async (req, res) => {
	try {
		const departmentId = req.params.id;
		const { name } = req.body;
		const departmentExists = await models.Department.findOne( {where: { id: departmentId}} );
		if (!departmentExists) {
			return res.status(404).json({ message: 'Department not found' });
		}
		await models.Department.update({ name }, { where: { id: departmentId } });
		return res.status(200).json({ message: 'Department updated successfully' });
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while updating the department: ' + error.message });
	}
};

module.exports = {
	createDepartment,
	getAllDepartments,
	getOneDepartment,
	updateDepartment,
	deleteDepartment
};