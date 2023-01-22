const models = require("../models");

const getAllExams = async (req, res) => {
    try {
      const exams = await models.Exam.findAll();
      if (!exams || exams.length === 0) {
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
          return res.status(404).send({ message: "There is no Exam with this ID in the database" });
        }
        return res.status(200).json( exam );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };


const createExam = async (req, res) => {
  try {
    if (!req.body.name || !req.body.dateAndTime || !req.body.CourseId) {
        return res.status(400).send({ message: "Fields Exam name, date/time, and Course ID are required" });
    }
    const newExam = await models.Exam.create(req.body);
    return res.status(201).json(newExam);
    
} catch (error) {
    return res.status(500).send({ message: "An error occurred while creating the exam: " + error.message });
}
};


const deleteExam = async (req, res) => {
  try {
    const examId  = req.params.id
    const exam = await models.Exam.findOne( {where: { id: examId}} );
    if(!exam || exam.length === 0){
      return res.status(400).send({ message: "There is no exam with this ID in the database"})
    }
    await exam.destroy()
    return res.status(204).send({message: "Exam succesfully deleted"});
  } catch (error) {
    return res.status(500).send({ message: "An error occured while deleting the exam: " + error.message })
  }
};

const updateExam = async (req, res) => {
  try {
    const examId = req.params.id;
    const { name, dateAndTime, CourseId } = req.body;
    const examExists = await models.Exam.findOne( {where: { id: examId}} );
    if (!examExists || examExists.length === 0) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    await models.Exam.update({ name, dateAndTime, CourseId }, { where: { id: examId } });
    return res.status(200).json({ message: 'Exam updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: "An error occured while updating the exam: " + error.message });
  }
};

module.exports = {
    createExam,
    getAllExams,
    getOneExam,
    updateExam,
    deleteExam
}