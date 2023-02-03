const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

const getAllProfessors = async (req, res) => {
  /* #swagger.tags = ['Professor'] */
  /* #swagger.responses[200] = {
        description: 'Get all Professors from the database',
        schema: [
            {
                "full_name": "Bilbo Baggins",
                "email": "bilbobaggins@fesb.com",
                "address": "Abbey Street 121, Dublin",
                "phone_number": "234567",
                "department_id": 1
            }
          ]
    } */
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
