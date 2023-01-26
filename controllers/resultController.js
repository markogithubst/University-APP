const models = require('../models');
const { getAll, createOne } = require('./crudController');

const getAllResults = async (req, res) => {
  await getAll(req, res, models.Result);
};

const createResult = async (req, res) => {
  await createOne(req, res, models.Result);
};

const getResultsByStudent = async (req, res) => {
  try {
    const resultsByStudentId = req.params.id;
    const allResultsByStudentId = await models.Result.findAll({ where: { student_id: resultsByStudentId } });
    if (!allResultsByStudentId || allResultsByStudentId.length === 0) {
      return res.status(404).json({ message: 'Results By entered Student Id not found' });
    }
    return res.status(200).json(allResultsByStudentId);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getResultsByExam = async (req, res) => {
  try {
    const resultsByExamId = req.params.id;
    const allResultsByExamId = await models.Result.findAll({ where: { exam_id: resultsByExamId } });
    if (!allResultsByExamId || allResultsByExamId.length === 0) {
      return res.status(404).json({ message: 'Results By entered Exam Id not found' });
    }
    return res.status(200).json(allResultsByExamId);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteResult = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { exam_id, student_id } = req.body;
    // eslint-disable-next-line camelcase
    const deleted = await models.Result.destroy({ where: { student_id, exam_id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Result with the inserted StudentId and ExamId not found' });
    }
    return res.status(200).json({ message: 'Result with the inserted StudentId and ExamId succesfully deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occured while deleting the result: ' + error.message });
  }
};

const updateResult = async (req, res) => {
  try {
    const studentIdToUpdate = req.params.firstId;
    const examIdToUpdate = req.params.secondId;
    const resultUpdated = await models.Result.update(req.body, { where: { student_id: studentIdToUpdate, exam_id: examIdToUpdate } });
    if (resultUpdated[0] === 0) {
      return res.status(404).json({ message: 'Result not updated' });
    }
    return res.status(200).json({ message: 'Result updated successfully' });
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
