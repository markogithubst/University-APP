const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

const getAllCourses = async (req, res) => {
  /* #swagger.tags = ['Course'] */
  await getAll(req, res, models.Course);
};

const getOneCourse = async (req, res) => {
  /* #swagger.tags = ['Course'] */
  await getOne(req, res, models.Course);
};

const createCourse = async (req, res) => {
  /* #swagger.tags = ['Course'] */
  await createOne(req, res, models.Course);
};

const deleteCourse = async (req, res) => {
  /* #swagger.tags = ['Course'] */
  await deleteOne(req, res, models.Course);
};

const updateCourse = async (req, res) => {
  /* #swagger.tags = ['Course'] */
  await updateOne(req, res, models.Course);
};

module.exports = {
  createCourse,
  getAllCourses,
  getOneCourse,
  updateCourse,
  deleteCourse
};
