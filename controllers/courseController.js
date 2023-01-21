const models = require("../models");

const getAllCourses = async (req, res) => {
    try {
      const courses = await models.Course.findAll();
      if (!courses || courses.length === 0) {
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

const createCourse = async (req, res) => {
  try {
    if (!req.body.name) {
        return res.status(400).send({ message: "Course name is required" });
    }
    const courseName = req.body.name
    const alreadyExists = await models.Course.findOne( {where: { name: courseName}} );
    if(!alreadyExists || alreadyExists.length === 0){
      const newCourse = await models.Course.create(req.body);
      return res.status(201).json(newCourse);
    }
    return res.status(404).send({ message: "There is already a Course with this name in the database" }); 
    
} catch (error) {
    return res.status(500).send({ message: "An error occurred while creating the course: " + error.message });
}
};


const deleteCourse = async (req, res) => {
  try {
    const courseId  = req.params.id
    const deletedCourse = await models.Course.findOne( {where: { id: courseId}} );
    if(!deletedCourse || deletedCourse.length === 0){
      return res.status(400).send({ message: "There is no course with this ID in the database"})
    }
    await deletedCourse.destroy()
    return res.status(400).send({message: "Course succesfully deleted"});
  } catch (error) {
    return res.status(500).send({ message: "An error occured while deleting the course: " + error.message })
  }
};

module.exports = {
    createCourse,
    getAllCourses,
    getOneCourse,
    // updateCourse,
    deleteCourse
}