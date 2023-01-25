const models = require('../models');
const { getOne } = require('./crudController');
const { getAll } = require('./crudController');
const { deleteOne } = require('./crudController');

const getAllStudents = async (req, res) => {
	await getAll(req, res, models.Student);
};
  
const getOneStudent = async (req, res) => {
	await getOne(req, res, models.Student);
};

const deleteStudent = async (req, res) => {
	await deleteOne(req, res, models.Student);
};


const createStudent = async (req, res) => {
	try {
		const studentName = req.body.name;
		const studentAddress = req.body.address;
		const studentExists = await models.Student.findOne( {where: { name: studentName}} );
		const addressExists = await models.Student.findOne( {where: { address: studentAddress}} );
		if (studentExists && addressExists) {
			return res.status(400).json({ message: 'A student with that name and address already exists' });
		}
		const newStudent = await models.Student.create(req.body);
		return res.status(201).json(newStudent);
    
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred while creating the student: ' + error.message });
	}
};

const updateStudent = async (req, res) => {
	try {
		const studentId = req.params.id;
		const { name, email, address, phoneNumber, MajorId } = req.body;
		const studentExists = await models.Student.findOne( {where: { id: studentId}} );
		if (!studentExists) {
			return res.status(404).json({ message: 'Student not found' });
		}
		await models.Student.update({ name, email, address, phoneNumber, MajorId }, { where: { id: studentId } });
		return res.status(200).json({ message: 'Student updated successfully' });
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while updating the student: ' + error.message });
	}
};

const getOwnResults = async (req, res) => {
	try {
		const studentId = req.params.id;
		const studentResultExists = await models.Result.findOne( {where: { student_id: studentId}} );
		if (!studentResultExists) {
			return res.status(404).json({ message: 'Results By entered Student Id not found' });
		}
		const allResultsByStudentId = await models.Result.findAll( {where: { student_id: studentId}} );
		return res.status(200).json( allResultsByStudentId );
	} catch (error) {
		return res.status(500).json({message: 'An error occured while getting the results: ' + error.message});
	}
};


module.exports = {
	createStudent,
	getAllStudents,
	getOneStudent,
	updateStudent,
	deleteStudent,
	getOwnResults
};