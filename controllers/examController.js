const models = require("../models");

const getAllExams = async (req, res) => {
    try {
      const exams = await models.Exam.findAll();
      return res.status(200).json( exams );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };


module.exports = {
    // createExam,
    getAllExams,
    // getOneExam,
    // updateExam,
    // deleteExam
}