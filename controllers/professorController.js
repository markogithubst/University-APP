const models = require("../models");

const getAllProfessors = async (req, res) => {
    try {
      const professors = await models.Professor.findAll();
      if (!professors || professors.length === 0) {
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


const createProfessor = async (req, res) => {
  try {
    const professorName = req.body.name
    const professorAddress = req.body.address
    const professorExists = await models.Professor.findOne( {where: { name: professorName}} );
    const addressExists = await models.Professor.findOne( {where: { address: professorAddress}} );
    if (professorExists && addressExists) {
        return res.status(400).send({ message: "A professor with that name and address already exists" });
    }
    const newProfessor = await models.Professor.create(req.body);
    return res.status(201).json(newProfessor);
    
} catch (error) {
    return res.status(500).send({ message: "An error occurred while creating the professor: " + error.message });
}
};


const deleteProfessor = async (req, res) => {
  try {
    const professorId  = req.params.id
    const deletedProfessor = await models.Professor.findOne( {where: { id: professorId}} );
    if(!deletedProfessor || deletedProfessor.length === 0){
      return res.status(400).send({ message: "There is no professor with this ID in the database"})
    }
    await deletedProfessor.destroy()
    return res.status(204).send({message: "Professor succesfully deleted"});
  } catch (error) {
    return res.status(500).send({ message: "An error occured while deleting the professor: " + error.message })
  }
};

const updateProfessor = async (req, res) => {
  try {
    const professorId = req.params.id;
    const { name, address, phoneNumber, DepartmentId } = req.body;
    const professorExists = await models.Professor.findOne( {where: { id: professorId}} );
    if (!professorExists || professorExists.length === 0) {
      return res.status(404).json({ message: 'Professor not found' });
    }
    await models.Professor.update({ name, address, phoneNumber, DepartmentId }, { where: { id: professorId } });
    return res.status(200).json({ message: 'Professor updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: "An error occured while updating the professor: " + error.message });
  }
};


module.exports = {
    createProfessor,
    getAllProfessors,
    getOneProfessor,
    updateProfessor,
    deleteProfessor
}