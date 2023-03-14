const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');
const { statusMessages } = require('../utils/statusMessages');

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
  await createOne(req, res, models.Student);
};

const updateStudent = async (req, res) => {
  await updateOne(req, res, models.Student);
};

const getOwnResults = async (req, res) => {
  try {
    const studentId = req.params.id;
    const userIdFromToken = String(req.user.id);
    if (userIdFromToken !== studentId) {
      return res.status(403).json({ message: statusMessages.viewResultUnauthorized });
    }
    const allResultsByStudentId = await models.Result.findAll({ where: { student_id: studentId } });
    if (allResultsByStudentId.length === 0) {
      return res.status(404).json({ message: statusMessages.itemNotFound });
    }
    return res.status(200).json(allResultsByStudentId);
  } catch (error) {
    return res.status(500).json({ message: 'An error occured while getting the results: ' + error.message });
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
