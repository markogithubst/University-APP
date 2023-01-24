const models = require("../models");

const getAllMajors = async (req, res) => {
    try {
      const majors = await models.Major.findAll();
      if (!majors || majors.length === 0) {
        return res.status(404).json({ message: "There are no Majors in the database" });
      }
      return res.status(200).json( majors );
    } catch (error) {
      return res.status(500).json({ message: "An error occurred while fetching all majors: " + error.message });
    }
  };

  
const getOneMajor = async (req, res) => {
try {
      const majorId  = req.params.id
      const major = await models.Major.findOne( {where: { id: majorId}} );
      if (!major) {
        return res.status(404).json({ message: "There is no Major with this Id in the database" });
      }
      return res.status(200).json( major );
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const createMajor = async (req, res) => {
  try {
    // Validate the data
    if (!req.body.name) {
        return res.status(400).json({ message: "Major name is required" });
    }
    const majorName = req.body.name;
    const alreadyExists = await models.Major.findOne( {where: { name: majorName}} );
    if(!alreadyExists){
      const newMajor = await models.Major.create(req.body);
      return res.status(201).json(newMajor);
    }
    return res.status(404).json({ message: "There is already a Major with this name in the database" }); 
    
} catch (error) {
    return res.status(500).json({ message: "An error occurred while creating the major: " + error.message });
}
};

const deleteMajor = async (req, res) => {
  try {
    const majorId  = req.params.id
    const deletedMajor = await models.Major.findOne( {where: { id: majorId}} );
    if(!deletedMajor){
      return res.status(400).json({ message: "There is no major with this ID in the database"})
    }
    await deletedMajor.destroy()
    return res.status(200).json({message: "Major succesfully deleted"});
  } catch (error) {
    return res.status(500).json({ message: "An error occured while deleting the major: " + error.message })
  }
};


const updateMajor = async (req, res) => {
  try {
    const majorId = req.params.id;
    const { name } = req.body;
    const majorExists = await models.Major.findOne( {where: { id: majorId}} );
    if (!majorExists) {
      return res.status(404).json({ message: 'Major not found' });
    }
    await models.Major.update({ name }, { where: { id: majorId } });
    return res.status(200).json({ message: 'Major updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: "An error occured while updating the major: " + error.message });
  }
};

module.exports = {
    createMajor,
    getAllMajors,
    getOneMajor,
    updateMajor,
    deleteMajor
}