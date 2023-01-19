const models = require("../models");

// const getAllMajors = await MajorModel.findAll();
// console.log(getAllMajors.every(major => major instanceof MajorModel)); // true
// console.log("All majors:", JSON.stringify(getAllMajors, null, 2));

const getAllMajors = async (req, res) => {
    try {
      const majors = await models.Major.findAll();
      return res.status(200).json( majors );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    // createMajor,
    getAllMajors,
    // getOneMajor,
    // updateMajor,
    // deleteMajor
}