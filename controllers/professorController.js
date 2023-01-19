const models = require("../models");

const getAllProfessors = async (req, res) => {
    try {
      const professors = await models.Professor.findAll();
      return res.status(200).json( professors );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };



module.exports = {
    // createProfessor,
    getAllProfessors,
    // getOneProfessor,
    // updateProfessor,
    // deleteProfessor
}