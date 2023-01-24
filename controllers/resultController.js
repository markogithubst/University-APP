const models = require('../models');

const getAllResults = async (req, res) => {
	try {
		const results = await models.Result.findAll();
		if (!results || results.length === 0) {
			return res.status(404).json({ message: 'There are no Results in the database' });
		}
		return res.status(200).json( results );
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred while fetching all results: ' + error.message });
	}
};

  

const getResultsByStudent = async (req, res) => {
	try {
		const resultsByStudentId = req.params.id;
		const allResultsByStudentId = await models.Result.findAll( {where: { student_id: resultsByStudentId}} );
		if (!allResultsByStudentId || allResultsByStudentId.length == 0) {
			return res.status(404).json({ message: 'Results By entered Student Id not found' });
		}
		return res.status(200).json( allResultsByStudentId );
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const getResultsByExam = async (req, res) => {
	try {
		const resultsByExamId  = req.params.id;
		const allResultsByExamId = await models.Result.findAll( {where: { exam_id: resultsByExamId}} );
		if (!allResultsByExamId || allResultsByExamId.length == 0) {
			return res.status(404).json({ message: 'Results By entered Exam Id not found' });
		}
		return res.status(200).json( allResultsByExamId );
	} catch (error) {
		return res.status(500).json(error.message);
	}
};



const createResult = async (req, res) => {
	try {
		if (!req.body.student_id || !req.body.grade || !req.body.exam_id) {
			return res.status(400).json({ message: 'StudentId, grade and ExamId fields are required' });
		}
		const newResult = await models.Result.create(req.body);
		return res.status(201).json(newResult);
    
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred while creating the enrollment: ' + error.message });
	}
};


const deleteResult = async (req, res) => {
	try {
		const insertedStudentId = req.body.student_id;
		const insertedExamId = req.body.exam_id;
		if(!insertedStudentId || !insertedExamId){
			return res.status(400).json({ message: 'StudentId and ExamId fields are required' });
		}
		await models.Result.destroy({ where: { student_id: insertedStudentId, exam_id: insertedExamId}});
		return res.status(200).json({ message: 'Result with the inserted StudenId and ExamId succesfully deleted' });
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while deleting the result: ' + error.message });
	}
};

const updateResult = async (req, res) => {
	try {
		const studentIdToUpdate = req.params.StudentId;
		const examIdToUpdate = req.params.ExamId;
		const updatedStudentId = req.body.student_id;
		const updatedGrade = req.body.grade;
		const updatedExamId = req.body.exam_id;
		const resultExists = await models.Result.findOne( {where: [{ exam_id: examIdToUpdate}, {student_id: studentIdToUpdate}]} );
		if (!resultExists) {
			return res.status(404).json({ message: 'Result with inserted StudentID and ExamId not found' });
		}
		await models.Result.update({student_id: updatedStudentId, grade: updatedGrade, exam_id: updatedExamId }, {where: {student_id: studentIdToUpdate, exam_id: examIdToUpdate}});
		return res.status(200).json({ message: 'Result updated successfully'  });
    
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while updating the result: ' + error.message });
	}
};

module.exports = {
	createResult,
	getAllResults,
	getResultsByStudent,
	getResultsByExam,
	updateResult,
	deleteResult
};