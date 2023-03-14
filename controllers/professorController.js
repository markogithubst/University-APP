const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');
const { statusMessages } = require('../utils/statusMessages');

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

const addExamResults = async (req, res) => {
  const professorId = req.params.id;
  const userIdFromToken = String(req.user.id);
  if (userIdFromToken !== professorId) {
    return res.status(403).json({ message: statusMessages.addResultUnauthorized });
  }
  const professorExists = await models.Professor.findOne({ where: { id: professorId } });
  return !professorExists
    ? res.status(403).json({ message: statusMessages.addResultNotProfessor })
    : await createOne(req, res, models.Result);
};

module.exports = {
  createProfessor,
  getAllProfessors,
  getOneProfessor,
  updateProfessor,
  deleteProfessor,
  addExamResults
};
