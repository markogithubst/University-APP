const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

const getAllProfessors = async (req, res) => {
  /* #swagger.tags = ['Professor'] */
  await getAll(req, res, models.Professor, 'Professor');
};

const getOneProfessor = async (req, res) => {
  /* #swagger.tags = ['Professor'] */
  await getOne(req, res, models.Professor, 'Professor');
};

const deleteProfessor = async (req, res) => {
  /* #swagger.tags = ['Professor'] */
  await deleteOne(req, res, models.Professor);
};

const createProfessor = async (req, res) => {
  /* #swagger.tags = ['Professor'] */
  await createOne(req, res, models.Professor);
};

const updateProfessor = async (req, res) => {
  /* #swagger.tags = ['Professor'] */
  await updateOne(req, res, models.Professor);
};

const addExamResults = async (req, res) => {
  /* #swagger.tags = ['Professor'] */
  const professorId = req.params.id;
  const professorExists = await models.Professor.findOne({ where: { id: professorId } });
  return !professorExists
    ? res.status(403).json({ message: 'Forbidden, you can not create exam results' })
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
