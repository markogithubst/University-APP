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
    const userIdFromToken = String(req.user.id);
    if (userIdFromToken !== resultsByStudentId) {
      return res.status(403).json({ message: 'Unauthorized access to other student\'s results' });
    }
    const allResultsByStudentId = await models.Result.findAll({ where: { student_id: resultsByStudentId } });
    return !allResultsByStudentId || allResultsByStudentId.length === 0
      ? res.status(404).json({ message: 'Results By entered Student Id not found' })
      : res.status(200).json(allResultsByStudentId);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getResultsByExam = async (req, res) => {
  try {
    const resultsByExamId = req.params.id;
    const allResultsByExamId = await models.Result.findAll({ where: { exam_id: resultsByExamId } });
    return !allResultsByExamId || allResultsByExamId.length === 0
      ? res.status(404).json({ message: 'Results By entered Exam Id not found' })
      : res.status(200).json(allResultsByExamId);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteResult = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { firstId, secondId } = req.params;
    // eslint-disable-next-line camelcase
    const deleted = await models.Result.destroy({ where: { student_id: firstId, exam_id: secondId } });
    return !deleted
      ? res.status(404).json({ message: 'Result with the inserted StudentId and ExamId not found' })
      : res.status(202).json({ message: 'Result with the inserted StudentId and ExamId succesfully deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occured while deleting the result: ' + error.message });
  }
};

const updateResult = async (req, res) => {
  try {
    const { firstId, secondId } = req.params;
    const resultUpdated = await models.Result.update(req.body, { where: { student_id: firstId, exam_id: secondId } });
    return resultUpdated[0] === 0
      ? res.status(404).json({ message: 'Result not updated' })
      : res.status(200).json({ message: 'Result updated successfully' });
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
