const models = require("../models");

const getAllStudents = async (req, res) => {
    try {
      const students = await models.Student.findAll();
      return res.status(200).json( students );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    // createStudent,
    getAllStudents,
    // getOneStudent,
    // updateStudent,
    // deleteStudent
}