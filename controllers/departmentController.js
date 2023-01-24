const models = require('../models');

const getAllDepartments = async (req, res) => {
	try {
		const departments = await models.Department.findAll();
		if (!departments || departments.length === 0) {
			return res.status(404).json({ message: 'There are no Departments in the database' });
		}
		return res.status(200).json( departments );
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred while fetching all departments: ' + error.message });
	}
};

  
const getOneDepartment = async (req, res) => {
	try {
		const departmentId  = req.params.id;
		const department = await models.Department.findOne( {where: { id: departmentId}} );
		if (!department) {
			return res.status(404).json({ message: 'Department not found' });
		}
		return res.status(200).json( department );
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred while fetching the department: ' + error.message });
	}
};


const createDepartment = async (req, res) => {
	try {
		// Validate the data
		if (!req.body.name) {
			return res.status(400).json({ message: 'Department name is required' });
		}
		const departmentName = req.body.name;
		const alreadyExists = await models.Department.findOne( {where: { name: departmentName}} );
		if(!alreadyExists){
			const newDepartment = await models.Department.create(req.body);
			return res.status(201).json(newDepartment);
		}
		return res.status(404).json({ message: 'There is already a Department with this name in the database' }); 
    
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred while creating the department: ' + error.message });
	}
};

const deleteDepartment = async (req, res) => {
	try {
		const departmentId  = req.params.id;
		const deletedDepartment = await models.Department.findOne( {where: { id: departmentId}} );
		if(!deletedDepartment){
			return res.status(400).json({ message: 'There is no department with this ID in the database'});
		}
		await deletedDepartment.destroy();
		return res.status(200).json({message: 'Department succesfully deleted'});
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while deleting the department: ' + error.message });
	}
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