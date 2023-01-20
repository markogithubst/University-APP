const models = require("../models");

const getAllExams = async (req, res) => {
    try {
      const exams = await models.Exam.findAll();
      if (!exams || exams.length == 0) {
        return res.status(404).send({ message: "There are no Exams in the database" });
      }
      return res.status(200).json( exams );
    } catch (error) {
      return res.status(500).send({ message: "An error occurred while fetching all exams: " + error.message });
    }
  };

const getOneExam = async (req, res) => {
    try {
        const examId  = req.params.id
        const exam = await models.Exam.findOne( {where: { id: examId}} );
        if (!exam || exam.length == 0) {
          return res.status(404).send({ message: "There is no Exam with this Id in the database" });
        }
        return res.status(200).json( exam );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    // createExam,
    getAllExams,
    getOneExam,
    // updateExam,
    // deleteExam
}