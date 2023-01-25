const models = require('../models');
const { getOne, getAll, deleteOne, createOne } = require('./crudController');

const getAllExams = async (req, res) => {
	await getAll(req, res, models.Exam);
};

const getOneExam = async (req, res) => {
	await getOne(req, res, models.Exam, 'Exam');
};

const deleteExam = async (req, res) => {
	await deleteOne(req, res, models.Exam);
};


const createExam = async (req, res) => {
	await createOne(req, res, models.Exam);
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