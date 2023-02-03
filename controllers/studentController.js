const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

const getAllStudents = async (req, res) => {
  /* #swagger.tags = ['Student'] */
  /* #swagger.responses[200] = {
        description: 'Get all Students from the database',
        schema: [
            {
                "full_name": "John Doe",
                "email": "johndoe@fesb.com",
                "address": "181 Mercer Street, New York",
                "phone_number": "111222",
                "major_id": 1
            }
          ]
    } */
  await getAll(req, res, models.Student);
};

const getOneStudent = async (req, res) => {
  /* #swagger.tags = ['Student'] */
  await getOne(req, res, models.Student);
};

const deleteStudent = async (req, res) => {
  /* #swagger.tags = ['Student'] */
  await deleteOne(req, res, models.Student);
};

const createStudent = async (req, res) => {
  /* #swagger.tags = ['Student'] */
  await createOne(req, res, models.Student);
};

const updateStudent = async (req, res) => {
  /* #swagger.tags = ['Student'] */
  await updateOne(req, res, models.Student);
};

const getOwnResults = async (req, res) => {
  /* #swagger.tags = ['Student'] */
  try {
    const studentId = req.params.id;
    const studentResultExists = await models.Result.findOne({ where: { student_id: studentId } });
    if (!studentResultExists) {
      return res.status(404).json({ message: 'Results By entered Student Id not found' });
    }
    const allResultsByStudentId = await models.Result.findAll({ where: { student_id: studentId } });
    return res.status(200).json(allResultsByStudentId);
  } catch (error) {
    return res.status(500).json({ message: 'An error occured while getting the results: ' + error.message });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getOneStudent,
  updateStudent,
  deleteStudent,
  getOwnResults
};
