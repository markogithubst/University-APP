const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

const getAllExams = async (req, res) => {
  await getAll(req, res, models.Exam);
};

const getOneExam = async (req, res) => {
  await getOne(req, res, models.Exam, 'Exam');
};

const deleteExam = async (req, res) => {
  await deleteOne(req, res, models.Exam);
};

const createExam = async (req, res) => {
  await createOne(req, res, models.Exam);
};

const updateExam = async (req, res) => {
  await updateOne(req, res, models.Exam);
};

module.exports = {
  createExam,
  getAllExams,
  getOneExam,
  updateExam,
  deleteExam
};
