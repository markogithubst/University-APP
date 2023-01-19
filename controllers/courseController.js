const models = require("../models");

const getAllCourses = async (req, res) => {
    try {
      const courses = await models.Course.findAll();
      return res.status(200).json( courses );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    // createCourse,
    getAllCourses,
    // getOneCourse,
    // updateCourse,
    // deleteCourse
}