const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

const getAllProfessors = async (req, res) => {
	await getAll(req, res, models.Professor, 'Professor');
};

  
const getOneProfessor = async (req, res) => {
	await getOne(req, res, models.Professor, 'Professor');
};

const deleteProfessor = async (req, res) => {
	await deleteOne(req, res, models.Professor);
};

const createProfessor = async (req, res) => {
	await createOne(req, res, models.Professor);
};


const updateProfessor = async (req, res) => {
	await updateOne(req, res, models.Professor);
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