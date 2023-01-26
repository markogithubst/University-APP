const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

const getAllCourses = async (req, res) => {
    await getAll(req, res, models.Course);
};


const getOneCourse = async (req, res) => {
    await getOne(req, res, models.Course);
};

const createCourse = async (req, res) => {
    await createOne(req, res, models.Course);
};


const deleteCourse = async (req, res) => {
    await deleteOne(req, res, models.Course);
};

const updateCourse = async (req, res) => {
    await updateOne(req, res, models.Course);
};


module.exports = {
    createCourse,
    getAllCourses,
    getOneCourse,
    updateCourse,
    deleteCourse
};