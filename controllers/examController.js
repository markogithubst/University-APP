const models = require('../models');
const { getOne } = require('./crudController');
const { getAll } = require('./crudController');

const getAllExams = async (req, res) => {
	await getAll(req, res, models.Exam, 'Exam');
};


const getOneExam = async (req, res) => {
	await getOne(req, res, models.Exam, 'Exam');
};


const createExam = async (req, res) => {
	try {
		if (!req.body.name || !req.body.date_and_time || !req.body.course_id) {
			return res.status(400).json({ message: 'Fields Exam name, date/time, and Course ID are required' });
		}
		const newExam = await models.Exam.create(req.body);
		return res.status(201).json(newExam);
    
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred while creating the exam: ' + error.message });
	}
};


const deleteExam = async (req, res) => {
	try {
		const examId  = req.params.id;
		const exam = await models.Exam.findOne( {where: { id: examId}} );
		if(!exam){
			return res.status(400).json({ message: 'There is no exam with this ID in the database'});
		}
		await exam.destroy();
		return res.status(200).json({message: 'Exam succesfully deleted'});
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while deleting the exam: ' + error.message });
	}
};

const updateExam = async (req, res) => {
	try {
		const examId = req.params.id;
		const { name, date_and_time, course_id } = req.body;
		const examExists = await models.Exam.findOne( {where: { id: examId}} );
		if (!examExists) {
			return res.status(404).json({ message: 'Exam not found' });
		}
		await models.Exam.update({ name, date_and_time, course_id }, { where: { id: examId } });
		return res.status(200).json({ message: 'Exam updated successfully' });
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while updating the exam: ' + error.message });
	}
};

module.exports = {
	createExam,
	getAllExams,
	getOneExam,
	updateExam,
	deleteExam
};