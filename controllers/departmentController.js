const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');


const getAllDepartments = async (req, res) => {
    await getAll(req, res, models.Department);
};

  
const getOneDepartment = async (req, res) => {
    await getOne(req, res, models.Department);
};

const deleteDepartment = async (req, res) => {
    await deleteOne(req, res, models.Department);
};

const createDepartment = async (req, res) => {
    await createOne(req, res, models.Department);
};

const updateDepartment = async (req, res) => {
    await updateOne(req, res, models.Department);
};

module.exports = {
    createDepartment,
    getAllDepartments,
    getOneDepartment,
    updateDepartment,
    deleteDepartment
};