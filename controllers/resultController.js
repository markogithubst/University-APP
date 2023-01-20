const models = require("../models");

const getAllResults = async (req, res) => {
    try {
      const results = await models.Result.findAll();
      if (!results || results.length == 0) {
        return res.status(404).send({ message: "There are no Results in the database" });
      }
      return res.status(200).json( results );
    } catch (error) {
      return res.status(500).send({ message: "An error occurred while fetching all results: " + error.message });
    }
  };


  const getResultsByStudent = async (req, res) => {
    try {
        const resultsByStudentId = req.params.id
        const allResultsByStudentId = await models.Result.findAll( {where: { StudentId: resultsByStudentId}} );
        if (!allResultsByStudentId || allResultsByStudentId.length == 0) {
          return res.status(404).send({ message: "Results By entered Student Id not found" });
        }
        return res.status(200).json( allResultsByStudentId );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getResultsByExam = async (req, res) => {
    try {
        const resultsByExamId  = req.params.id
        const allResultsByExamId = await models.Result.findAll( {where: { ExamId: resultsByExamId}} );
        if (!allResultsByExamId || allResultsByExamId.length == 0) {
          return res.status(404).send({ message: "Results By entered Exam Id not found" });
        }
        return res.status(200).json( allResultsByExamId );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };


module.exports = {
    // createResult,
    getAllResults,
    getResultsByStudent,
    getResultsByExam,
    // updateResult,
    // deleteResult
}