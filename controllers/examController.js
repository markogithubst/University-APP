const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

const getAllExams = async (req, res) => {
  /* #swagger.tags = ['Exam'] */
  /* #swagger.responses[200] = {
              description: 'Get all Exams from the database',
              schema: [
          {
              "name": "Physics exam",
              "date_and_time": "2023-01-30T15:16:06.547Z",
              "course_id": 1
          }
      ]
    } */
  await getAll(req, res, models.Exam);
};

const getOneExam = async (req, res) => {
  /* #swagger.tags = ['Exam'] */
  await getOne(req, res, models.Exam, 'Exam');
};

const deleteExam = async (req, res) => {
  /* #swagger.tags = ['Exam'] */
  await deleteOne(req, res, models.Exam);
};

const createExam = async (req, res) => {
  /* #swagger.tags = ['Exam'] */
  await createOne(req, res, models.Exam);
};

const updateExam = async (req, res) => {
  /* #swagger.tags = ['Exam'] */
  await updateOne(req, res, models.Exam);
};

module.exports = {
  createExam,
  getAllExams,
  getOneExam,
  updateExam,
  deleteExam
};
