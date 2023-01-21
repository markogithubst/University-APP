const models = require("../models");

const getAllResults = async (req, res) => {
    try {
      const results = await models.Result.findAll();
      if (!results || results.length === 0) {
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



const createResult = async (req, res) => {
  try {
    if (!req.body.StudentId || !req.body.grade || !req.body.ExamId) {
        return res.status(400).send({ message: "StudentId, grade and ExamId fields are required" });
    }
    const newResult = await models.Result.create(req.body);
    return res.status(201).json(newResult);
    
} catch (error) {
    return res.status(500).send({ message: "An error occurred while creating the enrollment: " + error.message });
}
};


const deleteResult = async (req, res) => {
  try {
    const insertedStudentId = req.body.StudentId
    const insertedExamId = req.body.ExamId
    if(!insertedStudentId || !insertedExamId){
      return res.status(400).send({ message: "StudentId and ExamId fields are required" });
    }
    await models.Result.destroy({ where: { StudentId: insertedStudentId, ExamId: insertedExamId}});
    return res.status(400).send({ message: "Result with the inserted StudenId and ExamId succesfully deleted" });
  } catch (error) {
    return res.status(500).send({ message: "An error occured while deleting the result: " + error.message })
  }
};

module.exports = {
    createResult,
    getAllResults,
    getResultsByStudent,
    getResultsByExam,
    // updateResult,
    deleteResult
}