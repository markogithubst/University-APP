const models = require("../models");

const getAllMajors = async (req, res) => {
    try {
      const majors = await models.Major.findAll();
      if (!majors || majors.length == 0) {
        return res.status(404).send({ message: "There are no Majors in the database" });
      }
      return res.status(200).json( majors );
    } catch (error) {
      return res.status(500).send({ message: "An error occurred while fetching all majors: " + error.message });
    }
  };

  
  const getOneMajor = async (req, res) => {
    try {
        const majorId  = req.params.id
        const major = await models.Major.findOne( {where: { id: majorId}} );
        if (!major || major.length == 0) {
          return res.status(404).send({ message: "There is no Major with this Id in the database" });
        }
        return res.status(200).json( major );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    // createMajor,
    getAllMajors,
    getOneMajor,
    // updateMajor,
    // deleteMajor
}