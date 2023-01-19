const models = require("../models");

const getAllEnrollments = async (req, res) => {
    try {
      const enrollments = await models.Enrollment.findAll();
      return res.status(200).json( enrollments );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    // createEnrollment,
    getAllEnrollments,
    // getOneEnrollment,
    // updateEnrollment,
    // deleteEnrollment
}