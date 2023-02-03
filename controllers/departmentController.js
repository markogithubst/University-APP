const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

const getAllDepartments = async (req, res) => {
  /* #swagger.tags = ['Department'] */
  /* #swagger.responses[200] = {
        description: 'Get all Departments from the database',
        schema: [
            {
                "name": "Department of Power Engineering"
            }
        ]
    } */
  await getAll(req, res, models.Department);
};

const getOneDepartment = async (req, res) => {
  /* #swagger.tags = ['Department'] */
  await getOne(req, res, models.Department);
};

const deleteDepartment = async (req, res) => {
  /* #swagger.tags = ['Department'] */
  await deleteOne(req, res, models.Department);
};

const createDepartment = async (req, res) => {
  /* #swagger.tags = ['Department'] */
  await createOne(req, res, models.Department);
};

const updateDepartment = async (req, res) => {
  /* #swagger.tags = ['Department'] */
  await updateOne(req, res, models.Department);
};

module.exports = {
  createDepartment,
  getAllDepartments,
  getOneDepartment,
  updateDepartment,
  deleteDepartment
};
