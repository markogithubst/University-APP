const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

const getAllMajors = async (req, res) => {
  /* #swagger.tags = ['Major'] */
  await getAll(req, res, models.Major);
};

const getOneMajor = async (req, res) => {
  /* #swagger.tags = ['Major'] */
  await getOne(req, res, models.Major);
};

const deleteMajor = async (req, res) => {
  /* #swagger.tags = ['Major'] */
  await deleteOne(req, res, models.Major);
};

const createMajor = async (req, res) => {
  /* #swagger.tags = ['Major'] */
  await createOne(req, res, models.Major);
};

const updateMajor = async (req, res) => {
  /* #swagger.tags = ['Major'] */
  await updateOne(req, res, models.Major);
};

module.exports = {
  createMajor,
  getAllMajors,
  getOneMajor,
  updateMajor,
  deleteMajor
};
