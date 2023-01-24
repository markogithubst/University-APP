const models = require('../models');

const getAllProfessors = async (req, res) => {
	try {
		const professors = await models.Professor.findAll();
		if (!professors || professors.length === 0) {
			return res.status(404).json({ message: 'There are no Professors in the database' });
		}
		return res.status(200).json( professors );
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred while fetching all professors: ' + error.message });
	}
};

  
const getOneProfessor = async (req, res) => {
	try {
		const professorId  = req.params.id;
		const professor = await models.Professor.findOne( {where: { id: professorId}} );
		if (!professor) {
			return res.status(404).json({ message: 'There is no Professor with this Id in the database' });
		}
		return res.status(200).json( professor );
	} catch (error) {
		return res.status(500).json(error.message);
	}
};


const createProfessor = async (req, res) => {
	try {
		const professorName = req.body.name;
		const professorAddress = req.body.address;
		const professorExists = await models.Professor.findOne( {where: { name: professorName}} );
		const addressExists = await models.Professor.findOne( {where: { address: professorAddress}} );
		if (professorExists && addressExists) {
			return res.status(400).json({ message: 'A professor with that name and address already exists' });
		}
		const newProfessor = await models.Professor.create(req.body);
		return res.status(201).json(newProfessor);
    
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred while creating the professor: ' + error.message });
	}
};


const deleteProfessor = async (req, res) => {
	try {
		const professorId  = req.params.id;
		const deletedProfessor = await models.Professor.findOne( {where: { id: professorId}} );
		if(!deletedProfessor){
			return res.status(400).json({ message: 'There is no professor with this ID in the database'});
		}
		await deletedProfessor.destroy();
		return res.status(200).send({message: 'Professor succesfully deleted'});
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while deleting the professor: ' + error.message });
	}
};

const updateProfessor = async (req, res) => {
	try {
		const professorId = req.params.id;
		const { name, address, phone_number, department_id } = req.body;
		const professorExists = await models.Professor.findOne( {where: { id: professorId}} );
		if (!professorExists || professorExists.length === 0) {
			return res.status(404).json({ message: 'Professor not found' });
		}
		await models.Professor.update({ name, address, phone_number, department_id }, { where: { id: professorId } });
		return res.status(200).json({ message: 'Professor updated successfully' });
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while updating the professor: ' + error.message });
	}
};

const addExamResults = async (req,res) => {
	try{
		const professorId = req.params.id;
		const professorExists = await models.Professor.findOne( {where: { id: professorId}} );
		if(!professorExists){
			return res.status(403).json({ message: 'Forbidden, you can not create exam results' });
		}
		await models.Result.create(req.body);
		return res.status(200).json({ message: 'Exam result successfully added' });
	} catch (error){
		return res.status(500).json({ message: 'An error occured while adding the exam result: ' + error.message });
	}
};

module.exports = {
	createProfessor,
	getAllProfessors,
	getOneProfessor,
	updateProfessor,
	deleteProfessor,
	addExamResults
};