const models = require("../models");

const getAllProfessors = async (req, res) => {
    try {
      const professors = await models.Professor.findAll();
      if (!professors || professors.length == 0) {
        return res.status(404).send({ message: "There are no Professors in the database" });
      }
      return res.status(200).json( professors );
    } catch (error) {
      return res.status(500).send({ message: "An error occurred while fetching all professors: " + error.message });
    }
  };

  
  const getOneProfessor = async (req, res) => {
    try {
        const professorId  = req.params.id
        const professor = await models.Professor.findOne( {where: { id: professorId}} );
        if (!professor || professor.length == 0) {
          return res.status(404).send({ message: "There is no Professor with this Id in the database" });
        }
        return res.status(200).json( professor );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    // createProfessor,
    getAllProfessors,
    getOneProfessor,
    // updateProfessor,
    // deleteProfessor
}