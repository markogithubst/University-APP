const models = require("../models");

const getAllCourses = async (req, res) => {
    try {
      const courses = await models.Course.findAll();
      if (!courses || courses.length == 0) {
        return res.status(404).send({ message: "There are no Courses in the database" });
      }
      return res.status(200).json( courses );
    } catch (error) {
      return res.status(500).send({ message: "An error occurred while fetching all courses: " + error.message });
    }
  };

const getOneCourse = async (req, res) => {
    try {
        const courseId  = req.params.id
        const course = await models.Course.findOne( {where: { id: courseId}} );
        if (!course) {
          return res.status(404).send({ message: "Course not found" });
        }
        return res.status(200).json( course );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };


module.exports = {
    // createCourse,
    getAllCourses,
    getOneCourse,
    // updateCourse,
    // deleteCourse
}